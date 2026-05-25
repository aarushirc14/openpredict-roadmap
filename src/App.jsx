import React, { useMemo, useState } from "react";
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
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const roadmap = [
  {
    id: "month-1",
    label: "Month 1",
    title: "Fix Data Trust Issues + Start Prototyping",
    theme: "Fix what is clearly broken while product/design starts the next experience.",
    focus:
      "Engineering improves QA and data correctness. Product/design prototypes immediate UI fixes and the 2.0 decision-first experience. Research/backend starts CMA and agentic context engine groundwork.",
    icon: ShieldCheck,
    status: "Foundation",
    workstreams: [
      {
        name: "Engineering / Ops",
        summary: "Own QA, data correctness, data freshness, and current reporting trust.",
        items: [
          {
            title: "Audit and improve current manual QA processes",
            bullets: [
              "Document the current QA process for Community Pulse and Performance Outlook.",
              "Identify where QA depends too much on manual review or individual knowledge.",
              "Prioritize the highest-risk data correctness issues.",
            ],
          },
          {
            title: "Fix QA and data correctness issues in Community Pulse",
            bullets: [
              "Address known calculation, comparison, and display issues.",
              "Prioritize issues that could cause customers to question the data.",
              "Improve confidence that numbers match expected reporting logic.",
            ],
          },
          {
            title: "Fix QA and data correctness issues in Performance Outlook",
            bullets: [
              "Address inconsistencies in report outputs.",
              "Validate that report data is current and correct.",
              "Prioritize fixes that directly affect trust in the report.",
            ],
          },
          {
            title: "Improve data freshness and period logic",
            bullets: [
              "Improve data freshness indicators.",
              "Clarify MTD vs. complete-period logic.",
              "Improve target and pace logic where needed.",
            ],
          },
        ],
      },
      {
        name: "Product / Design",
        summary: "Own the prototype, UX direction, and validated handoff to engineering.",
        items: [
          {
            title: "Prototype immediate UI fixes for current Pulse and Outlook",
            bullets: [
              "Identify current design and usability pain points.",
              "Separate data correctness issues from UX/comprehension issues.",
              "Prototype short-term fixes that make the current experience easier to scan and understand.",
              "Hand off only validated short-term design fixes to engineering.",
            ],
          },
          {
            title: "Prototype Community Pulse / Performance Outlook 2.0",
            bullets: [
              "Explore a more action-first, decision-first, and recommendation-first experience.",
              "Prototype how priority communities should be surfaced.",
              "Explore decision states such as Feed Demand, Diagnose Conversion, Review Price / Positioning, Validate Benchmark, Monitor Due to Context, and Protect Momentum.",
              "Explore how to show what not to do yet without overcomplicating the interface.",
              "Begin the first FDE-style discovery and validation loop.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Start the technical groundwork for market context and builder-specific context.",
        items: [
          {
            title: "Start or continue CMA research capability discovery",
            bullets: [
              "Identify what market and competitive data is available.",
              "Explore which CMA outputs would actually improve recommendations.",
              "Separate useful decision context from generic market data.",
            ],
          },
          {
            title: "Start or continue agentic research groundwork",
            bullets: [
              "Begin shaping the future context engine for each builder.",
              "Explore what context the platform should gather, remember, and reuse.",
              "Focus first on internal use cases and future recommendation support, not a standalone AI tool.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-2",
    label: "Month 2",
    title: "Release First 2.0 Iteration + Prototype CMA / Price Response Integration",
    theme: "Move from quick fixes into the first validated decision-first experience.",
    focus:
      "Product/design finalizes the first Community Pulse and Performance Outlook 2.0 release. Engineering implements validated prototypes. Product/design prototypes CMA + Price Response integration while research/backend starts shaping the context engine.",
    icon: Eye,
    status: "Decision-First UX",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Finalize 2.0 and prototype how CMA + Price Response fit into the workflow.",
        items: [
          {
            title: "Finalize the first 2.0 release of Community Pulse and Performance Outlook",
            bullets: [
              "Incorporate feedback from Month 1 prototypes.",
              "Define what belongs in the first release vs. later iterations.",
              "Prepare designs, flows, copy, and acceptance criteria for engineering.",
            ],
          },
          {
            title: "Prototype CMA + Price Response integration",
            bullets: [
              "Use results from CMA research to explore where market context belongs in the workflow.",
              "Prototype how Price Response supports decision-making rather than sitting as a one-off analysis.",
              "Explore whether CMA and Price Response should appear as supporting evidence, a diagnostic layer, part of the Decision Brief, or part of community-level recommendations.",
              "Run another FDE-style prototype and validation loop.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Implement validated 2.0 work while continuing trust improvements.",
        items: [
          {
            title: "Implement validated 2.0 prototypes",
            bullets: [
              "Build from product/design specs.",
              "Avoid expanding scope into unvalidated concepts.",
              "Preserve data correctness while implementing the improved experience.",
            ],
          },
          {
            title: "Continue QA and data trust work",
            bullets: [
              "Continue improving QA processes.",
              "Continue tightening freshness, period, target, and pace logic.",
              "Support product analytics instrumentation.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Turn early research into a clearer capability path.",
        items: [
          {
            title: "Explore results of CMA research",
            bullets: [
              "Identify which capabilities are ready for prototyping.",
              "Identify which capabilities need more data, research, or technical validation.",
            ],
          },
          {
            title: "Start shaping the context engine",
            bullets: [
              "Explore how builder-specific context can support internal tooling and future customer-facing recommendations.",
              "Identify first useful internal use cases, such as account intelligence, customer-facing action generation, internal documentation, and EM-support workflows.",
              "Keep the context engine reusable across multiple use cases.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-3",
    label: "Month 3",
    title: "Finalize CMA / Price Response Integration + Start New Community Launch Prototyping",
    theme: "Move one validated workflow toward build while product prototypes the next lifecycle moment.",
    focus:
      "Product/design finalizes the first CMA + Price Response integration. Engineering starts implementation. Product/design starts New Community Launch prototyping and research/backend clarifies Launch data needs.",
    icon: Rocket,
    status: "Lifecycle Expansion",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Finalize CMA + Price Response, then start Launch prototyping.",
        items: [
          {
            title: "Finalize the first iteration of CMA + Price Response integration",
            bullets: [
              "Define how CMA and Price Response support recommendations.",
              "Clarify where they appear in the user experience.",
              "Decide whether the first version belongs inside Community Pulse, Performance Outlook, the Decision Brief, a community-level diagnostic view, or an internal advisory workflow.",
              "Prepare engineering handoff with designs, flows, data requirements, and acceptance criteria.",
            ],
          },
          {
            title: "Start prototyping New Community Launch",
            bullets: [
              "Treat Launch as the pre-opening decision loop.",
              "Focus on whether the community is ready to open.",
              "Prototype how launch readiness should be communicated.",
              "Explore launch readiness inputs such as demand buildup, traffic quality, leads, appointments made, appointments held, projected sales vs. launch target, days remaining, and pricing / positioning concerns.",
            ],
          },
          {
            title: "Prototype launch-to-Pulse handoff",
            bullets: [
              "Explore how a community moves from Community Launch into Community Pulse once active.",
              "Identify which launch context should carry forward into active community management.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Start building the validated CMA + Price Response integration.",
        items: [
          {
            title: "Start implementation of validated CMA + Price Response integration",
            bullets: [
              "Build only the validated integration path.",
              "Avoid turning CMA into a standalone dashboard unless validation proves that is needed.",
              "Ensure Price Response is connected to the decision workflow.",
            ],
          },
          {
            title: "Continue implementation of 2.0 improvements",
            bullets: [
              "Finish remaining validated Community Pulse / Performance Outlook 2.0 work.",
              "Continue product analytics support and data trust improvements.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Clarify what New Community Launch needs from data and context.",
        items: [
          {
            title: "Clarify Community Launch data and setup requirements",
            bullets: [
              "Launch date, sales-open date, launch target, and first-period sales target.",
              "Community URL, CRM mapping, GA4 / web data, lead source data, and appointment data.",
              "Pricing assumptions, product / floor plan details, and competitive cluster / market data where relevant.",
            ],
          },
          {
            title: "Continue context engine work",
            bullets: [
              "Identify which launch-specific context should be remembered.",
              "Explore how launch context should affect future recommendations.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-4",
    label: "Month 4",
    title: "Validate New Community Launch + Continue Implementation",
    theme: "Validate Launch before engineering turns it into product.",
    focus:
      "Product/design validates the New Community Launch prototype. Engineering continues validated implementation work. Research/backend continues context engine and agentic research.",
    icon: Target,
    status: "Launch Validation",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Validate Launch readiness as a workflow, not just a view.",
        items: [
          {
            title: "Validate New Community Launch prototype",
            bullets: [
              "Test whether users understand the launch readiness concept.",
              "Validate whether the product answers: Is this community ready to open?",
              "Explore readiness language such as Ready, At Risk, Off Track, and Needs Review.",
              "Test which signals users trust and which require explanation.",
            ],
          },
          {
            title: "Refine the launch readiness workflow",
            bullets: [
              "Clarify which metrics belong in the first view.",
              "Clarify which supporting evidence should be expandable.",
              "Clarify what actions the product should suggest.",
              "Clarify what the product should avoid overclaiming.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Continue validated build work without pulling unvalidated Launch concepts too early.",
        items: [
          {
            title: "Continue validated implementation work",
            bullets: [
              "Continue Community Pulse / Performance Outlook 2.0 implementation if needed.",
              "Continue CMA + Price Response integration work.",
              "Continue QA and data correctness improvements.",
              "Avoid pulling unvalidated Launch concepts into engineering too early.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Keep strengthening context and agentic research around real recommendation workflows.",
        items: [
          {
            title: "Continue context engine foundation",
            bullets: [
              "Support internal knowledge retrieval.",
              "Connect relevant customer/account context to recommendations.",
              "Explore how customer conversations, notes, and previous decisions can inform the product.",
            ],
          },
          {
            title: "Continue agentic research exploration",
            bullets: [
              "Focus on workflows that improve recommendations.",
              "Avoid generic AI features that do not connect to the Decision Engine.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-5",
    label: "Month 5",
    title: "Hand Off New Community Launch + Prototype Builder Operating Workflow",
    theme: "Move Launch toward build while prototyping how recommendations become recurring workflows.",
    focus:
      "Product/design hands off New Community Launch first iteration. Engineering starts Launch implementation. Product/design prototypes operating workflow and action tracking.",
    icon: Workflow,
    status: "Workflow Design",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Prepare Launch for implementation and prototype recurring workflows.",
        items: [
          {
            title: "Finalize New Community Launch first iteration",
            bullets: [
              "Define the minimum useful launch readiness workflow.",
              "Define first-release launch readiness signals.",
              "Define the launch-to-Pulse handoff.",
              "Define what should be customer-facing vs. internal-only.",
              "Prepare engineering handoff with specs and acceptance criteria.",
            ],
          },
          {
            title: "Prototype operating workflows",
            bullets: [
              "Weekly update.",
              "Bi-weekly performance review.",
              "Monthly Performance Outlook review.",
              "Launch readiness review.",
              "Portfolio prioritization review.",
            ],
          },
          {
            title: "Prototype action tracking",
            bullets: [
              "What was recommended?",
              "Who owns the action?",
              "Was the action taken?",
              "What changed afterward?",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Start the validated Launch build and finish remaining implementation work.",
        items: [
          {
            title: "Start New Community Launch implementation",
            bullets: [
              "Build the validated first version.",
              "Focus on launch readiness, not every future launch use case.",
              "Preserve flexibility for future CMA and Price Response integration.",
            ],
          },
          {
            title: "Continue previous implementation work",
            bullets: [
              "Complete remaining 2.0, CMA, or Price Response implementation items as needed.",
              "Continue QA and reliability improvements.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Explore how recommendations become measurable actions.",
        items: [
          {
            title: "Explore outcome tracking requirements",
            bullets: [
              "Identify what can be tracked automatically.",
              "Identify what may require internal or customer input.",
              "Define the earliest useful version of recommendation to action to outcome tracking.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-6",
    label: "Month 6",
    title: "Release Launch First Iteration + Define Reusable Recommendation Format",
    theme: "Finish the first Launch release and start making recommendations reusable across the product.",
    focus:
      "Engineering releases or completes New Community Launch first iteration. Product/design defines the reusable recommendation format. Research/backend supports context engine and recommendation infrastructure.",
    icon: Layers3,
    status: "Reusable System",
    workstreams: [
      {
        name: "Engineering / Ops",
        summary: "Complete the first Launch implementation and continue validated workflow work.",
        items: [
          {
            title: "Release or complete New Community Launch first iteration",
            bullets: [
              "Launch readiness workflow.",
              "Launch readiness status or signal.",
              "Core pre-launch metrics.",
              "Launch-to-Pulse handoff foundation.",
            ],
          },
          {
            title: "Continue implementation of validated workflow improvements",
            bullets: [
              "Finish remaining launch, CMA, Price Response, or 2.0 work.",
              "Continue instrumentation and product analytics support.",
            ],
          },
        ],
      },
      {
        name: "Product / Design",
        summary: "Define how recommendations work across all surfaces.",
        items: [
          {
            title: "Define reusable recommendation format across surfaces",
            bullets: [
              "Decision state, recommendation, rationale, evidence, and context.",
              "Confidence language, what not to do yet, and data needed.",
              "Owner / next step and outcome tracking.",
            ],
          },
          {
            title: "Prototype how the same recommendation appears in multiple places",
            bullets: [
              "Community Pulse and Performance Outlook.",
              "Community Launch.",
              "Decision Brief.",
              "Internal prep workflow.",
              "Email / weekly update.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Support the engine behind reusable recommendations.",
        items: [
          {
            title: "Support context engine and recommendation infrastructure",
            bullets: [
              "Connect builder context to recommendations.",
              "Identify what logic is rules-based.",
              "Identify what requires research / AI support.",
              "Identify what requires human review.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "months-7-9",
    label: "Months 7-9",
    title: "Scale the Operating Workflow",
    theme: "Turn product insight into recurring customer workflows.",
    focus:
      "Product/design prototypes portfolio and operating workflows. Engineering implements validated workflows. Research/backend continues context engine work.",
    icon: Network,
    status: "Scale",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Prototype how customers review, prioritize, and act on recommendations repeatedly.",
        items: [
          {
            title: "Prototype portfolio prioritization",
            bullets: [
              "Help leaders see which communities or launches need attention first.",
              "Avoid making this just another table.",
              "Focus on prioritizing decisions and action.",
            ],
          },
          {
            title: "Prototype recurring briefs and workflows",
            bullets: [
              "Weekly / bi-weekly updates.",
              "Monthly review briefs.",
              "Launch readiness reviews.",
              "Internal prep workflows.",
              "Follow-up workflows.",
            ],
          },
          {
            title: "Prototype action-item workflow",
            bullets: [
              "Recommendations should not die in a report.",
              "The product should start connecting recommendations to action and follow-up.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Build validated workflows and keep measuring usage.",
        items: [
          {
            title: "Implement validated operating workflows",
            bullets: [
              "Build only after product/design validates the workflow.",
              "Prioritize recurring customer value over new one-off views.",
            ],
          },
          {
            title: "Support product analytics",
            bullets: [
              "Track usage of key views and workflows.",
              "Understand whether users engage with recommendations, drill-downs, and briefs.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Keep context and research tied to Decision Engine use cases.",
        items: [
          {
            title: "Continue improving context engine and research workflows",
            bullets: [
              "Add useful customer/account context where it improves recommendations.",
              "Continue agentic research only where it supports the Decision Engine.",
              "Support future recommendation and workflow automation.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "months-10-12",
    label: "Months 10-12",
    title: "Strengthen the Moat",
    theme: "Connect the lifecycle into a harder-to-copy platform experience.",
    focus:
      "Product/design refines the connected lifecycle. Engineering implements validated lifecycle connections. Research/backend strengthens CMA, context, and recommendation tracking.",
    icon: Brain,
    status: "Moat",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Refine the full lifecycle and make recommendations trackable.",
        items: [
          {
            title: "Refine the full lifecycle experience",
            bullets: [
              "Community Launch before opening.",
              "Community Pulse once active.",
              "Performance Outlook for executive review.",
              "Price Response when price / position is uncertain.",
              "CMA when market context changes the recommendation.",
              "Outcome tracking after action is taken.",
            ],
          },
          {
            title: "Prototype recommendation tracking",
            bullets: [
              "Show what was recommended.",
              "Show what action was taken.",
              "Show what changed afterward.",
              "Explore how the platform can learn from outcomes.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Ops",
        summary: "Implement the validated connections that turn surfaces into a system.",
        items: [
          {
            title: "Implement validated lifecycle connections",
            bullets: [
              "Launch-to-Pulse handoff.",
              "Price Response integration.",
              "CMA integration where validated.",
              "Recommendation tracking foundation.",
            ],
          },
        ],
      },
      {
        name: "Research / Backend",
        summary: "Make market context and builder context improve recommendations.",
        items: [
          {
            title: "Strengthen CMA and context engine capabilities",
            bullets: [
              "CMA should change recommendations, not just display comps.",
              "Context engine should make recommendations more specific and useful.",
              "Agentic research should support real workflows, not become generic AI tooling.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "months-12-plus",
    label: "12+ Months",
    title: "Future Automated Guidance",
    theme: "Move toward automation only after trust, context, explainability, and outcome tracking are strong.",
    focus:
      "Carefully prototype customer-facing automated guidance and build toward closed-loop learning.",
    icon: Sparkles,
    status: "Future",
    workstreams: [
      {
        name: "Product / Design",
        summary: "Prototype automated guidance carefully and visibly show caveats.",
        items: [
          {
            title: "Prototype customer-facing automated guidance carefully",
            bullets: [
              "Start with lower-risk recommendations.",
              "Make confidence and caveats visible.",
              "Always show supporting evidence.",
              "Continue including what not to do yet.",
            ],
          },
        ],
      },
      {
        name: "Engineering / Research",
        summary: "Build toward closed-loop learning and future automated recommendations.",
        items: [
          {
            title: "Build toward closed-loop learning",
            bullets: [
              "Recommendation made.",
              "Action taken.",
              "Outcome observed.",
              "Future recommendation improved.",
            ],
          },
          {
            title: "Support future automated recommendations",
            bullets: [
              "Automated next-best actions.",
              "Automated launch intervention recommendations.",
              "Automated price response recommendations.",
              "Portfolio reallocation recommendations.",
            ],
          },
        ],
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
      "Product/design validates the experience first. Research/backend prepares the capability. Engineering implements the work once it is clear, validated, and scoped.",
    icon: Workflow,
  },
  {
    title: "The moat thesis",
    description:
      "The moat is the connected system: Community Pulse, Performance Outlook, NCL, Price Response, CMA, builder context, recommendation logic, and outcome learning all reinforcing one another.",
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
      "Community Launch readiness workflows.",
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
  ["Before opening", "Community Launch", "Is this community ready to open with enough demand, buyer intent, appointment readiness, and price / position confidence?"],
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

function validateRoadmapData() {
  const ids = new Set();

  roadmap.forEach((phase) => {
    if (ids.has(phase.id)) throw new Error(`Duplicate roadmap id: ${phase.id}`);
    ids.add(phase.id);

    if (!phase.label || !phase.title || !phase.focus) {
      throw new Error(`Roadmap phase ${phase.id} is missing required content.`);
    }

    if (!Array.isArray(phase.workstreams) || phase.workstreams.length === 0) {
      throw new Error(`Roadmap phase ${phase.id} must include at least one workstream.`);
    }

    phase.workstreams.forEach((stream) => {
      if (!stream.name || !Array.isArray(stream.items) || stream.items.length === 0) {
        throw new Error(`Roadmap phase ${phase.id} has an invalid workstream.`);
      }

      stream.items.forEach((item) => {
        if (!item.title || !Array.isArray(item.bullets) || item.bullets.length === 0) {
          throw new Error(`Roadmap phase ${phase.id} has an invalid roadmap item.`);
        }
      });
    });
  });
}

validateRoadmapData();

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

export default function OpenPredictRoadmapExecutionPlan() {
  const [activePhaseId, setActivePhaseId] = useState(roadmap[0].id);
  const [search, setSearch] = useState("");

  const activePhase = roadmap.find((phase) => phase.id === activePhaseId) || roadmap[0];

  const filteredRoadmap = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return roadmap;

    return roadmap.filter((phase) => {
      const text = [
        phase.label,
        phase.title,
        phase.theme,
        phase.focus,
        phase.status,
        ...phase.workstreams.flatMap((stream) => [
          stream.name,
          stream.summary,
          ...stream.items.flatMap((item) => [item.title, ...item.bullets]),
        ]),
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(query);
    });
  }, [search]);

  const visibleActivePhase = filteredRoadmap.some((phase) => phase.id === activePhase.id)
    ? activePhase
    : filteredRoadmap[0] || activePhase;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button type="button" onClick={() => scrollToSection("top")} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold leading-4 text-slate-950">OpenPredict</div>
              <div className="text-xs text-slate-500">Roadmap Execution Plan</div>
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
                <Pill>Execution: Prototype → Validate → Build</Pill>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                Turn OpenPredict from a reporting suite into the builder's thinking partner.
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
                  "Understands the builder's context",
                  "Connects launch, market, price, and performance",
                  "Surfaces the decisions that matter",
                  "Explains why something needs attention",
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
              description="Community Pulse, Performance Outlook, Launch, Price Response, CMA, context, and outcome tracking should reinforce one another."
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
              title="Month-by-month workstreams."
              description="The roadmap section is organized by workstream so product/design, engineering/ops, and research/backend can move in parallel without collapsing everything into a flat feature list."
            />

            <div className="relative lg:mb-8">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search roadmap..."
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none ring-slate-950/10 transition focus:ring-4 sm:w-72"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.38fr_1fr]">
            <div className="space-y-3 lg:sticky lg:top-24 lg:self-start">
              {filteredRoadmap.map((phase) => {
                const Icon = phase.icon;
                const isActive = visibleActivePhase.id === phase.id;

                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActivePhaseId(phase.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10"
                        : "border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50"
                    }`}
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

              {filteredRoadmap.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                  No roadmap items match your search.
                </div>
              ) : null}
            </div>

            <motion.div
              key={visibleActivePhase.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="border-b border-slate-200 pb-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  <Pill>{visibleActivePhase.label}</Pill>
                  <Pill>{visibleActivePhase.status}</Pill>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{visibleActivePhase.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{visibleActivePhase.theme}</p>
                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-950">Focus</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{visibleActivePhase.focus}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-5">
                {visibleActivePhase.workstreams.map((stream) => (
                  <div key={stream.name} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold text-slate-950">{stream.name}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{stream.summary}</p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      {stream.items.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex gap-2">
                            <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                            <h5 className="text-sm font-semibold leading-5 text-slate-950">{item.title}</h5>
                          </div>
                          <div className="mt-3 space-y-2">
                            {item.bullets.map((bullet) => (
                              <div key={bullet} className="flex gap-2 text-sm leading-5 text-slate-600">
                                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <SectionHeader
              eyebrow="Final thesis"
              title="The roadmap should make OpenPredict easier to trust, easier to act on, and harder to copy."
              description="Trusted data creates confidence. Context creates relevance. Recommendations create action. Outcome tracking creates learning."
              dark
            />

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Roadmap Cycle</div>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    Prototype → validate → prepare capability → implement → learn.
                  </p>
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
