import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Heem2014 — Builder of AI-powered tools" },
      {
        name: "description",
        content:
          "Portfolio of Heem2014 — building AI tools, scrapers, and intelligent agents in Python and TypeScript.",
      },
      { property: "og:title", content: "Heem2014 — Builder of AI-powered tools" },
      {
        property: "og:description",
        content:
          "Portfolio of Heem2014 — building AI tools, scrapers, and intelligent agents in Python and TypeScript.",
      },
    ],
  }),
});

const projects = [
  {
    name: "Smart-Book-Q&A System",
    description:
      "Ask any book a question. Built with LangChain + CrewAI agents that read, reason, and cite passages.",
    tags: ["Python", "LangChain", "CrewAI", "LLM"],
    href: "https://github.com/Heem2014/Smart-Book-Q-A-System",
    accent: "from-emerald-400/20 to-cyan-400/10",
  },
  {
    name: "ColdEmailMaker",
    description:
      "Generates personalized cold outreach emails from a prospect URL — turns research into ready-to-send copy.",
    tags: ["Python", "LLM", "Automation"],
    href: "https://github.com/Heem2014/ColdEmailMaker",
    accent: "from-fuchsia-400/20 to-rose-400/10",
  },
  {
    name: "ScrapeWebsiteTool",
    description:
      "Lightweight scraping utility for extracting structured content from any URL — built for agent pipelines.",
    tags: ["Python", "Scraping"],
    href: "https://github.com/Heem2014/ScrapeWebsiteTool",
    accent: "from-amber-400/20 to-orange-400/10",
  },
  {
    name: "Profile / Lab",
    description:
      "Profile README and experimental sandbox. Where new ideas land before they become real projects.",
    tags: ["Markdown", "Sandbox"],
    href: "https://github.com/Heem2014/Heem2014",
    accent: "from-indigo-400/20 to-violet-400/10",
  },
];

const stack = ["Python", "TypeScript", "LangChain", "CrewAI", "React", "Node", "OpenAI", "Tailwind"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-brand-foreground font-bold">
              H
            </span>
            <span className="text-foreground">heem2014</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#stack" className="transition-colors hover:text-foreground">Stack</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="https://github.com/Heem2014"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for AI / automation projects
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            I build{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              AI tools
            </span>{" "}
            that actually do the work.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Hi, I'm <span className="text-foreground">Heem</span>. I design and ship intelligent
            agents, scrapers, and automation pipelines — turning messy real-world inputs into clean,
            useful outputs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.02]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              See my work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://github.com/Heem2014"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              Browse GitHub
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              { k: "4+", v: "Public projects" },
              { k: "Python", v: "Primary language" },
              { k: "LLM", v: "Specialty" },
              { k: "2024", v: "Building since" },
            ].map((s) => (
              <div key={s.v} className="bg-card px-6 py-6">
                <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              / 01 — Selected work
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Projects from the lab.
            </h2>
          </div>
          <a
            href="https://github.com/Heem2014?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline md:inline"
          >
            All repositories ↗
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:-translate-y-1"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
            / 02 — Stack
          </div>
          <h2 className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Tools I reach for, day in, day out.
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              / 03 — Get in touch
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Got an idea?
              <br />
              <span className="text-muted-foreground">Let's build it.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Always open to interesting AI, automation, or full-stack collaborations. The fastest
              way to reach me is on GitHub.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/Heem2014"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Message on GitHub →
              </a>
              <a
                href="https://github.com/Heem2014?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                See repositories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row">
          <div className="font-mono">© {new Date().getFullYear()} Heem2014. Built with care.</div>
          <div className="flex gap-6">
            <a href="https://github.com/Heem2014" target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href="#top" className="hover:text-foreground">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
