import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Compass,
  Eye,
  Layers3,
  LineChart,
  ListChecks,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const roadmapPhases = [
  {
    id: "foundation",
    label: "0-2 months",
    title: "Restore Foundation",
    description: "Recover table stakes first. Month 1 is the exception where Engineering / Ops leads because trust is the immediate risk.",
  },
  {
    id: "decision-layer",
    label: "3-6 months",
    title: "Build Decision Layer",
    description: "Move from trusted reporting into interpretation, recommendations, launch readiness, and recurring decision workflows.",
  },
  {
    id: "moat",
    label: "7-12 months",
    title: "Strengthen Moat",
    description: "Connect launch, performance, market context, price response, builder context, and outcome tracking into one system.",
  },
];

const strategicRoadmap = [
  {
    id: "restore-table-stakes",
    number: "01",
    title: "Restore Table Stakes",
    maturity: "Table stakes recovery",
    short: "Correct data, trusted QA, defensible reporting logic.",
    why: "The product cannot earn strategic trust until data is correct, fresh, clearly validated, and consistently explained.",
    outcome: "Community Pulse and Performance Outlook are reliable enough to build on.",
    icon: ShieldCheck,
    phases: [
      {
        phaseId: "foundation",
        heading: "Recover trust now",
        bullets: [
          "Define QA standards and ownership.",
          "Fix data correctness and trust issues.",
          "Improve freshness, period, target, and pace logic.",
          "Build Ops QA tooling and internal checks.",
        ],
        workstreams: ["Engineering / Ops leads", "Product / Design clarifies acceptance criteria", "Research supports context where needed"],
      },
      {
        phaseId: "decision-layer",
        heading: "Protect trust while shipping",
        bullets: [
          "Expand test coverage and validation workflows.",
          "Keep QA standards visible in every handoff.",
          "Preserve data trust as 2.0 and new workflows ship.",
        ],
        workstreams: ["Engineering / Ops owns validation", "Product / Design owns acceptance criteria", "Research informs data requirements"],
      },
      {
        phaseId: "moat",
        heading: "Make reliability a habit",
        bullets: [
          "Keep reliability as a product habit.",
          "Maintain checks across connected product surfaces.",
          "Treat data trust as a permanent operating standard.",
        ],
        workstreams: ["Engineering / Ops keeps quality systems active", "Product / Design keeps trust visible", "Research keeps context grounded"],
      },
    ],
  },
  {
    id: "reduce-cognitive-load",
    number: "02",
    title: "Reduce Cognitive Load",
    maturity: "Table stakes experience",
    short: "Make the product easier to scan, understand, and act on.",
    why: "Correct data is not enough. Users also need the interpretation layer to reduce effort, remove ambiguity, and guide attention.",
    outcome: "Users can understand what changed, why it matters, and what to review next without doing the mental assembly themselves.",
    icon: Eye,
    phases: [
      {
        phaseId: "foundation",
        heading: "Clean up comprehension gaps",
        bullets: [
          "Improve scanability in Community Pulse and Performance Outlook.",
          "Separate correctness issues from UX issues.",
          "Prototype immediate UI fixes for the current experience.",
        ],
        workstreams: ["Product / Design leads prototypes", "Engineering / Ops supports quick fixes", "Research clarifies user interpretation needs"],
      },
      {
        phaseId: "decision-layer",
        heading: "Ship the interpretation layer",
        bullets: [
          "Release Community Pulse and Performance Outlook 2.0.",
          "Add clearer summaries, decision states, and next steps.",
          "Embed LLM support where it meaningfully reduces user effort.",
        ],
        workstreams: ["Research validates interpretation needs", "Product / Design defines the experience", "Engineering / Ops implements validated work"],
      },
      {
        phaseId: "moat",
        heading: "Make interpretation consistent",
        bullets: [
          "Use the same interpretation pattern across Launch, Pulse, Outlook, Price Response, and CMA.",
          "Make every workflow easier to trust and easier to act on.",
        ],
        workstreams: ["Product / Design owns consistency", "Engineering / Ops scales patterns", "Research keeps guidance grounded"],
      },
    ],
  },
  {
    id: "market-pricing-context",
    number: "03",
    title: "Integrate Market + Pricing Context",
    maturity: "Above table stakes",
    short: "Use CMA and Price Response as evidence for better decisions.",
    why: "Market and pricing data should change recommendations, not sit beside the product as another disconnected report.",
    outcome: "CMA and Price Response become part of the decision workflow and help explain what action is worth considering.",
    icon: LineChart,
    phases: [
      {
        phaseId: "foundation",
        heading: "Find the useful signals",
        bullets: [
          "Continue CMA research.",
          "Clarify useful market signals versus generic market data.",
          "Identify where CMA supports Pulse, Outlook, Price Response, and Launch.",
        ],
        workstreams: ["Research leads signal discovery", "Product / Design frames decision use cases", "Engineering / Ops advises feasibility"],
      },
      {
        phaseId: "decision-layer",
        heading: "Connect context to decisions",
        bullets: [
          "Prototype and integrate CMA plus Price Response into decision workflows.",
          "Use market context as evidence, not a standalone dashboard.",
          "Clarify where the integration belongs in the product experience.",
        ],
        workstreams: ["Research defines context quality", "Product / Design validates the workflow", "Engineering / Ops builds the validated path"],
      },
      {
        phaseId: "moat",
        heading: "Make context change recommendations",
        bullets: [
          "Ensure market context meaningfully changes recommendations.",
          "Connect pricing context to launch history and active community performance.",
        ],
        workstreams: ["Research strengthens signals", "Product / Design refines recommendation logic", "Engineering / Ops implements validated connections"],
      },
    ],
  },
  {
    id: "new-community-launch",
    number: "04",
    title: "Build New Community Launch",
    maturity: "Lifecycle expansion",
    short: "Create the pre-opening decision loop for launch readiness.",
    why: "New Community Launch gives the platform an earlier lifecycle moment and creates context that should improve active community management later.",
    outcome: "The product helps answer whether a community is ready to open and what needs attention before launch.",
    icon: Rocket,
    phases: [
      {
        phaseId: "foundation",
        heading: "Clarify readiness inputs",
        bullets: [
          "Clarify launch readiness inputs and setup requirements.",
          "Clarify New Community Launch price-response needs.",
          "Identify which launch context should be remembered.",
        ],
        workstreams: ["Research leads requirements", "Product / Design frames the workflow", "Engineering / Ops clarifies feasibility"],
      },
      {
        phaseId: "decision-layer",
        heading: "Prototype and validate Launch",
        bullets: [
          "Prototype and validate New Community Launch.",
          "Define readiness states and supporting evidence.",
          "Design the launch-to-Pulse handoff.",
        ],
        workstreams: ["Research validates signals", "Product / Design validates experience", "Engineering / Ops prepares implementation"],
      },
      {
        phaseId: "moat",
        heading: "Connect Launch to the lifecycle",
        bullets: [
          "Release the first iteration of the Launch workflow.",
          "Connect launch history to active community management.",
          "Use launch context to improve future recommendations.",
        ],
        workstreams: ["Engineering / Ops builds the validated release", "Product / Design refines handoff", "Research improves launch context"],
      },
    ],
  },
  {
    id: "recommendation-operating-system",
    number: "05",
    title: "Build Recommendation System + Operating Workflows",
    maturity: "Above table stakes",
    short: "Turn insights into recurring actions, reviews, and follow-up loops.",
    why: "Recommendations should not die in a report. They need a reusable structure, an owner, a next step, and a way to learn from outcomes.",
    outcome: "The product becomes part of the builder operating rhythm instead of a set of one-off views.",
    icon: Workflow,
    phases: [
      {
        phaseId: "foundation",
        heading: "Define the recommendation object",
        bullets: [
          "Define decision states and recommendation structure.",
          "Clarify confidence language, evidence, and what not to do yet.",
          "Start shaping action and outcome tracking requirements.",
        ],
        workstreams: ["Product / Design leads structure", "Research informs logic", "Engineering / Ops advises implementation path"],
      },
      {
        phaseId: "decision-layer",
        heading: "Create reusable workflows",
        bullets: [
          "Standardize recommendation format across surfaces.",
          "Prototype weekly, bi-weekly, monthly, and portfolio review workflows.",
          "Start action and outcome tracking.",
        ],
        workstreams: ["Research validates operating rhythms", "Product / Design prototypes workflows", "Engineering / Ops builds validated patterns"],
      },
      {
        phaseId: "moat",
        heading: "Scale the operating rhythm",
        bullets: [
          "Scale recurring workflows and follow-up loops.",
          "Make recommendations part of how builders operate.",
          "Connect recommendations to actions and observed outcomes.",
        ],
        workstreams: ["Engineering / Ops implements validated workflows", "Product / Design refines adoption loops", "Research improves outcome learning"],
      },
    ],
  },
  {
    id: "strengthen-moat",
    number: "06",
    title: "Strengthen the Moat",
    maturity: "Moat creation",
    short: "Connect launch, market, pricing, context, recommendations, and outcomes.",
    why: "The moat is not one feature. It is the connected system that makes every recommendation more specific, useful, and harder to copy.",
    outcome: "OpenHouse.ai moves from reporting to a true decision engine for homebuilders.",
    icon: Network,
    phases: [
      {
        phaseId: "foundation",
        heading: "Start the context foundation",
        bullets: [
          "Start shaping builder context and research foundation.",
          "Identify what the platform should gather, remember, and reuse.",
          "Keep agentic research tied to real workflows.",
        ],
        workstreams: ["Research leads context foundation", "Product / Design frames product use cases", "Engineering / Ops advises system needs"],
      },
      {
        phaseId: "decision-layer",
        heading: "Use context in recommendations",
        bullets: [
          "Connect builder context to recommendations.",
          "Support internal prep and customer-facing action generation.",
          "Separate rules-based logic, AI support, and human review.",
        ],
        workstreams: ["Research strengthens context", "Product / Design defines guidance surfaces", "Engineering / Ops supports implementation"],
      },
      {
        phaseId: "moat",
        heading: "Connect the lifecycle",
        bullets: [
          "Connect Launch, Pulse, Outlook, Price Response, CMA, and outcome tracking.",
          "Turn the system into a true decision engine.",
          "Let outcomes improve future recommendations.",
        ],
        workstreams: ["Engineering / Ops implements lifecycle connections", "Product / Design refines full lifecycle", "Research improves learning loop"],
      },
    ],
  },
];

const thesisCards = [
  {
    title: "The product thesis",
    description:
      "Builders do not need another dashboard. They need a thinking partner that helps them understand where to focus, why it matters, what action to take, and what to avoid doing too early.",
    icon: Brain,
  },
  {
    title: "The execution thesis",
    description:
      "Research clarifies the opportunity. Product / Design validates the workflow. Engineering / Ops implements the work once it is clear, validated, and scoped.",
    icon: Workflow,
  },
  {
    title: "The moat thesis",
    description:
      "The moat is the connected system: Community Pulse, Performance Outlook, New Community Launch, Price Response, CMA, builder context, recommendation logic, and outcome learning all reinforcing one another.",
    icon: Network,
  },
];

const architecture = [
  {
    title: "Context Layer",
    subtitle: "What the product remembers",
    icon: Layers3,
    items: [
      "Builder targets, divisions, lifecycle stage, and launch timing.",
      "Community constraints, model readiness, pricing assumptions, and market context.",
      "Prior recommendations, actions taken, and observed outcomes.",
    ],
  },
  {
    title: "Insight Layer",
    subtitle: "How signals become guidance",
    icon: Brain,
    items: [
      "Community Pulse and Performance Outlook signals.",
      "Launch readiness signals.",
      "CMA, Price Response, and competitive context.",
      "Recommendation logic and confidence language.",
    ],
  },
  {
    title: "Delivery Layer",
    subtitle: "Where guidance shows up",
    icon: Eye,
    items: [
      "Decision-first Pulse and Outlook 2.0.",
      "New Community Launch readiness workflows.",
      "Decision Briefs, internal prep, and recurring updates.",
      "Portfolio and operating workflows.",
    ],
  },
  {
    title: "Learning Loop",
    subtitle: "How the system improves",
    icon: LineChart,
    items: [
      "What was recommended?",
      "Was action taken?",
      "What changed afterward?",
      "How should the next recommendation improve?",
    ],
  },
];

const recommendationFields = [
  ["Decision state", "Feed Demand, Diagnose Conversion, Review Price / Positioning, Validate Benchmark, Monitor Due to Context, or Protect Momentum."],
  ["Recommendation", "What the builder should consider doing next."],
  ["Rationale", "Why this is the right focus area."],
  ["Evidence", "The key data points or context behind the recommendation."],
  ["What not to do yet", "Guardrails against premature or wasteful action."],
  ["Outcome tracking", "What happened after the action was taken."],
];

const lifecycle = [
  ["Before opening", "New Community Launch", "Is this community ready to open with enough demand, buyer intent, appointment readiness, and price / position confidence?"],
  ["Once active", "Community Pulse / Performance Outlook", "Is the community on pace, where is performance breaking, and where should attention go first?"],
  ["When price or position is uncertain", "Price Response / CMA", "Is price, product, competitive position, or market context the lever?"],
  ["When resources are constrained", "Portfolio Prioritization", "Where should the builder shift spend, attention, incentives, or operational focus?"],
  ["After action is taken", "Outcome Tracking", "Did the action work, and what should the platform learn?"],
];

const navItems = [
  ["thesis", "Thesis"],
  ["architecture", "Architecture"],
  ["recommendations", "Recommendations"],
  ["lifecycle", "Lifecycle"],
  ["roadmap", "Roadmap"],
];

function SectionHeader({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function validateStrategicRoadmapData() {
  const ids = new Set();
  const phaseIds = new Set(roadmapPhases.map((phase) => phase.id));

  strategicRoadmap.forEach((priority) => {
    if (ids.has(priority.id)) throw new Error(`Duplicate roadmap priority id: ${priority.id}`);
    ids.add(priority.id);

    if (!priority.title || !priority.short || !priority.why || !priority.outcome) {
      throw new Error(`Roadmap priority ${priority.id} is missing required content.`);
    }

    if (!Array.isArray(priority.phases) || priority.phases.length !== roadmapPhases.length) {
      throw new Error(`Roadmap priority ${priority.id} must include every phase.`);
    }

    priority.phases.forEach((phase) => {
      if (!phaseIds.has(phase.phaseId)) throw new Error(`Invalid phase id ${phase.phaseId} in ${priority.id}.`);
      if (!phase.heading || !Array.isArray(phase.bullets) || phase.bullets.length === 0) {
        throw new Error(`Roadmap priority ${priority.id} has an invalid phase.`);
      }
    });
  });
}

validateStrategicRoadmapData();

function CardGrid({ cards, columns = "lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${columns}`}>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
              <Icon className="h-6 w-6 text-slate-950" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
            {card.subtitle ? (
              <p className="mt-1 text-sm font-medium text-slate-500">{card.subtitle}</p>
            ) : null}
            {card.description ? (
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            ) : null}
            {card.items ? (
              <div className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-5 text-slate-600">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}

function PhaseBadge({ phase }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{phase.label}</div>
      <div className="mt-2 text-base font-semibold text-slate-950">{phase.title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{phase.description}</p>
    </div>
  );
}

function PriorityRow({ priority, isActive, onSelect }) {
  const Icon = priority.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-[1.25rem] border p-4 text-left transition ${
        isActive
          ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10"
          : "border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isActive ? "bg-white/10" : "bg-slate-100"}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className={`text-xs font-semibold uppercase tracking-[0.16em] ${isActive ? "text-slate-300" : "text-slate-500"}`}>
            {priority.number} · {priority.maturity}
          </div>
          <div className="mt-1 text-base font-semibold leading-5">{priority.title}</div>
          <p className={`mt-2 text-sm leading-5 ${isActive ? "text-slate-300" : "text-slate-600"}`}>{priority.short}</p>
        </div>
      </div>
    </button>
  );
}

function RoadmapMatrix({ activePriorityId, onSelectPriority }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid border-b border-slate-200 bg-slate-50 lg:grid-cols-[0.9fr_repeat(3,1fr)]">
        <div className="hidden p-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 lg:block">Strategic priority</div>
        {roadmapPhases.map((phase) => (
          <div key={phase.id} className="border-t border-slate-200 p-4 lg:border-l lg:border-t-0">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{phase.label}</div>
            <div className="mt-1 text-sm font-semibold text-slate-950">{phase.title}</div>
          </div>
        ))}
      </div>

      {strategicRoadmap.map((priority, index) => {
        const Icon = priority.icon;
        const isActive = priority.id === activePriorityId;

        return (
          <button
            key={priority.id}
            type="button"
            onClick={() => onSelectPriority(priority.id)}
            className={`grid w-full text-left transition lg:grid-cols-[0.9fr_repeat(3,1fr)] ${
              index !== strategicRoadmap.length - 1 ? "border-b border-slate-200" : ""
            } ${isActive ? "bg-slate-950/[0.03]" : "hover:bg-slate-50"}`}
          >
            <div className="p-4 lg:p-5">
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${isActive ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-950"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{priority.number}</div>
                  <div className="mt-1 text-sm font-semibold leading-5 text-slate-950">{priority.title}</div>
                  <div className="mt-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{priority.maturity}</div>
                </div>
              </div>
            </div>

            {priority.phases.map((phase) => (
              <div key={phase.phaseId} className="border-t border-slate-200 p-4 lg:border-l lg:border-t-0 lg:p-5">
                <div className="text-sm font-semibold text-slate-950">{phase.heading}</div>
                <div className="mt-3 space-y-2">
                  {phase.bullets.slice(0, 2).map((bullet) => (
                    <div key={bullet} className="flex gap-2 text-sm leading-5 text-slate-600">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </button>
        );
      })}
    </div>
  );
}

function PriorityDetail({ priority }) {
  const Icon = priority.icon;

  return (
    <motion.div
      key={priority.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-6 border-b border-slate-200 pb-6 lg:grid-cols-[0.7fr_1fr] lg:items-start">
        <div>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Icon className="h-7 w-7" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {priority.number} · {priority.maturity}
          </div>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{priority.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{priority.short}</p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-950">Why this matters</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{priority.why}</p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <div className="text-sm font-semibold text-white">Target outcome</div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{priority.outcome}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {priority.phases.map((phase) => {
          const phaseMeta = roadmapPhases.find((item) => item.id === phase.phaseId);

          return (
            <div key={phase.phaseId} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{phaseMeta?.label}</div>
              <h4 className="mt-2 text-lg font-semibold text-slate-950">{phase.heading}</h4>
              <div className="mt-4 space-y-2">
                {phase.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-2 text-sm leading-5 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <ListChecks className="h-3.5 w-3.5" />
                  Workstream rhythm
                </div>
                <div className="space-y-2">
                  {phase.workstreams.map((item) => (
                    <div key={item} className="text-sm leading-5 text-slate-600">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function OpenHouseRoadmapExecutionPlan() {
  const [activePriorityId, setActivePriorityId] = useState(strategicRoadmap[0].id);
  const activePriority = strategicRoadmap.find((priority) => priority.id === activePriorityId) || strategicRoadmap[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button type="button" onClick={() => scrollToSection("top")} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold leading-4 text-slate-950">OpenHouse.ai</div>
              <div className="text-xs text-slate-500">Product Roadmap</div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Roadmap sections">
            {navItems.map(([id, label]) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
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
                <Pill>North Star: Builder Thinking Partner</Pill>
                <Pill>Moat: Connected Decision System</Pill>
                <Pill>Execution: Research, validate, build</Pill>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                Turn OpenHouse.ai from reporting into a connected decision system.
              </h1>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection("roadmap")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
                >
                  View roadmap <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("thesis")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
                >
                  View thesis <Target className="h-4 w-4" />
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
                  <div className="text-sm font-medium text-slate-300">What the platform should answer</div>
                  <div className="mt-1 text-2xl font-semibold">
                    Where to focus, why it matters, what to do next, and what to avoid.
                  </div>
                </div>
                <Brain className="h-8 w-8 shrink-0 text-slate-300" />
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Restores data trust first",
                  "Reduces cognitive load",
                  "Connects launch, market, price, and performance",
                  "Surfaces the decisions that matter",
                  "Guides the next action",
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

        <section id="thesis" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Product thesis"
            title="The strategy is not more dashboards. It is better decision support."
          />
          <CardGrid cards={thesisCards} />
        </section>

        <section id="architecture" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Product architecture"
              title="Build one connected product, not a bundle of disconnected views."
              description="Community Pulse, Performance Outlook, New Community Launch, Price Response, CMA, context, and outcome tracking should reinforce one another."
            />
            <CardGrid cards={architecture} columns="lg:grid-cols-4" />
          </div>
        </section>

        <section id="recommendations" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeader
            eyebrow="Core unit of value"
            title="A recommendation is the product object that ties everything together."
            description="Every major capability should either make recommendations more accurate, more contextual, easier to trust, easier to act on, or easier to learn from."
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {recommendationFields.map(([field, description]) => (
              <div key={field} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-950">{field}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="lifecycle" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Lifecycle strategy"
              title="The product should support the full community lifecycle."
              description="The moat gets stronger when Launch, Pulse, Outlook, Price Response, CMA, and outcome tracking work together instead of acting like separate reports."
            />

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              {lifecycle.map(([moment, role, question], index) => (
                <div
                  key={moment}
                  className={`grid gap-4 p-5 md:grid-cols-[0.3fr_0.35fr_1fr] md:items-center ${
                    index !== lifecycle.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="font-semibold text-slate-950">{moment}</div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">{role}</div>
                  <p className="text-sm leading-6 text-slate-600">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Execution roadmap"
              title="Strategic-priority roadmap."
            />
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-3">
            {roadmapPhases.map((phase) => (
              <PhaseBadge key={phase.id} phase={phase} />
            ))}
          </div>

          <div className="mb-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="text-sm font-semibold text-white">Normal cadence</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Research first, Product / Design second, Engineering / Ops third.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-950">Month 1 exception</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Engineering / Ops leads immediate recovery because data trust is below table stakes.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-950">What wins</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Correct data, low-friction interpretation, trusted recommendations, and connected outcome learning.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.34fr_1fr]">
            <div className="space-y-3 xl:sticky xl:top-24 xl:self-start">
              {strategicRoadmap.map((priority) => (
                <PriorityRow
                  key={priority.id}
                  priority={priority}
                  isActive={activePriority.id === priority.id}
                  onSelect={() => setActivePriorityId(priority.id)}
                />
              ))}
            </div>

            <div className="space-y-6">
              <RoadmapMatrix activePriorityId={activePriority.id} onSelectPriority={setActivePriorityId} />
              <PriorityDetail priority={activePriority} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
