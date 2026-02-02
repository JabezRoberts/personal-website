import { Callout, Gallery } from "@/components";


export const metadata = {
  title: "Zeilhan Systems YouTube Channel & The Boardroom Podcast",
  slug: "zeilhan-youtube-channel",
  description: "Content creation, audience building, and thought leadership aimed at helping entrepreneurs and small business owners grow through actionable insights and educational resources.",
  status: "Active",
  type: "Content Strategy & Community Building",
  role: "Founder & Content Creator",
  timeline: "Ongoing",
  website: "https://www.youtube.com/@Zeilhan",
  coverImage: "/projects/zeilhan-youtube/cover.jpg",
  tags: [
    "Content Creation",
    "Community Building",
    "Thought Leadership",
    "Marketing",
    "Lead Generation",
    "Product Storytelling",
    "Business Education",
    "Templates & Tutorials",
    "Podcasts",
    "Education",
    "Branding",
    "Production"
  ],
  capabilities: [
    "End-to-End Content Production",
    "Audience Growth",
    "Lead Generation",
    "Interviewing & Podcasting",
    "Content Marketing"
  ],
  industries: [
    "Entrepreneurship",
    "Small Business",
    "Digital Education"
  ]
};

export default function ZeilhanYoutubePage() {
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
            I launched the <strong>Zeilhan Systems YouTube channel</strong> to address a recurring problem in the business world: entrepreneurs and small business owners often fail due to a lack of actionable knowledge — what to do, what not to do, how to get customers, market effectively, and make strategic decisions.
          </p>
          <p>
            Believing in the power of technology and content to accelerate business growth, I created educational videos covering marketing, product development, operations, and growth strategies. This work eventually led to <strong>The Boardroom Podcast</strong>, where I interviewed local and global business leaders, including a billionaire, Google employees (past and present), serial entrepreneurs, thought leaders, and bestselling authors.
          </p>

          <h2>Problem</h2>
          <ul>
            <li>Entrepreneurs lacked practical guidance to grow businesses effectively</li>
            <li>Limited access to mentorship and real-world examples</li>
            <li>Knowledge gaps in marketing, operations, product decisions, and scaling</li>
          </ul>
          <p>
            The challenge was to provide <strong>actionable, digestible, and trustworthy content</strong> for small business owners and entrepreneurs.
          </p>

          <h2>Solution</h2>
          <ul>
            <li>Produced educational videos on marketing, sales, UX, product, web development, and entrepreneurship</li>
            <li>Created free templates and tutorials to help viewers <strong>launch businesses, serve clients, and implement marketing strategies</strong></li>
            <li>Launched <strong>The Boardroom Podcast</strong> to share interviews and insights from influential business leaders</li>
            <li>Designed lead magnets, email sequences, and social campaigns to grow the audience and generate leads</li>
          </ul>

          <Callout type="success">
            Content combined education, community-building, and actionable resources to empower business owners.
          </Callout>

          <h2>My Role</h2>
          <p className="font-medium">
            <strong>Founder & Content Creator</strong>
          </p>
          <p>End-to-end ownership:</p>
          <ul>
            <li>Ideation, scripting, filming, editing, and distribution</li>
            <li>Guest recruitment, interview planning, and episode structuring</li>
            <li>Content repurposing across social media and email campaigns</li>
            <li>Lead generation and audience engagement tracking</li>
            <li>Iterative improvement of content quality and production standards</li>
          </ul>

          <h2>Outcomes & Impact</h2>
          <ul>
            <li>Grew YouTube channel to <strong>1,000+ subscribers</strong></li>
            <li>Generated <strong>500+ email leads</strong> via free resources and tutorials</li>
            <li>Templates and tutorials helped viewers:
              <ul>
                <li>Launch their own businesses</li>
                <li>Improve marketing strategies</li>
                <li>Serve clients more effectively</li>
              </ul>
            </li>
            <li>Established thought leadership in <strong>business education and digital entrepreneurship</strong></li>
            <li>Created a foundation for scaling high-quality content through podcasts, video, and educational resources</li>
          </ul>

          <Callout type="success">
            Built a content ecosystem connecting education, lead generation, and brand authority for entrepreneurs.
          </Callout>

          <h2>Key Learnings</h2>
          <ul>
            <li>Entrepreneurs benefit most from <strong>practical, actionable content</strong> over theory</li>
            <li>Thought leadership is amplified by <strong>community-building and consistent engagement</strong></li>
            <li>Multi-format content (video, podcast, tutorials, templates) creates compounding value</li>
            <li>Data-driven iteration (analytics, feedback, audience insights) is essential for content strategy</li>
            <li>High-quality output sometimes requires pausing to refine production standards before scaling</li>
          </ul>

          <h2>Example Screenshots</h2>
          <div className="my-8">
            <Gallery
              images={[
                { src: "/projects/zeilhan-youtube/ui-1.png", alt: "Zeilhan Systems YouTube channel screenshot 1" },
                { src: "/projects/zeilhan-youtube/ui-2.png", alt: "Zeilhan Systems YouTube channel screenshot 2" },
                { src: "/projects/zeilhan-youtube/ui-3.png", alt: "Zeilhan Systems YouTube channel screenshot 3" }
              ]}
            />
          </div>
        </article>
      </main>
    </div>
  );
}