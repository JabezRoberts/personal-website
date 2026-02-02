import { Callout, Gallery } from "@/components";

export const metadata = {
  title: "Tropical Metal Products – Product-Led Digital Transformation & GTM",
  slug: "tropical-metal-products",
  description: "End-to-end digital transformation and go-to-market strategy for a national roofing supplies company, driving inbound demand, operational alignment, and over 2.5B JMD in revenue impact.",
  status: "Completed",
  type: "Client Project",
  role: "Digital Product & Growth Lead",
  timeline: "27 months",
  website: "https://www.tropicalmetalproducts.com",
  coverImage: "/projects/tropical-metal/cover.jpg",
  tags: [
    "Go-To-Market",
    "WordPress",
    "Google Ads",
    "Email Marketing",
    "PPC",
    "SEO",
    "Growth Strategy",
    "B2B",
    "Product Ops",
    "Product Marketing",
    "E-Commerce",
    "Project Manager",
    "Growth Strategy",
    "Product Design",
    "Operations",
    "Digital Transformation",
    "Enterprise",
    "Process Optimization",
    "UX"
  ],
  capabilities: [
    "GTM Strategy",
    "Product Positioning",
    "UX & Conversion Optimization",
    "Cross-Functional Leadership",
    "Performance Analytics"
  ],
  industries: [
    "Manufacturing",
    "Construction",
    "B2B Distribution"
  ]
};

export default function TropicalMetalProductsPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <header className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-accent/5 to-brand/5 dark:from-accent-light/5 dark:to-brand-light/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
              {metadata.type || "Project"}
            </span>

            <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
              {metadata.role}
            </span>

            <span className="px-4 py-1.5 rounded-full bg-surface dark:bg-surface-dark text-sm font-medium">
              {metadata.timeline}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {metadata.title}
          </h1>

          <p className="text-lg md:text-2xl text-muted dark:text-muted-dark max-w-3xl">
            {metadata.description}
          </p>

          {metadata.website && (
            <a
              href={metadata.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-accent dark:text-accent-light hover:underline font-medium"
            >
              Visit Website →
            </a>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <article className="prose dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl md:prose-h2:text-4xl prose-h3:text-2xl prose-p:text-lg md:prose-p:text-xl prose-li:text-lg md:prose-li:text-xl max-w-none">
          <h2 className="mt-0">Overview</h2>
          <p>
            Tropical Metal Products is a national roofing supplies manufacturer and distributor serving contractors, developers, and homeowners. I led a full digital transformation and go-to-market strategy, rebuilding their online presence, inbound systems, and performance infrastructure to align marketing, sales, and operations.
          </p>
          <p>
            Over ~27 months, this work contributed to <strong>over 2.5B JMD in revenue</strong>, generated <strong>2,000+ qualified inbound leads</strong>, and established long-term, compounding demand through product-led marketing systems.
          </p>

          <h2>Context & Problem</h2>
          <p>
            Despite being a market leader offline, Tropical Metal’s digital presence was fragmented and underperforming.
          </p>
          <p>Key challenges:</p>
          <ul>
            <li>No clear digital positioning or customer journey</li>
            <li>Website functioned as a brochure, not a demand engine</li>
            <li>Sales relied heavily on outbound and relationship-driven pipelines</li>
            <li>Marketing activity lacked measurable KPIs and feedback loops</li>
            <li>Digital efforts were disconnected from inventory, manufacturing, and sales realities</li>
          </ul>
          <p>
            The opportunity was not “better marketing,” but <strong>a product-led GTM system</strong> that aligned digital channels with how the business actually operated.
          </p>

          <h2>My Role</h2>
          <p className="font-medium">
            <strong>Digital Product & Growth Lead</strong>, owning strategy and execution.
          </p>
          <p>I worked directly with:</p>
          <ul>
            <li>General Manager</li>
            <li>Director</li>
            <li>Sales leadership</li>
            <li>Accounting and manufacturing teams</li>
          </ul>
          <p>My scope covered:</p>
          <ul>
            <li>Product positioning and GTM strategy</li>
            <li>Website and UX architecture</li>
            <li>SEO and inbound demand systems</li>
            <li>Content strategy and media production</li>
            <li>Performance tracking and reporting</li>
            <li>Monthly strategy reviews and iteration</li>
            <li>Developed and executed Google Ads campaigns, email marketing sequences, landing pages, and an e-commerce platform supporting both B2B and D2C sales</li>
            <li>Coordinated campaigns with sales, accounting, and operations to ensure alignment and measurable impact</li>
            <li>Led monthly executive-level consultations with the General Manager and Director focused on long-term brand positioning, awareness, and revenue growth</li>
          </ul>

          <h2>Product & GTM Strategy</h2>
          <p>
            Rather than chasing short-term traffic, I defined a <strong>long-term inbound GTM strategy</strong> focused on high-intent demand.
          </p>
          <p>Key strategic decisions:</p>
          <ul>
            <li>Position the website as a <strong>sales enablement product</strong>, not marketing collateral</li>
            <li>Target contractors and builders at decision-making moments</li>
            <li>Use SEO as a compounding acquisition channel</li>
            <li>Align messaging with real inventory, pricing behavior, and delivery constraints</li>
            <li>Build trust through education, clarity, and friction reduction</li>
            <li>Integrate paid channels (Google Ads, email marketing) with inbound SEO and content for a <strong>full-funnel GTM system</strong></li>
            <li>Implement e-commerce infrastructure enabling direct online sales alongside contractor-focused B2B workflows</li>
          </ul>

          <Callout type="success">
            Defined and executed a GTM strategy that turned the website into a primary inbound sales and revenue channel.
          </Callout>

          <h2>Technical & System Architecture</h2>
          <p>
            The digital stack was designed as a scalable growth system, not a static marketing site.
          </p>
          <ul>
            <li>Custom WordPress architecture optimized for SEO, conversion, and long-term extensibility</li>
            <li>B2B and D2C e-commerce workflows supporting contractors, developers, and retail customers</li>
            <li>Landing pages and conversion paths aligned to distinct buyer intents and sales motions</li>
            <li>Integrated lead capture, segmentation, and email marketing tied to funnel stage and use case</li>
            <li>Google Ads and SEO infrastructure connected directly to landing pages and performance tracking</li>
            <li>Analytics and reporting dashboards measuring traffic, leads, conversion rates, and content ROI</li>
            <li>Monthly performance reviews with leadership to guide iteration and GTM optimization</li>
            <li>Platform designed to evolve alongside manufacturing, inventory, sales, and operational constraints</li>
          </ul>

          <h2>Architecture & Flow</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/tropical-metal/architecture-1.png", alt: "Architecture diagram 1" },
                { src: "/projects/tropical-metal/architecture-2.png", alt: "Architecture diagram 2" }
              ]}
            />
          </div>

          <h2>UX, Content & Conversion Design</h2>
          <p>
            UX decisions were driven by <strong>how buyers actually purchase roofing materials</strong>, not assumptions.
          </p>
          <p>Design priorities:</p>
          <ul>
            <li>Clear product categorization and use cases</li>
            <li>Simple, direct messaging aligned with buyer language</li>
            <li>Educational content addressing real contractor questions</li>
            <li>Conversion paths optimized for phone calls, inquiries, and quotes</li>
            <li>Performance-focused layouts to increase time on site and engagement</li>
          </ul>

          <h2>Interface & Content Examples</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/tropical-metal/ui-1.png", alt: "User interface screenshot 1" },
                { src: "/projects/tropical-metal/ui-2.png", alt: "User interface screenshot 2" },
                { src: "/projects/tropical-metal/ui-3.png", alt: "User interface screenshot 3" }
              ]}
            />
          </div>

          <h2>Outcomes & Impact</h2>
          <p>Measurable results over ~27 months:</p>
          <ul>
            <li><strong>11–12% revenue increase year-over-year</strong></li>
            <li><strong>2,000+ qualified inbound leads</strong></li>
            <li><strong>Top SEO rankings</strong> for high-intent roofing and construction keywords</li>
            <li><strong>Significant increases</strong> in traffic, engagement, and time on site</li>
            <li><strong>~2.5B JMD in revenue impact</strong></li>
            <li>Marketing became a predictable, trackable growth function</li>
            <li>Website transitioned from cost center to revenue driver</li>
            <li>Paid campaigns, email sequences, landing pages, and e-commerce sales added <strong>direct measurable revenue</strong></li>
            <li>Marketing and sales aligned to maximize ROI across B2B and D2C channels</li>
          </ul>

          <h2>Revenue & Brand Impact</h2>
          <p>
            The GTM strategy prioritized <strong>long-term brand equity and inbound demand</strong>, not short-term spikes.
          </p>
          <ul>
            <li>During the first year, revenues declined slightly as legacy channels softened and systems were rebuilt</li>
            <li>In the following year, revenues increased by approximately <strong>11–12% year-over-year</strong>, driven by compounding SEO performance, stronger inbound demand, and improved sales alignment</li>
            <li>Brand recognition and awareness increased measurably through organic search visibility, content engagement, and direct inquiries</li>
          </ul>

          <Callout type="success">
            Validated the strategy of trading short-term volatility for sustainable, compounding growth.
          </Callout>

          <h2>Key Learnings</h2>
          <ul>
            <li>GTM strategy must reflect operational reality, not marketing theory</li>
            <li>B2B buyers value clarity and trust over persuasion</li>
            <li>SEO is most powerful when treated as a product, not a channel</li>
            <li>Cross-functional alignment is a growth multiplier</li>
            <li>Paid campaigns, email marketing, and e-commerce must integrate with organic channels to maximize ROI</li>
            <li>Long-term systems outperform short-term campaigns</li>
          </ul>
          <p>
            This project shaped how I approach <strong>product marketing, growth, and product ops:</strong> grounded in real constraints, real users, and real revenue.
          </p>
        </article>
      </main>
    </div>
  );
}