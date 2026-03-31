#!/usr/bin/env node

/**
 * Defense Contract Opportunity Scraper for Gilmore Furniture Inc.
 * Sources: USASpending.gov API (no key needed) + SAM.gov bulk data
 *
 * Usage: node scripts/defense-contracts.mjs
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const USA_SPENDING_BASE = 'https://api.usaspending.gov/api/v2';

const NAICS_CODES = {
  '337127': 'Institutional Furniture Manufacturing',
  '337211': 'Wood Office Furniture Manufacturing',
  '337214': 'Office Furniture (except Wood) Manufacturing',
  '337215': 'Showcase, Partition, Shelving, and Locker Manufacturing',
  '332312': 'Fabricated Structural Metal Manufacturing',
  '332322': 'Sheet Metal Work Manufacturing',
  '332439': 'Other Metal Container Manufacturing',
  '332812': 'Metal Coating, Engraving & Heat Treating',
  '332999': 'Miscellaneous Fabricated Metal Product Manufacturing',
  '314999': 'Miscellaneous Textile Product Mills',
  '336360': 'Motor Vehicle Seating & Interior Trim Manufacturing',
  '336413': 'Other Aircraft Part & Auxiliary Equipment Manufacturing',
  '337121': 'Upholstered Household Furniture Manufacturing',
  '337122': 'Nonupholstered Wood Household Furniture Manufacturing',
  '339999': 'All Other Miscellaneous Manufacturing',
};

const KEYWORDS = [
  'furniture',
  'weapon storage',
  'locker',
  'metal fabrication',
  'upholstery',
  'tactical textile',
  'plate carrier',
  'barracks',
  'shipboard furniture',
  'transit case',
  'equipment rack',
  'armory',
  'cabinet',
  'workstation',
  'seating military',
  'SCIF furniture',
  'shelving',
  'enclosure',
];

const DOD_AGENCIES = [
  'Department of Defense',
  'Department of the Army',
  'Department of the Navy',
  'Department of the Air Force',
];

async function fetchJSON(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    // Skip SSL for .gov self-signed certs
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

async function searchAwardsByNAICS(naicsCode, desc) {
  const body = {
    filters: {
      naics_codes: [naicsCode],
      time_period: [{ start_date: '2025-04-01', end_date: '2026-03-31' }],
      award_type_codes: ['A', 'B', 'C', 'D'],
    },
    fields: [
      'Award ID', 'Recipient Name', 'Award Amount', 'Description',
      'Start Date', 'End Date', 'Awarding Agency', 'Awarding Sub Agency',
      'NAICS Code', 'Place of Performance State Code',
    ],
    limit: 50,
    page: 1,
    sort: 'Award Amount',
    order: 'desc',
  };

  try {
    const data = await fetchJSON(`${USA_SPENDING_BASE}/search/spending_by_award/`, body);
    return (data.results || []).map((r) => ({ ...r, _source: `NAICS ${naicsCode} — ${desc}` }));
  } catch (err) {
    console.error(`    Error (${naicsCode}): ${err.message}`);
    return [];
  }
}

async function searchAwardsByKeyword(keyword) {
  const body = {
    filters: {
      keywords: [keyword],
      time_period: [{ start_date: '2025-04-01', end_date: '2026-03-31' }],
      award_type_codes: ['A', 'B', 'C', 'D'],
      agencies: DOD_AGENCIES.map((name) => ({
        type: 'awarding',
        tier: 'toptier',
        name,
      })),
    },
    fields: [
      'Award ID', 'Recipient Name', 'Award Amount', 'Description',
      'Start Date', 'End Date', 'Awarding Agency', 'Awarding Sub Agency',
      'NAICS Code', 'Place of Performance State Code',
    ],
    limit: 25,
    page: 1,
    sort: 'Award Amount',
    order: 'desc',
  };

  try {
    const data = await fetchJSON(`${USA_SPENDING_BASE}/search/spending_by_award/`, body);
    return (data.results || []).map((r) => ({ ...r, _source: `Keyword: "${keyword}" (DoD)` }));
  } catch (err) {
    console.error(`    Error ("${keyword}"): ${err.message}`);
    return [];
  }
}

async function getSpendingByNAICS() {
  const naicsCodes = Object.keys(NAICS_CODES);
  const body = {
    filters: {
      naics_codes: naicsCodes,
      time_period: [{ start_date: '2024-10-01', end_date: '2026-03-31' }],
      award_type_codes: ['A', 'B', 'C', 'D'],
      agencies: DOD_AGENCIES.map((name) => ({
        type: 'awarding',
        tier: 'toptier',
        name,
      })),
    },
    category: 'naics',
    limit: 20,
  };

  try {
    const data = await fetchJSON(`${USA_SPENDING_BASE}/search/spending_by_category/`, body);
    return data.results || [];
  } catch (err) {
    console.error(`  Spending by category error: ${err.message}`);
    return [];
  }
}

function dedup(results) {
  const seen = new Map();
  for (const r of results) {
    const id = r['Award ID'] || r['Description']?.slice(0, 50);
    if (!id) continue;
    if (!seen.has(id)) {
      seen.set(id, { ...r, _sources: [r._source] });
    } else {
      seen.get(id)._sources.push(r._source);
    }
  }
  return Array.from(seen.values());
}

function formatCurrency(amount) {
  if (!amount) return 'N/A';
  return '$' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatAward(award, idx) {
  const lines = [];
  lines.push(`\n${'━'.repeat(80)}`);
  lines.push(`  #${idx + 1}  ${award['Award ID'] || 'N/A'}`);
  lines.push(`${'━'.repeat(80)}`);

  const fields = [
    ['Amount', formatCurrency(award['Award Amount'])],
    ['Recipient', award['Recipient Name']],
    ['Agency', award['Awarding Agency']],
    ['Sub Agency', award['Awarding Sub Agency']],
    ['NAICS', award['NAICS Code']],
    ['Start Date', award['Start Date']],
    ['End Date', award['End Date']],
    ['State', award['Place of Performance State Code']],
    ['Matched By', [...new Set(award._sources || [])].join(' | ')],
  ];

  for (const [label, val] of fields) {
    if (val) lines.push(`  ${label.padEnd(14)} ${val}`);
  }

  if (award['Description']) {
    const desc = award['Description'].replace(/\s+/g, ' ').trim().slice(0, 500);
    lines.push(`\n  ${desc}`);
  }

  return lines.join('\n');
}

async function main() {
  console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║  GILMORE FURNITURE — Defense Contract Opportunity Scraper              ║
║  Sources: USASpending.gov (FY2025-2026 contract awards & spending)    ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const allResults = [];

  // Phase 1: Search by NAICS codes
  console.log('Phase 1: Searching by NAICS codes (FY2025-2026 awards)...\n');
  for (const [code, desc] of Object.entries(NAICS_CODES)) {
    process.stdout.write(`  NAICS ${code} (${desc})... `);
    const results = await searchAwardsByNAICS(code, desc);
    const total = results.reduce((sum, r) => sum + (r['Award Amount'] || 0), 0);
    console.log(`${results.length} awards, ${formatCurrency(total)} total`);
    allResults.push(...results);
    await sleep(300);
  }

  // Phase 2: Keyword search (DoD only)
  console.log('\nPhase 2: Searching keywords in DoD contracts...\n');
  for (const kw of KEYWORDS) {
    process.stdout.write(`  "${kw}"... `);
    const results = await searchAwardsByKeyword(kw);
    const total = results.reduce((sum, r) => sum + (r['Award Amount'] || 0), 0);
    console.log(`${results.length} awards, ${formatCurrency(total)} total`);
    allResults.push(...results);
    await sleep(300);
  }

  // Phase 3: DoD spending by NAICS category
  console.log('\nPhase 3: DoD spending by NAICS category...\n');
  const spendingByCategory = await getSpendingByNAICS();

  if (spendingByCategory.length > 0) {
    console.log('  Top NAICS categories by DoD spending:\n');
    console.log('  ' + 'NAICS'.padEnd(8) + 'Spending'.padStart(16) + '  Category');
    console.log('  ' + '─'.repeat(70));
    for (const cat of spendingByCategory) {
      if (cat.amount > 0) {
        console.log(
          `  ${String(cat.code || cat.id || '').padEnd(8)}${formatCurrency(cat.amount).padStart(16)}  ${cat.name || ''}`
        );
      }
    }
  }

  // Deduplicate and categorize
  const unique = dedup(allResults);

  // Separate DoD vs other agencies
  const dodAwards = unique.filter((r) => {
    const agency = (r['Awarding Agency'] || '').toLowerCase();
    return agency.includes('defense') || agency.includes('army') ||
      agency.includes('navy') || agency.includes('air force') ||
      agency.includes('homeland');
  });

  const govAwards = unique.filter((r) => {
    const agency = (r['Awarding Agency'] || '').toLowerCase();
    return !(agency.includes('defense') || agency.includes('army') ||
      agency.includes('navy') || agency.includes('air force') ||
      agency.includes('homeland'));
  });

  // Sort by amount
  dodAwards.sort((a, b) => (b['Award Amount'] || 0) - (a['Award Amount'] || 0));
  govAwards.sort((a, b) => (b['Award Amount'] || 0) - (a['Award Amount'] || 0));

  const dodTotal = dodAwards.reduce((s, r) => s + (r['Award Amount'] || 0), 0);
  const govTotal = govAwards.reduce((s, r) => s + (r['Award Amount'] || 0), 0);

  console.log(`\n${'═'.repeat(80)}`);
  console.log(`  RESULTS SUMMARY`);
  console.log(`${'═'.repeat(80)}`);
  console.log(`  Total raw results:    ${allResults.length}`);
  console.log(`  Unique awards:        ${unique.length}`);
  console.log(`  DoD / Defense:        ${dodAwards.length} awards (${formatCurrency(dodTotal)})`);
  console.log(`  Other Government:     ${govAwards.length} awards (${formatCurrency(govTotal)})`);

  // Print DoD awards
  if (dodAwards.length > 0) {
    console.log(`\n\n╔══════════════════════════════════════════════════════════════════════════╗`);
    console.log(`║  DEFENSE / DoD CONTRACT AWARDS (FY2025-2026)                           ║`);
    console.log(`║  These represent active procurement — bid on recompetes & similar       ║`);
    console.log(`╚══════════════════════════════════════════════════════════════════════════╝`);
    dodAwards.slice(0, 40).forEach((a, i) => console.log(formatAward(a, i)));
    if (dodAwards.length > 40) console.log(`\n  ... and ${dodAwards.length - 40} more DoD awards.`);
  }

  // Print top government awards
  if (govAwards.length > 0) {
    console.log(`\n\n╔══════════════════════════════════════════════════════════════════════════╗`);
    console.log(`║  OTHER GOVERNMENT AWARDS — GSA / Civilian Agencies                     ║`);
    console.log(`╚══════════════════════════════════════════════════════════════════════════╝`);
    govAwards.slice(0, 20).forEach((a, i) => console.log(formatAward(a, i)));
    if (govAwards.length > 20) console.log(`\n  ... and ${govAwards.length - 20} more government awards.`);
  }

  // Analyze top recipients (competitors/partners)
  const recipientSpending = new Map();
  for (const r of unique) {
    const name = r['Recipient Name'] || 'Unknown';
    const current = recipientSpending.get(name) || { count: 0, total: 0 };
    current.count++;
    current.total += r['Award Amount'] || 0;
    recipientSpending.set(name, current);
  }
  const topRecipients = [...recipientSpending.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 25);

  console.log(`\n\n╔══════════════════════════════════════════════════════════════════════════╗`);
  console.log(`║  TOP RECIPIENTS (Competitors & Potential Partners)                      ║`);
  console.log(`╚══════════════════════════════════════════════════════════════════════════╝\n`);
  console.log(`  ${'Company'.padEnd(42)} ${'Awards'.padStart(6)} ${'Total Value'.padStart(16)}`);
  console.log(`  ${'─'.repeat(66)}`);
  for (const [name, data] of topRecipients) {
    console.log(`  ${name.slice(0, 41).padEnd(42)} ${String(data.count).padStart(6)} ${formatCurrency(data.total).padStart(16)}`);
  }

  // Analyze by awarding agency
  const agencySpending = new Map();
  for (const r of unique) {
    const sub = r['Awarding Sub Agency'] || r['Awarding Agency'] || 'Unknown';
    const current = agencySpending.get(sub) || { count: 0, total: 0 };
    current.count++;
    current.total += r['Award Amount'] || 0;
    agencySpending.set(sub, current);
  }
  const topAgencies = [...agencySpending.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 15);

  console.log(`\n\n╔══════════════════════════════════════════════════════════════════════════╗`);
  console.log(`║  TOP AWARDING AGENCIES (Who's buying)                                  ║`);
  console.log(`╚══════════════════════════════════════════════════════════════════════════╝\n`);
  console.log(`  ${'Agency'.padEnd(50)} ${'Awards'.padStart(6)} ${'Total'.padStart(16)}`);
  console.log(`  ${'─'.repeat(74)}`);
  for (const [name, data] of topAgencies) {
    console.log(`  ${name.slice(0, 49).padEnd(50)} ${String(data.count).padStart(6)} ${formatCurrency(data.total).padStart(16)}`);
  }

  // Save report
  const report = {
    generatedAt: new Date().toISOString(),
    company: 'Gilmore Furniture Inc.',
    summary: {
      totalResults: allResults.length,
      uniqueAwards: unique.length,
      dodAwards: dodAwards.length,
      dodTotal,
      govAwards: govAwards.length,
      govTotal,
    },
    naicsSearched: NAICS_CODES,
    keywordsSearched: KEYWORDS,
    dodAwards,
    govAwards,
    topRecipients: topRecipients.map(([name, data]) => ({ name, ...data })),
    topAgencies: topAgencies.map(([name, data]) => ({ name, ...data })),
    spendingByCategory,
  };

  const reportPath = join(process.cwd(), 'defense-contracts-api-results.json');
  writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log(`\n\n📄 Full JSON report: defense-contracts-api-results.json`);
  console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║  HOW TO USE THESE RESULTS                                              ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  These are AWARDED contracts — they reveal:                            ║
║                                                                        ║
║  1. WHO is buying (target these agencies for your bids)                ║
║  2. WHAT they're buying (match your capabilities)                      ║
║  3. WHO is winning (competitors to watch, or prime partners)           ║
║  4. HOW MUCH they spend (size your bid pricing)                        ║
║  5. WHEN contracts end (recompete timing)                              ║
║                                                                        ║
║  For ACTIVE solicitations (open bids), search SAM.gov directly:        ║
║  https://sam.gov/search/?index=opp                                     ║
║                                                                        ║
║  For a SAM.gov API key (for automated opportunity monitoring):         ║
║  Log into sam.gov → Account Details → Request Public API Key           ║
║                                                                        ║
╚══════════════════════════════════════════════════════════════════════════╝
`);
}

main().catch(console.error);
