import { solutions } from "./solutions";
import { componentsCatalog } from "./componentsCatalog";
import { capabilityPillars } from "./capabilities";
import { verticals } from "./verticals";

function hrefForSolution(sectionId: string) {
  return `/solutions#${sectionId}`;
}

function hrefForComponent(sectionId: string) {
  return `/components#${sectionId}`;
}

/** Footer + desktop nav: solution lines (labels match primary nav where possible). */
export const solutionDeepLinks = solutions.map((s) => ({
  name: s.title,
  href: hrefForSolution(s.sectionId),
}));

/** Industry vertical links for nav and footer. */
export const verticalNavItems = verticals.map((v) => ({
  label: v.headline,
  href: `/solutions/${v.slug}`,
}));

export const verticalDeepLinks = verticalNavItems.map(({ label, href }) => ({
  name: label,
  href,
}));

/** Nav and footer: component detail pages. */
export const componentNavItems = componentsCatalog.map((c) => ({
  label: c.title,
  href: `/components/${c.slug}`,
}));

export const componentDeepLinks = componentNavItems.map(({ label, href }) => ({
  name: label,
  href,
}));

/** Capability pillar deep links for nav dropdown. */
export const capabilityNavItems = capabilityPillars.map((p) => ({
  label: p.title,
  href: `/capabilities/${p.slug}`,
}));

export const capabilityDeepLinks = capabilityNavItems.map(
  ({ label, href }) => ({
    name: label,
    href,
  }),
);
