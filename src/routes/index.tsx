import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  MessageCircle,
  Mail,
  Briefcase,
  Twitter,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Heem2014 — AI engineer & automation builder" },
      {
        name: "description",
        content:
          "Portfolio of Heem2014 — building AI agents, scrapers, and automation pipelines in Python and TypeScript.",
      },
      { property: "og:title", content: "Heem2014 — AI engineer & automation builder" },
      {
        property: "og:description",
        content:
          "Portfolio of Heem2014 — building AI agents, scrapers, and automation pipelines.",
      },
    ],
  }),
});

const projects = [
  {
    name: "Smart-Book-Q&A System",
    description:
      "Ask any book a question. Multi-agent system built with LangChain + CrewAI that reads, reasons, and cites passages.",
    tags: ["Python", "LangChain", "CrewAI"],
    href: "https://github.com/Heem2014/Smart-Book-Q-A-System",
    accent: "from-emerald-400/30 via-cyan-400/10 to-transparent",
  },
  {
    name: "ColdEmailMaker",
    description:
      "Generates personalized cold outreach from a prospect URL — turns research into ready-to-send copy.",
    tags: ["Python", "LLM", "Automation"],
    href: "https://github.com/Heem2014/ColdEmailMaker",
    accent: "from-fuchsia-400/30 via-rose-400/10 to-transparent",
  },
  {
    name: "ScrapeWebsiteTool",
    description:
      "Lightweight scraping utility for extracting structured content from any URL — built for agent pipelines.",
    tags: ["Python", "Scraping"],
    href: "https://github.com/Heem2014/ScrapeWebsiteTool",
    accent: "from-amber-400/30 via-orange-400/10 to-transparent",
  },
  {
    name: "Profile / Lab",
    description:
      "Profile README and experimental sandbox. Where new ideas land before they become real projects.",
    tags: ["Markdown", "Sandbox"],
    href: "https://github.com/Heem2014/Heem2014",
    accent: "from-indigo-400/30 via-violet-400/10 to-transparent",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "LangChain",
  "CrewAI",
  "React",
  "Node",
  "OpenAI",
  "Tailwind",
  "Postgres",
  "Vite",
];

const contacts = [
  {
    label: "GitHub",
    handle: "@Heem2014",
    href: "https://github.com/Heem2014",
    icon: Github,
  },
  {
    label: "Discord",
    handle: "heem2014",
    href: "https://discord.com/users/heem2014",
    icon: MessageCircle,
  },
  {
    label: "X / Twitter",
    handle: "@Heem2014",
    href: "https://x.com/Heem2014",
    icon: Twitter,
  },
  {
    label: "Email",
    handle: "chmibrahim.14@gmail.com",
    href: "mailto:chmibrahim.14@gmail.com",
    icon: Mail,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand/30">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-brand-foreground font-bold shadow-[0_0_20px_oklch(0.78_0.18_145_/_0.5)]">
              H
            </span>
            <span className="text-foreground">heem2014</span>
            <span className="text-brand">.sys</span>
          </a>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-brand">Work</a>
            <a href="#stack" className="transition-colors hover:text-brand">Stack</a>
            <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
          </nav>
          <a
            href="https://github.com/Heem2014"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground transition-all hover:border-brand/50 hover:text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_oklch(0.78_0.18_145)]" />
            Online
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        {/* Glow orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
        {/* Scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
          <div className="animate-scan h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand backdrop-blur">
            <Sparkles className="h-3 w-3" />
            <span>SYS / available for new transmissions</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            I build{" "}
            <span
              className="bg-clip-text text-transparent text-glow"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              AI systems
            </span>{" "}
            <br className="hidden md:block" />
            that ship.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-mono text-brand">{"// "}</span>
            Hi, I'm <span className="text-foreground">Heem</span> — an engineer designing
            intelligent agents, scrapers, and automation pipelines that turn messy inputs into
            clean, useful outputs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-foreground transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              View_work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-brand/50 hover:text-brand"
            >
              <Terminal className="h-4 w-4" />
              Open_channel
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              { k: "04+", v: "Public projects" },
              { k: "PY/TS", v: "Primary stack" },
              { k: "LLM", v: "Specialty" },
              { k: "24/7", v: "Building mode" },
            ].map((s) => (
              <div key={s.v} className="relative overflow-hidden bg-card px-6 py-6">
                <div className="font-mono text-2xl font-semibold tracking-tight text-brand">
                  {s.k}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y border-border bg-card/30 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {["AI agents", "★", "automation", "★", "scraping", "★", "LLM pipelines", "★", "tooling", "★", "open source", "★"].map(
                (t, j) => (
                  <span key={`${i}-${j}`} className={t === "★" ? "text-brand" : ""}>
                    {t}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              ▸ 01 / Selected_work
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Projects from the lab.
            </h2>
          </div>
          <a
            href="https://github.com/Heem2014?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-brand md:inline"
          >
            All_repos ↗
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.18_145/0.3)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              {/* Corner brackets */}
              <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-brand/0 transition-colors group-hover:border-brand" />
              <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-brand/0 transition-colors group-hover:border-brand" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-brand/0 transition-colors group-hover:border-brand" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-brand/0 transition-colors group-hover:border-brand" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
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
      <section id="stack" className="relative border-y border-border bg-card/30">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
            ▸ 02 / Stack
          </div>
          <h2 className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Tools I reach for, day in, day out.
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-brand hover:text-brand hover:shadow-[0_0_20px_oklch(0.78_0.18_145/0.3)]"
              >
                <Zap className="h-3 w-3 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
          ▸ 03 / Open_channels
        </div>
        <h2 className="mb-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Got an idea?
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Let's build it.
          </span>
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground">
          <span className="font-mono text-brand">{"> "}</span>Pick the channel that suits you.
          Replies usually within 24h.
        </p>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 bg-card p-6 transition-all hover:bg-accent"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background transition-all group-hover:border-brand/50 group-hover:text-brand group-hover:shadow-[0_0_20px_oklch(0.78_0.18_145/0.3)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {c.handle}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </a>
            );
          })}
          {/* Filler tile to keep grid clean */}
          <div className="hidden bg-card p-6 lg:block">
            <div className="flex h-full flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                STATUS
              </div>
              <div className="font-mono text-sm text-brand">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand shadow-[0_0_8px_oklch(0.78_0.18_145)]" />
                <span className="ml-2">Accepting new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} / Heem2014 / All systems nominal</div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Heem2014"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand"
            >
              GitHub
            </a>
            <a href="#contact" className="hover:text-brand">
              Contact
            </a>
            <a href="#top" className="hover:text-brand">
              ↑ Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
