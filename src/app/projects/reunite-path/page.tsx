import { Callout, Gallery } from "@/components";

export const metadata = {
    title: "ReunitePath – Family Reunification After Natural Disasters",
    slug: "reunite-path",
    description: "A disaster-response platform designed to help families reconnect after major natural disasters, built with a focus on ethics, speed, and accessibility.",
    status: "Live (MVP)",
    type: "Public Interest Platform",
    role: "Founder & Lead Engineer",
    timeline: "Concept to Launch",
    website: "https://reunitepath.com",
    coverImage: "/projects/reunite-path/cover.jpg",
    tags: [
        "Crisis Response",
        "Product Design",
        "Full-Stack-Application",
        "UX Strategy",
        "Ethical Tech"
    ],
    capabilities: [
        "Product Discovery",
        "UX Design",
        "Full-Stack Development",
        "Security (RLS)",
        "Rapid MVP Delivery"
    ],
    industries: [
        "Disaster Response",
        "Public Sector",
        "Nonprofit"
    ]
}

export default function ReunitePathPage() {
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
            ReunitePath is a disaster-response web platform designed to reconnect families separated by natural disasters. Conceptualized and launched after hurricane Melissa — one of the three most powerful hurricanes in history and the deadliest to make landfall in Jamaica — Reunite Path became the ideal solution to help during the crisis. The MVP prioritized accessibility, trust, and operational reliability and remains live for future adoption by disaster response teams, survivors, and government organizations.
          </p>

          <h2>Problem</h2>
          <p>
            Natural disasters frequently separate families, disrupt communication infrastructure, and overwhelm emergency response systems. Existing tools are often fragmented, inaccessible, or optimized for internal use rather than emotionally sensitive public scenarios.
          </p>

          <Callout type="info">
            Survivors and responders need a simple, secure, and reliable way to register missing persons, search for loved ones, and coordinate information in real time under extreme conditions.
          </Callout>

          <h2>My Role</h2>
          <p className="font-medium">
            <strong>Founder, Product Owner, and Lead Engineer</strong>
          </p>
          <ul>
            <li>Problem definition and scope</li>
            <li>Product and UX design</li>
            <li>Technical architecture and security</li>
            <li>Full-stack development and deployment</li>
            <li>Ethical and accessibility considerations</li>
            <li>Launch and post-launch evaluation</li>
          </ul>

          <h2>Strategy & Product Decisions</h2>
          <ul>
            <li>Prioritized speed, clarity, and trust over feature breadth</li>
            <li>Focused on shipping a minimal viable product (MVP)</li>
            <li>Designed for survivors first to reduce friction at moments of distress</li>
            <li>Security and data boundaries treated as first-class concerns</li>
            <li>Accessibility, legibility, and emotional context prioritized</li>
          </ul>
          <p>
            Future usage includes disaster response teams, displaced families, government agencies, and humanitarian organizations.
          </p>

          <h2>Technical Approach</h2>
          <ul>
            <li><strong>Frontend:</strong> React, TypeScript, TailwindCSS</li>
            <li><strong>Backend:</strong> Supabase (Postgres, Auth, Row-Level Security)</li>
            <li><strong>Security:</strong> Role-based access control via Supabase RLS</li>
            <li><strong>Architecture:</strong> End-to-end ownership of data models, permissions, and workflows</li>
            <li><strong>Deployment:</strong> Live, production-ready MVP</li>
          </ul>

          <h2>Launch & Outcome</h2>
          <ul>
            <li>Successfully shipped MVP under time-sensitive conditions</li>
            <li>Validated core workflows for registering, searching, and reconnecting individuals</li>
            <li>Demonstrated feasibility of lightweight, public-facing disaster response tool</li>
            <li>Identified clear next steps for adoption and partnerships</li>
          </ul>

          <h2>Key Learnings</h2>
          <ul>
            <li>Clarity and trust outweigh feature depth in crisis-driven products</li>
            <li>Ethical MVP delivery is preferable to over-engineering under pressure</li>
            <li>Security and access control must be designed from day one</li>
            <li>Timing and distribution are as critical as product quality</li>
            <li>Building for both individuals and institutions requires separation of concerns</li>
          </ul>

          <h2>Current Status & Path Forward</h2>
          <p>
            ReunitePath remains live with future plans including:
          </p>
          <ul>
            <li>Role expansion for verified responders and agencies</li>
            <li>Operational dashboards for disaster response teams</li>
            <li>Partnerships with NGOs and government organizations</li>
            <li>Localization and offline-tolerant workflows</li>
          </ul>

          <h2>Image Gallery</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/reunite-path/cover.jpg", alt: "ReunitePath cover image showing platform overview" },
                { src: "/projects/reunite-path/ui-1.png", alt: "ReunitePath user interface - registration screen" },
                { src: "/projects/reunite-path/ui-2.png", alt: "ReunitePath user interface - search and connect screen" }
              ]}
            />
          </div>
        </article>
      </main>
    </div>
    )
}