import { Callout, Gallery } from "@/components";

export const metadata = {
  title: "Renaros – AI-Powered Operating Platform for Small Businesses",
  slug: "renaros",
  description: "An AI-powered SaaS platform designed to help small businesses and freelancers manage and grow their operations through secure, scalable systems.",
  status: "Active Development",
  type: "SaaS Platform",
  role: "Founder, Product Owner & Lead Engineer",
  timeline: "Ongoing",
  website: "https://renaros.com",
  coverImage: "/projects/renaros/cover.jpg",
  tags: [
    "SaaS",
    "Product Strategy",
    "Technical Marketing",
    "AI Integration",
    "Multi-Tenancy",
    "Full-Stack",
    "Go-To-Market",
    "SEO"
  ],
  capabilities: [
    "Product Strategy",
    "System Architecture",
    "Technical Positioning",
    "AI Feature Design",
    "Security & Access Control"
  ],
  industries: [
    "Small Business",
    "Freelancers",
    "B2B Software"
  ]
};

export default function RenarosPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <header className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 ">
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
            Renaros is a continuously developed AI-powered SaaS platform helping small business owners and freelancers operate, manage, and grow effectively. Built in public with a focus on scalable architecture and real-world workflows, it prioritizes clarity, trust, and extensibility over superficial AI demos.
          </p>

          <h2>Problem</h2>
          <p>
            Small businesses and freelancers rely on fragmented tools for operations, planning, execution, and decision-making. AI tools often fail to integrate into real workflows or respect operational realities, creating friction, confusion, and adoption barriers.
          </p>

          <h2>Solution</h2>
          <p>
            Renaros provides a developer-first, transparent platform that balances automation with control:
          </p>
          <ul>
            <li>Clear visibility into automation before execution</li>
            <li>Free tier to maximize adoption</li>
            <li>Paid tier with advanced AI automation and unlimited access</li>
            <li>Scalable architecture for long-term product expansion</li>
          </ul>

          <h2>My Role</h2>
          <p className="font-medium">
            <strong>Founder, Product Owner & Lead Engineer</strong>
          </p>
          <ul>
            <li>Product vision and positioning</li>
            <li>System and data architecture</li>
            <li>Frontend UX and interaction design</li>
            <li>AI feature integration</li>
            <li>Monetization and GTM design</li>
            <li>Ongoing iteration and development</li>
          </ul>

          <h2>Technical Architecture</h2>
          <ul>
            <li><strong>Frontend:</strong> React, TypeScript, TailwindCSS</li>
            <li><strong>Backend:</strong> Supabase with structured schema design and Row-Level Security</li>
            <li>Multi-tenant system with role-based access control</li>
            <li>Event logging, analytics hooks, and permission-aware services</li>
            <li>Continuous development and integration workflows</li>
          </ul>

          <h2>Product Development Approach</h2>
          <ul>
            <li>Continuous development used as product discovery</li>
            <li>Real implementation friction informs product decisions</li>
            <li>Security and backend correctness prioritized over convenience</li>
          </ul>

          <Callout type="info">
            Implementation revealed critical gaps in backend logic that prompted redesigns, reinforcing system integrity and separation of concerns.
          </Callout>

          <h2>Monetization & GTM Strategy</h2>
          <p><strong>Freemium Tier:</strong></p>
          <ul>
            <li>Usage caps, limited automation, visibility into AI actions</li>
            <li>Designed to maximize onboarding and trust</li>
          </ul>

          <p><strong>Paid Tier (Planned):</strong></p>
          <ul>
            <li>Unlimited usage, AI automation, priority feature access</li>
            <li>Designed for power users and teams</li>
          </ul>

          <h2>Product Marketing & Positioning</h2>
          <ul>
            <li>Transparent automation platform, not black-box AI</li>
            <li>Emphasizes trust, clarity, and control</li>
            <li>Messaging targets technical founders, engineers, and product teams</li>
          </ul>

          <h2>How I Think</h2>
          <ul>
            <li>Adoption before monetization</li>
            <li>Trust before automation</li>
            <li>Visibility over opacity</li>
            <li>Pricing based on value delivered, not access</li>
            <li>AI as an assistant, not a decision-maker</li>
          </ul>

          <h2>Image Gallery</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/renaros/cover.jpg", alt: "Renaros cover image" },
                { src: "/projects/renaros/architecture-1.png", alt: "Renaros architecture diagram" },
                { src: "/projects/renaros/ui-1.png", alt: "Renaros user interface screenshot 1" },
                { src: "/projects/renaros/ui-2.png", alt: "Renaros user interface screenshot 2" }
              ]}
            />
          </div>
        </article>
      </main>
    </div>
  );
}