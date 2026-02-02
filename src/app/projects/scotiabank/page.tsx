import { Callout, Gallery } from "@/components";


export const metadata = {
  title: "Scotiabank Jamaica – Internal Furniture Sale Platform",
  slug: "scotiabank",
  description: "Digital transformation of internal asset sales during COVID, replacing in-person auctions with an online platform and ultimately transitioning to a high-velocity rush-sale system.",
  status: "Completed",
  type: "Internal Operations & Digital Platform",
  role: "Product Builder & Systems Designer",
  timeline: "Project executed during COVID-19 restrictions",
  website: "",
  coverImage: "/projects/scotiabank/cover.jpg",
  tags: [
    "Product Design",
    "Operations",
    "Digital Transformation",
    "Internal Tools",
    "Enterprise",
    "Process Optimization",
    "UX",
    "Workflow Automation",
    "WordPress",
    "E-Commerce"
  ],
  capabilities: [
    "Product Discovery",
    "Workflow Mapping",
    "Platform Design",
    "Internal Stakeholder Alignment",
    "Process Optimization"
  ],
  industries: [
    "Banking",
    "Enterprise Operations",
    "Internal Tools"
  ]
};

export default function ScotiabankPage() {
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
            Digital transformation of internal asset sales during COVID, replacing in-person auctions with an online platform and ultimately transitioning to a high-velocity rush-sale system.
          </p>

          {/* Add your full content here – convert sections one by one */}
          {/* Example structure – paste your actual text */}

          <h2>Problem</h2>
          <p>
            During COVID-19 restrictions, Scotiabank Jamaica's traditional in-person furniture and asset sales auctions were no longer feasible. Employees needed a safe, remote way to buy surplus office furniture, equipment, and assets.
          </p>

          <h2>Solution</h2>
          <p>
            Built a secure internal e-commerce platform on WordPress with WooCommerce, featuring:
          </p>
          <ul>
            <li>Product catalog with photos and descriptions</li>
            <li>Secure employee-only login</li>
            <li>Bidding and fixed-price rush-sale modes</li>
            <li>Inventory management and order tracking</li>
            <li>Payment integration for internal transfers</li>
          </ul>

          <Callout type="info">
            The platform transitioned from auctions to a high-velocity rush-sale system, dramatically increasing turnover speed and employee satisfaction during lockdown.
          </Callout>

          <h2>My Role</h2>
          <p className="font-medium">
            <strong>Product Builder & Systems Designer</strong>
          </p>
          <ul>
            <li>Requirements gathering from HR and facilities teams</li>
            <li>Platform architecture and WordPress setup</li>
            <li>Custom WooCommerce workflows and plugins</li>
            <li>UX design for easy browsing and purchasing</li>
            <li>Deployment and training for internal users</li>
          </ul>

          <h2>Outcome</h2>
          <ul>
            <li>100% remote asset sales during COVID restrictions</li>
            <li>Reduced auction coordination time from weeks to days</li>
            <li>Improved employee engagement with internal perks</li>
            <li>Established template for future internal digital tools</li>
          </ul>

          {/* Add more sections as needed – copy from your original MDX */}
          {/* Example Gallery at the end */}

          <h2>Image Gallery</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/scotiabank/cover.jpg", alt: "Scotiabank internal sale platform cover" },
                // Add more images if you have them
                // { src: "/projects/scotiabank/screenshot-1.png", alt: "Platform dashboard" },
                // { src: "/projects/scotiabank/screenshot-2.png", alt: "Product listing view" }
              ]}
            />
          </div>
        </article>
      </main>
    </div>
  );
}