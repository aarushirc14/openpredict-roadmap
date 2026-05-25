import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Compass,
  Eye,
  Filter,
  Layers3,
  Lightbulb,
  LineChart,
  Link2,
  ListChecks,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  XCircle,
} from "lucide-react";

const phases = [
  {
    id: "m1",
    label: "1 Month",
    title: "Platform Clarity + Data Trust",
    purpose:
      "Make the roadmap clear, align the team on what we are building first, and fix the data trust issues that could weaken adoption.",
    output:
      "Clear roadmap structure, trusted data logic, product lifecycle, and Community Launch setup requirements.",
    status: "Foundation",
    icon: ShieldCheck,
    initiatives: [
      "Define a consistent format for product recommendations",
      "Confirm how Launch, Pulse, Outlook, Price Response, and CMA fit together",
      "Data freshness indicators",
      "MTD vs. complete-period logic",
      "Target + pace logic",
      "Benchmark terminology cleanup",
      "Community Launch setup requirements",
      "Automated internal QA path",
    ],
    exitCriteria: [
      "The team can explain what a recommendation should include.",
      "The team understands what is ready now, what needs validation, and what is future roadmap.",
      "The team knows what data is required for Community Launch setup.",
      "The team knows what can and cannot be claimed about Launch, Price Response, CMA, and AI.",
    ],
  },
  {
    id: "m2",
    label: "2 Months",
    title: "Make Insights Easy to Use",
    purpose:
      "Make the product easy to understand quickly so users can see what needs attention without digging through every metric.",
    output:
      "Clearer Performance Outlook, clearer Community Pulse, priority communities, decision states, product analytics, and links into supporting detail.",
    status: "User Experience",
    icon: Eye,
    initiatives: [
      "Performance Outlook redesign",
      "Community Pulse redesign",
      "Priority community summaries",
      "Standardized decision states",
      "Better drill-down paths",
      "Mobile-friendly brief experience",
      "Clear data freshness and source visibility",
      "Product analytics",
    ],
    exitCriteria: [
      "A builder executive can identify the top areas of concern within 60 seconds.",
      "Each priority community has a decision state, rationale, evidence, and guardrail.",
      "The product can explain what not to do yet.",
      "The experience feels like guidance, not another dashboard.",
    ],
  },
  {
    id: "m3",
    label: "3 Months",
    title: "Connect Launch, Pulse, and Price",
    purpose:
      "Show how Community Launch, Community Pulse, and Price Response work together across the community lifecycle.",
    output:
      "Community Launch workflow, launch-to-Pulse handoff, Price + Pulse diagnostic, and first version of the Decision Brief.",
    status: "Lifecycle Proof",
    icon: Rocket,
    initiatives: [
      "Community Launch workflow",
      "Launch readiness status",
      "Launch-to-Pulse handoff",
      "Price + Pulse diagnostic view",
      "Community context notes",
      "Decision Brief v1",
    ],
    exitCriteria: [
      "Launch is not just a dashboard; it supports a recurring pre-launch review workflow.",
      "Active and pre-launch communities are evaluated differently.",
      "Price Response is integrated into the decision loop.",
      "Design partners validate that the brief is useful enough to share internally.",
    ],
  },
  {
    id: "m6",
    label: "6 Months",
    title: "Reusable Insight Engine",
    purpose:
      "Create a reusable way to turn product signals, customer context, and recommendations into outputs that can appear across the platform.",
    output:
      "Reusable recommendation logic, customer context, review workflow, and early outcome tracking.",
    status: "Platform Layer",
    icon: Brain,
    initiatives: [
      "Reusable recommendation format",
      "Customer and community context",
      "Account intelligence using available notes and call context",
      "Human review workflow",
      "Recommendation confidence language",
      "Outcome tracking v1",
    ],
    exitCriteria: [
      "Recommendations are no longer written separately for each surface.",
      "The same recommendation can appear in a brief, a product view, an email, or an internal prep view.",
      "The platform records whether action was taken.",
      "The product can clearly separate stronger recommendations from softer suggestions.",
    ],
  },
  {
    id: "m9",
    label: "9 Months",
    title: "Scale the Operating Rhythm",
    purpose:
      "Help customers use OpenPredict in weekly, bi-weekly, or monthly performance conversations across communities and launches.",
    output:
      "Portfolio prioritization, launch portfolio view, regular updates, and action-item workflow.",
    status: "Operating Rhythm",
    icon: Workflow,
    initiatives: [
      "Portfolio prioritization",
      "Launch portfolio view",
      "Weekly / bi-weekly operating brief",
      "Internal meeting prep as a workflow application",
      "Follow-up draft support",
      "Action-item workflow",
    ],
    exitCriteria: [
      "Customers use OpenPredict in a recurring operating cadence.",
      "Leaders can prioritize across multiple communities or launches.",
      "Recommendations are connected to actions.",
      "Workflow applications consume the insight engine instead of becoming standalone tools.",
    ],
  },
  {
    id: "m12",
    label: "12 Months",
    title: "Strengthen the Moat",
    purpose:
      "Make the platform harder to copy by connecting Launch, Pulse, Price Response, CMA, customer context, and action tracking into one product experience.",
    output:
      "CMA integration, recurring Price Response workflow, launch price / position checks, and recommendation tracking.",
    status: "Defensibility",
    icon: Network,
    initiatives: [
      "CMA integration",
      "Recurring Price Response workflow",
      "Launch price / position checks",
      "Recommendation tracking",
      "Portfolio reallocation exploration",
      "Conversation intelligence integration",
    ],
    exitCriteria: [
      "CMA changes recommendations, not just displays comps.",
      "Price Response becomes a recurring workflow, not just a one-off analysis.",
      "Community Launch, Community Pulse, and Price Response feel like one lifecycle.",
      "The system tracks recommendation → action → outcome.",
    ],
  },
  {
    id: "future",
    label: "12+ Months",
    title: "Future: Automated Guidance",
    purpose:
      "Only expose automated recommendations once the product can explain the data, context, confidence, and caveats behind them.",
    output: "Self-serve recommendations, automated next-best actions, and closed-loop learning.",
    status: "North Star",
    icon: Sparkles,
    initiatives: [
      "Automated next-best actions",
      "Automated price response recommendations",
      "Automated launch intervention recommendations",
      "Portfolio reallocation recommendations",
      "Scenario planning",
      "Closed-loop learning",
    ],
    exitCriteria: [
      "The platform can explain what data supports the recommendation.",
      "The platform can explain what context changed the recommendation.",
      "The platform can show confidence, caveats, and what would change the recommendation.",
      "The platform has evidence from prior actions and outcomes.",
    ],
  },
];

const architecture = [
  {
    title: "Context Layer",
    subtitle: "What the product remembers",
    icon: Layers3,
    items: [
      "Targets, divisions, lifecycle stage",
      "Launch dates and sales-open dates",
      "Model readiness and product constraints",
      "Price changes and market context",
      "Prior recommendations and actions",
    ],
  },
  {
    title: "Insight Layer",
    subtitle: "How signals become recommendations",
    icon: Brain,
    items: [
      "Community Pulse and Performance Outlook signals",
      "Community Launch readiness signals",
      "Price Response logic",
      "CMA and competitive context",
      "CRM, GA4, sales, notes, and market data",
    ],
  },
  {
    title: "Delivery Layer",
    subtitle: "Where recommendations show up",
    icon: Workflow,
    items: [
      "Executive brief",
      "Priority community summary",
      "Launch readiness review",
      "Weekly update or email alert",
      "Meeting prep and follow-up workflows",
    ],
  },
  {
    title: "Learning Loop",
    subtitle: "How the product improves over time",
    icon: LineChart,
    items: [
      "What was recommended?",
      "Was it accepted?",
      "What action was taken?",
      "What changed afterward?",
      "Did it improve pace, margin, conversion, or readiness?",
    ],
  },
];

const lifecycle = [
  {
    moment: "Before opening",
    role: "Community Launch",
    question:
      "Is this community ready to open with enough demand, buyer intent, appointment readiness, and price / position confidence?",
  },
  {
    moment: "Once active",
    role: "Community Pulse / Performance Outlook",
    question:
      "Is the community on pace, where is performance breaking, and where should attention go first?",
  },
  {
    moment: "When price or position is uncertain",
    role: "Price Response / CMA",
    question: "Is price, product, competitive position, or market context the lever?",
  },
  {
    moment: "When resources are constrained",
    role: "Portfolio Prioritization",
    question: "Where should the builder shift spend, attention, incentives, or operational focus?",
  },
  {
    moment: "After action is taken",
    role: "Outcome Tracking",
    question: "Did the action work, and what should the platform learn?",
  },
];

const recommendationFields = [
  ["Decision state", "Feed Demand, Diagnose Conversion, Review Price / Positioning, Validate Benchmark, Monitor, Protect Momentum"],
  ["Recommendation", "What the builder should consider doing next"],
  ["Rationale", "Why the platform believes this is the right focus"],
  ["Evidence", "The key data points behind the recommendation"],
  ["Context", "Launch stage, sales capacity, model readiness, product constraints, market context"],
  ["Confidence language", "Whether the recommendation is strong, directional, or needs more validation"],
  ["What not to do yet", "Guardrails against premature action"],
  ["Data needed", "What information would make the recommendation more reliable"],
  ["Owner / next step", "Who should review it or what should happen next"],
  ["Outcome tracking", "What happened after action was taken"],
];

const decisionStates = [
  ["Feed Demand", "More qualified demand is likely useful."],
  ["Improve Website / Offer / Positioning", "Traffic exists, but web-to-lead or buyer intent is weak."],
  ["Diagnose Conversion", "Prospects are entering but not converting downstream."],
  ["Review Price / Positioning", "Price, product, value perception, or competitive position may be blocking performance."],
  ["Validate Benchmark", "Standard benchmarks may not apply."],
  ["Monitor Due to Context", "Signal is noisy because of launch stage, model readiness, access, closeout, buyer pool, or other context."],
  ["Protect Momentum", "Community is healthy; intervention may be unnecessary."],
];

const cuts = [
  {
    title: "Peer benchmarks",
    reason: "Delay unless they clearly improve a decision. They risk creating comparison noise without action.",
  },
  {
    title: "Too many standalone views",
    reason: "Every new view must map to a lifecycle moment or decision loop. Otherwise it becomes product debt.",
  },
  {
    title: "Fully automated AI guidance",
    reason: "Do not lead with this yet. Trust and explainability need to mature first.",
  },
  {
    title: "Generic EM tooling",
    reason: "Build the insight engine first, then let internal workflows consume it.",
  },
  {
    title: "Overbuilt scenario planning",
    reason: "Scenario planning is valuable after the platform has credible diagnosis, context, and outcome data.",
  },
];

const nextSteps = [
  {
    week: "Week 1",
    items: [
      "Define the recommendation format",
      "Clarify what is ready now, what needs validation, and what is future roadmap",
      "Confirm how Launch, Pulse, Outlook, Price Response, and CMA fit together",
      "Define minimum viable Community Launch setup",
    ],
  },
  {
    week: "Week 2",
    items: [
      "Prototype active community summary",
      "Prototype launch readiness summary",
      "Prototype price response summary",
      "Create the first Decision Brief format",
    ],
  },
  {
    week: "Week 3",
    items: [
      "Test with design partners",
      "Validate language and confidence levels",
      "Identify missing data required for trust",
    ],
  },
  {
    week: "Week 4",
    items: [
      "Lock Month 2 engineering scope",
      "Move anything not tied to data trust, decision states, lifecycle handoff, or reusable recommendations into discovery",
    ],
  },
];

const nav = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["recommendations", "Recommendations"],
  ["lifecycle", "Lifecycle"],
  ["roadmap", "Roadmap"],
  ["cuts", "Cuts"],
  ["next", "Next Steps"],
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {eyebrow}
      </div>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function validateRoadmapData() {
  const ids = new Set();

  phases.forEach((phase) => {
    if (ids.has(phase.id)) throw new Error(`Duplicate phase id: ${phase.id}`);
    ids.add(phase.id);

    if (!phase.title || !phase.label || !phase.status) {
      throw new Error(`Phase ${phase.id} is missing required display fields.`);
    }

    if (!Array.isArray(phase.initiatives) || phase.initiatives.length === 0) {
      throw new Error(`Phase ${phase.id} must include at least one initiative.`);
    }

    if (!Array.isArray(phase.exitCriteria) || phase.exitCriteria.length === 0) {
      throw new Error(`Phase ${phase.id} must include at least one exit criterion.`);
    }

    [...phase.initiatives, ...phase.exitCriteria].forEach((item) => {
      if (typeof item !== "string" || item.trim().length === 0) {
        throw new Error(`Phase ${phase.id} has an invalid roadmap item.`);
      }
    });
  });

  nav.forEach(([id, label]) => {
    if (!id || !label) throw new Error("Every navigation item must include an id and label.");
  });
}

validateRoadmapData();

export default function OpenPredictRoadmapWebsite() {
  const [activePhase, setActivePhase] = useState(phases[0].id);
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const active = phases.find((phase) => phase.id === activePhase) || phases[0];
  const statuses = ["All", ...Array.from(new Set(phases.map((phase) => phase.status)))];

  const filteredPhases = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return phases.filter((phase) => {
      const matchesStatus = selectedStatus === "All" || phase.status === selectedStatus;
      const text = [
        phase.label,
        phase.title,
        phase.purpose,
        phase.output,
        phase.status,
        ...phase.initiatives,
        ...phase.exitCriteria,
      ]
        .join(" ")
        .toLowerCase();

      return matchesStatus && (!normalized || text.includes(normalized));
    });
  }, [query, selectedStatus]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button onClick={() => scrollToSection("top")} className="flex items-center gap-3" type="button">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold leading-4 text-slate-950">OpenPredict</div>
              <div className="text-xs text-slate-500">Decision Engine Roadmap</div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Roadmap sections">
            {nav.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                type="button"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="pt-20">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
          <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6 flex flex-wrap gap-2">
                <Pill>North Star: Builder Decision Engine</Pill>
                <Pill>Roadmap spine: reusable recommendations</Pill>
                <Pill>Moat: builder thinking partner</Pill>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                Turn OpenPredict from reports into a decision engine.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                This roadmap is organized around one simple idea: builders do not need more dashboards. They need a thinking partner that helps them make better performance decisions by showing where to focus, why it matters, what to do next, what not to do yet, and what happened after they acted.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
                  type="button"
                >
                  Explore roadmap <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => scrollToSection("recommendations")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
                  type="button"
                >
                  See recommendation format <Target className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="text-sm font-medium text-slate-300">Updated roadmap thesis</div>
                  <div className="mt-1 text-2xl font-semibold">
                    The moat is becoming the builder’s thinking partner for performance decisions.
                  </div>
                </div>
                <Brain className="h-8 w-8 shrink-0 text-slate-300" />
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Understands the builder’s context",
                  "Connects launch, market, price, and performance",
                  "Surfaces the decisions that matter",
                  "Explains why something needs attention",
                  "Guides what to do next",
                  "Warns what not to do yet",
                  "Learns from actions and outcomes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-300" />
                    <span className="text-sm font-medium text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Product assessment"
            title="The roadmap is strategically right, but it needs discipline."
            description="The danger is not that the roadmap is wrong. The danger is that too many valuable ideas become separate surfaces instead of one connected product."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "Strength",
                text: "The direction is right: OpenPredict should become the decision layer for homebuilder performance, not another reporting suite.",
              },
              {
                icon: AlertTriangle,
                title: "Weakness",
                text: "Too many things are important. Without clearer gates, engineering gets a pile of asks instead of a clear product path.",
              },
              {
                icon: Lightbulb,
                title: "Fix",
                text: "Build around a consistent recommendation format. Every surface should help create, improve, deliver, or learn from recommendations.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="mb-4 h-7 w-7 text-slate-900" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="architecture" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Product architecture"
              title="Do not build a bundle of dashboards. Build one connected product."
              description="The product becomes stronger when context, recommendations, delivery, and learning reinforce each other."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {architecture.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-6 w-6 text-slate-950" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{card.subtitle}</p>
                    <div className="mt-5 space-y-3">
                      {card.items.map((item) => (
                        <div key={item} className="flex gap-2 text-sm leading-5 text-slate-600">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="recommendations" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Core product structure"
            title="A recommendation is the core unit of value."
            description="A new feature should not move forward unless it helps create, improve, deliver, or learn from better recommendations."
          />

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10">
              <Target className="mb-5 h-8 w-8 text-slate-300" />
              <h3 className="text-2xl font-semibold">Recommendation format</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The consistent structure behind briefs, priority community summaries, launch readiness, Price Response, CMA-supported recommendations, internal prep, follow-ups, and future automated guidance.
              </p>
              <div className="mt-6 rounded-2xl bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">Simple rule</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  If a product idea does not make recommendations better, clearer, easier to act on, or easier to learn from, it is probably surface area, not strategy.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {recommendationFields.map(([field, description]) => (
                <div key={field} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-950">{field}</div>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lifecycle" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Lifecycle strategy"
              title="One platform across the full community lifecycle."
              description="Community Launch, Pulse, Outlook, Price Response, CMA, and outcome tracking should feel like one connected decision system."
            />

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              {lifecycle.map((step, index) => (
                <div
                  key={step.moment}
                  className={`grid gap-4 p-5 md:grid-cols-[0.3fr_0.35fr_1fr] md:items-center ${
                    index !== lifecycle.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="font-semibold text-slate-950">{step.moment}</div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">{step.role}</div>
                  <p className="text-sm leading-6 text-slate-600">{step.question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Roadmap"
              title="Month-by-month path to the Decision Engine."
              description="The roadmap moves from data trust, to clearer insights, to connected workflows, to automated guidance later."
            />

            <div className="flex flex-col gap-3 sm:flex-row lg:mb-8">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search roadmap..."
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none ring-slate-950/10 transition focus:ring-4 sm:w-64"
                />
              </div>

              <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="h-11 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-10 pr-8 text-sm outline-none ring-slate-950/10 transition focus:ring-4 sm:w-52"
                >
                  {statuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr]">
            <div className="space-y-3 lg:sticky lg:top-24 lg:self-start">
              {filteredPhases.map((phase) => {
                const Icon = phase.icon;
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10"
                        : "border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${isActive ? "bg-white/10" : "bg-slate-100"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-[0.16em] ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                          {phase.label} · {phase.status}
                        </div>
                        <div className="mt-1 text-sm font-semibold leading-5">{phase.title}</div>
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredPhases.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">No roadmap phases match your filters.</div>
              ) : null}
            </div>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{active.label}</div>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{active.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{active.purpose}</p>
                </div>
                <Pill>{active.status}</Pill>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-950">Main output</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{active.output}</p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <ListChecks className="h-4 w-4" /> Build / validate
                  </div>
                  <div className="space-y-2">
                    {active.initiatives.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Target className="h-4 w-4" /> Exit criteria
                  </div>
                  <div className="space-y-2">
                    {active.exitCriteria.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Decision states"
              title="Organize around the action needed, not just the metric status."
              description="These states are the shared language that turns analytics into product guidance."
            />

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {decisionStates.map(([state, meaning]) => (
                <div key={state} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-950">{state}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cuts" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Cut or delay"
            title="Strategic focus requires saying no."
            description="These items may still matter, but they should not distract from data trust, clearer recommendations, and connected lifecycle workflows."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {cuts.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <XCircle className="mb-4 h-6 w-6 text-slate-700" />
                <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="next" className="border-t border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Immediate plan"
              title="The next four weeks should create clarity."
              description="Keep anything not tied to data trust, decision states, lifecycle handoff, or reusable recommendations in discovery."
              dark
            />

            <div className="grid gap-4 md:grid-cols-4">
              {nextSteps.map((step) => (
                <div key={step.week} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-slate-300" />
                    <h3 className="text-lg font-semibold text-white">{step.week}</h3>
                  </div>
                  <div className="space-y-3">
                    {step.items.map((item) => (
                      <div key={item} className="flex gap-2 text-sm leading-5 text-slate-300">
                        <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Final thesis</div>
                  <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    OpenPredict should not become a better reporting suite. It should become the builder’s thinking partner for performance decisions.
                  </h2>
                </div>
                <div className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950">
                  Trusted data → Context → Decisions → Actions → Outcomes
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
