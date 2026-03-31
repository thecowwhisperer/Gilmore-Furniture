export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    type: "paragraph" | "heading" | "quote" | "image";
    text?: string;
    src?: string;
    alt?: string;
    caption?: string;
  }[];
}

export const posts: BlogPost[] = [
  {
    slug: "the-art-of-wood-selection",
    title:
      "The Art of Wood Selection: How Material Choices Define Furniture Character",
    excerpt:
      "From domestic hardwoods to exotic species, every timber tells a story. Learn how our team selects the perfect material for each project.",
    category: "Craftsmanship",
    date: "February 18, 2026",
    image: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
    readTime: "5 min read",
    author: {
      name: "Gilmore Team",
      role: "Craftsmanship Division",
    },
    content: [
      {
        type: "paragraph",
        text: "In furniture manufacturing, material selection isn't simply a matter of aesthetics — it's the foundational decision that shapes every downstream process, from milling and joinery to finishing and long-term durability. At Gilmore, our team evaluates each project through the lens of the wood itself, understanding that the right species can elevate a design from functional to remarkable.",
      },
      {
        type: "heading",
        text: "Understanding Wood Character",
      },
      {
        type: "paragraph",
        text: "Every species of timber carries its own personality. White oak offers a tight, consistent grain that takes stain beautifully and resists moisture — making it ideal for high-traffic contract environments. Walnut, with its rich chocolate tones and sweeping cathedral grain, brings warmth and gravitas to executive spaces. Maple's pale, uniform surface provides a clean canvas for modern designs that call for light, Scandinavian-inspired palettes.",
      },
      {
        type: "paragraph",
        text: "But character goes beyond species. The way a log is milled — plain-sawn, quarter-sawn, or rift-sawn — dramatically changes the grain pattern and structural behavior of the resulting boards. Quarter-sawn white oak, for instance, reveals the medullary rays that produce the distinctive fleck pattern prized in Arts & Crafts furniture. These decisions are made long before a board reaches our CNC machines.",
      },
      {
        type: "quote",
        text: "The best furniture starts with a conversation between the designer's intent and the wood's natural tendencies. Our job is to find where those two meet.",
      },
      {
        type: "heading",
        text: "Grading and Selection",
      },
      {
        type: "paragraph",
        text: "We source our hardwoods from certified domestic mills, primarily in the Appalachian region, where the climate produces some of the finest hardwoods in the world. Each delivery is inspected and graded not just by industry standards (FAS, Select, #1 Common) but by project-specific criteria. A conference table destined for a Fortune 500 boardroom demands wide, clear boards with consistent color. A hospitality bench designed for a boutique hotel lobby might benefit from more character — knots, mineral streaks, and sapwood variation that give each piece individuality.",
      },
      {
        type: "image",
        src: "/images/WC18_Gilmore__47_f67ac56a.jpg",
        alt: "Wood selection process at Gilmore",
        caption:
          "Our team inspects and grades each board against project-specific criteria before it enters production.",
      },
      {
        type: "heading",
        text: "Moisture and Acclimation",
      },
      {
        type: "paragraph",
        text: "Wood is a living material that continues to respond to its environment long after it's been harvested. Moisture content management is one of the most critical — and most overlooked — aspects of quality furniture manufacturing. We kiln-dry all lumber to 6–8% moisture content, then acclimate it in our climate-controlled facility before production begins. This patience pays dividends: furniture that remains stable across seasons, resisting the warping, checking, and joint failure that plague lesser-quality pieces.",
      },
      {
        type: "heading",
        text: "Matching Design to Material",
      },
      {
        type: "paragraph",
        text: "The final step in our selection process is the most nuanced: matching the right wood to the right design. A sweeping, organic conference table base might call for ash, whose long, dramatic grain lines reinforce the sense of movement. A geometric occasional table could benefit from hard maple's uniformity, allowing the form itself to take center stage. And when a client's design calls for metal and wood integration — a specialty of ours — we consider how the wood's tone and texture will interact with brushed stainless, blackened steel, or cast aluminum.",
      },
      {
        type: "paragraph",
        text: "Material selection is where craft begins. It's the first and perhaps most important act of making, and it's one we take seriously on every project that comes through our doors.",
      },
    ],
  },
  {
    slug: "cnc-meets-craftsmanship",
    title:
      "When CNC Meets Craftsmanship: Precision Technology in Modern Furniture",
    excerpt:
      "Multi-axis CNC machining doesn't replace the craftsperson — it amplifies their vision. A look inside our hybrid manufacturing approach.",
    category: "Innovation",
    date: "February 4, 2026",
    image: "/images/WC18_Gilmore__47_f67ac56a.jpg",
    readTime: "7 min read",
    author: {
      name: "Gilmore Team",
      role: "Manufacturing & Engineering",
    },
    content: [
      {
        type: "paragraph",
        text: "There's a persistent myth in furniture manufacturing: that CNC technology and traditional craftsmanship exist in opposition. That automation strips away the soul of handmade work. At Gilmore, we've spent two decades proving the opposite — that when precision technology and skilled hands work in concert, the result is furniture that neither could achieve alone.",
      },
      {
        type: "heading",
        text: "The Evolution of Our Shop Floor",
      },
      {
        type: "paragraph",
        text: "When Gilmore was founded in 1983, our shop floor looked like most small furniture manufacturers: table saws, shapers, drill presses, and a lot of skilled hands doing layout, cutting, and fitting. Quality was high but throughput was limited, and repeatability depended entirely on the operator's experience and attention. As our client base grew to include major contract furniture brands, we faced a choice: scale up the old way, or invest in technology that could maintain our quality standards at higher volumes.",
      },
      {
        type: "paragraph",
        text: "We chose both. Our first CNC router arrived in the early 2000s, and rather than replacing our craftspeople, it freed them. Repetitive operations — boring, routing, shaping — could be executed with sub-millimeter consistency, batch after batch. Our team could then focus their expertise where it mattered most: grain matching, hand-fitting complex joints, touch-up sanding, and the countless small decisions that separate good furniture from great furniture.",
      },
      {
        type: "quote",
        text: "CNC doesn't think. It doesn't make judgments about grain direction or the way light will catch a chamfer. That's still the craftsperson's domain — and it always will be.",
      },
      {
        type: "heading",
        text: "Multi-Axis Capabilities",
      },
      {
        type: "paragraph",
        text: "Today, our facility operates multi-axis CNC machining centers capable of complex 3D surfacing, compound angle joinery, and sculptural forms that would be prohibitively time-consuming to produce by hand. A 5-axis machine can approach a workpiece from virtually any angle, enabling us to cut complex geometries — tapered columns, curved aprons, sculpted edges — in a single setup. This eliminates the cumulative error that comes from multiple manual setups and ensures that part number 500 is identical to part number 1.",
      },
      {
        type: "image",
        src: "/images/WC18_Gilmore__51-300x300_8e3387e9.jpg",
        alt: "CNC machining at Gilmore's facility",
        caption:
          "Multi-axis CNC centers handle complex geometries while our craftspeople focus on assembly, fitting, and finishing.",
      },
      {
        type: "heading",
        text: "Programming as Design Translation",
      },
      {
        type: "paragraph",
        text: "One of the least understood aspects of CNC manufacturing is the programming itself. Converting a designer's CAD model into efficient, safe toolpaths is a skilled discipline that requires deep understanding of both the technology and the material. Our programmers consider tool deflection, climb vs. conventional milling, feed rates optimized for specific species, and the order of operations that minimizes setup time while maximizing surface quality. It's engineering in service of craft.",
      },
      {
        type: "heading",
        text: "Where Hands Still Matter",
      },
      {
        type: "paragraph",
        text: "For all the precision our CNC equipment delivers, the final quality of every Gilmore piece depends on human judgment. Our finishing team hand-sands every surface through progressive grits, feeling for imperfections that machines can't detect. Assembly technicians dry-fit complex multi-part structures, making micro-adjustments that ensure seamless joints. Quality inspectors evaluate each piece against samples and specifications with trained eyes that no camera system can match.",
      },
      {
        type: "paragraph",
        text: "This hybrid approach — precision technology guided by skilled hands — is what allows us to serve the contract furniture industry's demanding requirements. It's not about choosing between old and new. It's about understanding what each does best and combining them deliberately.",
      },
    ],
  },
  {
    slug: "private-label-partnership",
    title:
      "Why Private Label Manufacturing Is the Future of Contract Furniture",
    excerpt:
      "More brands are turning to dedicated manufacturing partners. Here's how Gilmore's private label program delivers design integrity at scale.",
    category: "Industry",
    date: "January 21, 2026",
    image: "/images/WC18_Gilmore__24_04406fcc.jpg",
    readTime: "6 min read",
    author: {
      name: "Gilmore Team",
      role: "Business Development",
    },
    content: [
      {
        type: "paragraph",
        text: "The contract furniture industry is undergoing a quiet transformation. Increasingly, brands that were once defined by their manufacturing capabilities are rethinking the make-or-buy equation — and discovering that dedicated manufacturing partners can deliver better quality, faster turnaround, and lower capital risk than in-house production. At Gilmore, our private label program has been at the center of this shift for over two decades.",
      },
      {
        type: "heading",
        text: "The New Economics of Furniture Manufacturing",
      },
      {
        type: "paragraph",
        text: "Building and maintaining a world-class furniture manufacturing operation requires enormous capital investment. Multi-axis CNC machines, automated finishing lines, climate-controlled lumber storage, and the skilled workforce to operate it all — these are fixed costs that must be amortized across production volume. For brands whose core competency is design and market development, these investments can become a drag on agility and profitability.",
      },
      {
        type: "paragraph",
        text: "Private label manufacturing flips this model. By partnering with a dedicated manufacturer like Gilmore, brands can access state-of-the-art capabilities without the capital burden. They maintain complete control over design, branding, and customer relationships while we handle engineering, prototyping, manufacturing, finishing, packaging, and drop shipping — all under their label.",
      },
      {
        type: "quote",
        text: "Our clients' customers never know we exist, and that's exactly how it should be. Their brand, their design, their label — manufactured to their exact standards in our facility.",
      },
      {
        type: "heading",
        text: "Maintaining Design Integrity",
      },
      {
        type: "paragraph",
        text: "The most common concern we hear from prospective partners is about design integrity. Will an outside manufacturer understand our design language? Will quality be consistent? Will the finished product feel like ours? These are legitimate questions, and they get to the heart of what separates a true manufacturing partner from a commodity supplier.",
      },
      {
        type: "paragraph",
        text: "At Gilmore, we invest heavily in the front end of every partnership. Our engineering team works directly with each client's design staff to translate their vision into manufacturable reality — often finding ways to improve structural integrity or reduce cost without compromising the design intent. We build and iterate on prototypes until the client signs off, then lock in the specifications and processes that ensure every production unit matches the approved sample.",
      },
      {
        type: "image",
        src: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
        alt: "Gilmore craftsman working on custom furniture piece",
        caption:
          "Every private label partnership begins with close collaboration between our engineering team and the client's designers.",
      },
      {
        type: "heading",
        text: "The Drop Ship Advantage",
      },
      {
        type: "paragraph",
        text: "Our drop ship program adds another layer of efficiency. Rather than shipping bulk orders to a client's warehouse for redistribution, we package each piece with the client's branding and ship directly to the end customer. This eliminates double handling, reduces lead times, and lowers the client's warehousing costs. For brands selling through dealer networks, this capability is transformative.",
      },
      {
        type: "heading",
        text: "Building for the Long Term",
      },
      {
        type: "paragraph",
        text: "The best private label relationships aren't transactional — they're strategic. Our longest-running partnerships span over 15 years, during which we've become extensions of our clients' operations. We understand their quality standards intuitively. We anticipate their engineering challenges. We invest in capabilities that serve their product roadmaps. This depth of partnership is what makes private label manufacturing not just viable, but superior to the alternative for many brands in today's market.",
      },
    ],
  },
  {
    slug: "sustainability-in-manufacturing",
    title:
      "Sustainability Without Compromise: Our Approach to Responsible Manufacturing",
    excerpt:
      "Reducing waste, sourcing responsibly, and building furniture that lasts decades — sustainability is woven into every decision we make.",
    category: "Sustainability",
    date: "January 8, 2026",
    image: "/images/WC18_Gilmore__51-300x300_8e3387e9.jpg",
    readTime: "4 min read",
    author: {
      name: "Gilmore Team",
      role: "Operations",
    },
    content: [
      {
        type: "paragraph",
        text: "Sustainability in manufacturing is often framed as a trade-off: you can be green, or you can be competitive. At Gilmore, we reject that premise. Over four decades of operation, we've found that the practices that reduce environmental impact — waste minimization, efficient material usage, durable construction — are the same practices that produce better furniture and healthier margins. Sustainability and quality aren't in tension. They're the same thing.",
      },
      {
        type: "heading",
        text: "It Starts with the Source",
      },
      {
        type: "paragraph",
        text: "Responsible manufacturing begins long before raw material arrives at our facility. We source our hardwoods from domestic mills that practice sustainable forestry — selective harvesting that maintains forest health, biodiversity, and regeneration capacity. American hardwood forests are a remarkable resource: they've been growing faster than they've been harvested for over six decades, and the species we work with most — oak, walnut, maple, ash — are abundant and well-managed.",
      },
      {
        type: "paragraph",
        text: "By sourcing domestically, we also minimize the carbon footprint of transportation. Our primary lumber suppliers are in the Appalachian region, a fraction of the distance compared to imported tropical hardwoods or overseas sheet goods. Shorter supply chains mean lower emissions, better traceability, and stronger relationships with our suppliers.",
      },
      {
        type: "quote",
        text: "The most sustainable piece of furniture is one that never needs to be replaced. Durability is the ultimate environmental strategy.",
      },
      {
        type: "heading",
        text: "Waste as a Resource",
      },
      {
        type: "paragraph",
        text: "In any wood manufacturing operation, offcuts, sawdust, and shavings are inevitable. The question is what you do with them. At Gilmore, we've systematically converted our waste streams into resources. Wood chips and sawdust are collected and used for biomass energy or animal bedding. Larger offcuts are evaluated for use in smaller components before being recycled. Our CNC nesting software optimizes material layouts to minimize waste from the start, often achieving yield rates above 85%.",
      },
      {
        type: "image",
        src: "/images/WC18_Gilmore__47_f67ac56a.jpg",
        alt: "Sustainable manufacturing processes at Gilmore",
        caption:
          "CNC nesting optimization and systematic waste recovery are central to our sustainability approach.",
      },
      {
        type: "heading",
        text: "Finishing Responsibly",
      },
      {
        type: "paragraph",
        text: "Our finishing department has transitioned increasingly toward low-VOC and waterborne coatings that deliver the same durability and appearance as traditional solvent-based finishes. This shift reduces harmful emissions for both our team and the environments where our furniture is installed. For clients with specific environmental certifications or LEED requirements, we maintain a portfolio of compliant finishing options that meet the most rigorous standards.",
      },
      {
        type: "heading",
        text: "Building to Last",
      },
      {
        type: "paragraph",
        text: "Perhaps the most impactful sustainability decision in furniture manufacturing is also the most fundamental: building things that last. A conference table that serves a company for 30 years has a fraction of the environmental impact of one that's replaced every five. This philosophy drives every engineering and material decision we make — from the joinery methods we specify to the hardware we select to the finishes we apply. Longevity isn't just a quality metric. It's an environmental imperative.",
      },
    ],
  },
];

export const categories = [
  "All",
  "Craftsmanship",
  "Innovation",
  "Industry",
  "Sustainability",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, limit);

  return posts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
