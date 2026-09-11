/**
 * Shivraj Dhaytadak - Portfolio Data Model
 * Wall of Portfolios Standard: Complete structured data model covering
 * executive profile, recruiter KPIs, career evolution acts, flagship case study,
 * interactive topology specs, engineering philosophy, and command palette index.
 */

const portfolioData = {
    profile: {
        name: "Shivraj Dhaytadak",
        title: "Agentic AI Consultant",
        headline: "Architecting Resilient Multi-Agent Workflows for Enterprise Scale.",
        bio: "I'm Shivraj Dhaytadak—Agentic AI Consultant at Allianz Services. I bridge stochastic large language models with deterministic, mission-critical distributed pipelines. 4+ years engineering production LangGraph engines, Azure event-driven architectures, and high-throughput agent swarms.",
        location: "Pune, IN",
        status: "Open to Relocation & High-Impact Agentic AI Roles",
        experienceYears: "4+ Years",
        email: "shivraj.25d@gmail.com",
        phone: "+91 7972476081",
        github: "https://github.com/Shivraj-Dhaytadak",
        linkedin: "https://www.linkedin.com/in/shivraj-dhaytadak7",
        resumeUrl: "resume.pdf",
        education: {
            degree: "B.E. Computer Engineering",
            institution: "PES Modern College of Engineering (PES MCOE), Pune",
            period: "2018 – 2022"
        },
        certifications: [
            {
                name: "Microsoft Certified: Azure AI Fundamentals",
                issuer: "Microsoft",
                date: "Aug 2025",
                badge: "Azure AI",
                icon: "award"
            },
            {
                name: "AWS Certified Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "2024 – 2027",
                badge: "AWS Certified",
                icon: "cloud"
            }
        ]
    },

    recruiterSnapshot: {
        kpis: [
            {
                id: "kpi-claims",
                value: "100k+",
                number: 100,
                suffix: "k+",
                label: "Claims Volume",
                sublabel: "Annual Enterprise Pipeline",
                icon: "zap",
                accent: "amber",
                highlight: "Screened via autonomous agent pipelines"
            },
            {
                id: "kpi-agents",
                value: "145+",
                number: 145,
                suffix: "+",
                label: "Micro-Agents",
                sublabel: "Production Orchestration",
                icon: "bot",
                accent: "indigo",
                highlight: "Federated LangGraph & CrewAI swarms"
            },
            {
                id: "kpi-deploy",
                value: "1 Day",
                number: 1,
                suffix: " Day",
                label: "Journey Rollout",
                sublabel: "Slashed from 14-day cycle",
                icon: "sparkles",
                accent: "emerald",
                highlight: "Zero-code redeploy declarative JSON"
            },
            {
                id: "kpi-journeys",
                value: "19",
                number: 19,
                suffix: "",
                label: "Active Journeys",
                sublabel: "Declarative JSON Workflows",
                icon: "workflow",
                accent: "blue",
                highlight: "Multi-tier prompt configurations"
            }
        ],
        honors: [
            {
                company: "Allianz Services",
                period: "2026",
                awards: ["Best Team (H1 '26)", "Best Performer (Q1 & Q2 '26)"],
                context: "Insurance GCC / Captive — Enterprise agentic lodgement"
            },
            {
                company: "Yash Technologies",
                period: "2025–2026",
                awards: ["Valuable Individual Asset Award"],
                context: "Tier-1 Consultancy — FlowIQ Text-to-SQL graph engine"
            },
            {
                company: "Persistent Systems",
                period: "2022–2025",
                awards: ["High Five Award", "Bravo Team Award"],
                context: "Product Engineering — Distributed search & SASVA RAG"
            }
        ],
        invariants: [
            {
                title: "Multi-Layer Guardrails & Azure Content Safety",
                description: "Halts prompt injection, jailbreak attempts, and toxic payloads before state mutation.",
                icon: "shield-check"
            },
            {
                title: "LangChain Automated PII Redaction",
                description: "100% compliance with Australian Privacy Principles (APP) prior to data persistence.",
                icon: "lock"
            },
            {
                title: "Runtime Pydantic Schema-First Invariants",
                description: "Every LangGraph node output is validated against strict Pydantic schemas; zero corrupted state.",
                icon: "check-circle"
            },
            {
                title: "Declarative JSON Workflow Engine",
                description: "Decouples prompt schemas and graph routes from binaries; 13 days of developer toil eliminated.",
                icon: "cpu"
            }
        ],
        proofPills: [
            "LangGraph",
            "Apache Kafka",
            "Azure AI Foundry",
            "Azure OpenAI GPT-4o / GPT-5.4",
            "Azure Durable Functions",
            "Pydantic",
            "CrewAI",
            "FastAPI",
            "vLLM",
            "LangChain",
            "Docker",
            "Python"
        ]
    },

    careerTimeline: [
        {
            act: "Act III",
            id: "allianz",
            period: "Jan 2026 – Present",
            company: "Allianz Services",
            role: "Agentic AI Consultant",
            location: "Pune, IN",
            theme: "Enterprise Autonomy & Production Resiliency",
            context: "Insurance Captive / GCC handling massive claim workflows across Asia-Pacific.",
            honors: "Best Team (H1 '26) • Best Performer (Q1 & Q2 '26)",
            stack: ["LangGraph", "Azure Durable Functions", "Azure AI Foundry (GPT-5.4 mini)", "Managed Kafka", "Azure Event Hubs", "Azure Content Safety", "Pydantic", "Blob Storage"],
            metrics: [
                { label: "AST Parse Cache", value: "< 0.4ms" },
                { label: "Cold Start Latency", value: "0ms (Warm)" },
                { label: "APP-19 Privacy", value: "100% Pass" },
                { label: "Prompt Duplication", value: "0%" }
            ],
            narrative: {
                challenge: "Legacy claim intake pipelines required 10–14 days of backend developer engineering, schema re-compilation, and CI/CD validation to alter a single business lodgement rule. LLM stochastic nature risked compliance breaches under strict Australian insurance mandates.",
                solution: "Architected a Declarative JSON Workflow Engine separating prompt configurations and route logic from execution binaries. Incoming stream payloads from Kafka and Event Hubs are orchestrated through Azure Durable Functions and passed through Azure Content Safety and LangChain PII redaction before entering the LangGraph state machine.",
                impact: "Slashed new claim journey launch time from 14 days to < 24 hours. Scaled pipeline to process 100k+ annual claims across 19 distinct automated journeys with zero backend redeployment and 100% regulatory compliance."
            },
            deliverables: [
                "<strong>[Architecture]</strong> Declarative JSON workflow engine driving 19 claim types, allowing business & prompt engineers to launch new claim journeys in 24 hours without backend redeployment.",
                "<strong>[Guardrails]</strong> Multi-tier Azure Content Safety & LangChain PII redaction middleware ensuring 100% compliance with Australian corporate privacy standards (APP).",
                "<strong>[Orchestration]</strong> Synchronized LangGraph node transitions with Azure Durable Functions and warm Kafka consumer pools to prevent cold-start bottlenecks.",
                "<strong>[Prompt Decoupling]</strong> Two-tier prompt architecture combining generalized agent directives with journey-specific rules, eliminating 100% of prompt duplication."
            ]
        },
        {
            act: "Act II",
            id: "yashtechnologies",
            period: "May 2025 – Jan 2026",
            company: "Yash Technologies",
            role: "Data Scientist (Gen AI)",
            location: "Pune, IN",
            theme: "Applied Enterprise GenAI & Retrieval Architecture",
            context: "Tier-1 IT consultancy delivering tailored enterprise AI and analytics solutions.",
            honors: "Valuable Individual Asset Award",
            stack: ["FastAPI", "CrewAI", "Google Gemini 2.5", "PostgreSQL", "Azure SQL", "sqlglot", "SQLAlchemy", "LangGraph"],
            metrics: [
                { label: "SQL Effort Cut", value: "-80%" },
                { label: "Retrieval Speed", value: "+40%" },
                { label: "Precision Lift", value: "+35%" },
                { label: "Schema Success", value: "+25%" }
            ],
            narrative: {
                challenge: "Enterprise business intelligence teams faced heavy backlogs writing complex multi-dialect SQL queries across PostgreSQL and Azure SQL, with high error rates and schema lookup contention during peak hours.",
                solution: "Engineered Project FlowIQ—a high-performance Text-to-SQL Graph Matrix combining hybrid session memory (short-term conversational context + long-term schema memory) with a CrewAI agent team and deterministic AST syntax validators.",
                impact: "Reduced manual analytics development effort by 80%, accelerated query retrieval by 40%, and achieved 35% higher response precision with zero database schema leaks."
            },
            deliverables: [
                "<strong>FastAPI Endpoints:</strong> Engineered high-performance FastAPI Text-to-SQL endpoints with sub-second translation of complex natural language questions into structured SQL queries.",
                "<strong>Hybrid Memory:</strong> Architected custom hybrid session memory buffers, boosting query accuracy by 35% and improving operational SQL execution rates by 25%.",
                "<strong>AST Verification:</strong> Deployed CrewAI multi-agent code generation and review team with deterministic AST dialect verification via sqlglot across PostgreSQL and Azure SQL.",
                "<strong>Metadata Sharding:</strong> Sharded database metadata catalogs into hot memory spaces to eliminate schema lookup lockups during high-concurrency analytical bursts."
            ]
        },
        {
            act: "Act I",
            id: "persistentsystems",
            period: "Aug 2022 – May 2025",
            company: "Persistent Systems",
            role: "Software Engineer (Gen AI & Search)",
            location: "Pune, IN",
            theme: "Foundations of Distributed Search & High-Concurrency Systems",
            context: "Product engineering for enterprise search, neural retrieval, and distributed backend infrastructure.",
            honors: "High Five Award • Bravo Team Award",
            stack: ["FastAPI", "vLLM", "AWS Bedrock", "SageMaker", "LangChain", "Docker", "PyTorch", "Transformers", "TRL (LoRA/QLoRA)"],
            metrics: [
                { label: "Latency Cut", value: "-50%" },
                { label: "Relevancy Lift", value: "+40%" },
                { label: "Fine-Tune Prep", value: "+40%" },
                { label: "Dev Output", value: "+25%" }
            ],
            narrative: {
                challenge: "Navigating multi-repository enterprise codebases caused massive developer onboarding friction (-40% time spent looking up documentation). Model inference endpoints suffered from severe latency bottlenecks under concurrency.",
                solution: "Architected Project SASVA: an internal RAG codebase assistant leveraging recursive AST syntax tree chunking, fine-tuned embeddings, and high-throughput model serving using FastAPI and vLLM continuous batching.",
                impact: "Cut developer onboarding lookup time by 40%, slashed model serving response latency by 50%, and boosted overall developer output by 25% across enterprise initiatives."
            },
            deliverables: [
                "<strong>Distributed Search:</strong> Built high-throughput search indexing pipelines and microservices handling millions of records with hybrid dense-sparse neural retrieval.",
                "<strong>Codebase RAG:</strong> Architected an internal RAG codebase knowledge graph with AST chunking and vector search, reducing developer lookup time by 40%.",
                "<strong>Model Serving:</strong> Implemented distributed model-serving endpoints with FastAPI and vLLM continuous batching, cutting inference latency by 50%.",
                "<strong>Dataset Curation:</strong> Designed multi-source dataset curation pipelines for LoRA/QLoRA fine-tuning, improving data preparation velocity by 40%."
            ]
        }
    ],

    flagshipCaseStudy: {
        id: "bluey",
        badge: "Sanitized Architecture Case Study • APP-11 Governed",
        title: "Enterprise Multi-Agent Claims Lodgement Engine",
        subtitle: "Declarative Multi-Agent State Graph Architecture with Dual-Emit Observability",
        client: "Tier-1 Global Insurance GCC (Allianz Services)",
        status: "In Production (100k+ Annual Claims)",
        kpis: [
            { label: "Rollout Velocity", from: "14 Days", to: "< 24 Hours", change: "93% Reduction" },
            { label: "Annual Volume", value: "100,000+", sub: "Screened Claims" },
            { label: "Swarm Scale", value: "145+", sub: "Production Agents" },
            { label: "Active Journeys", value: "19", sub: "Automated Claim Paths" }
        ],
        starNarrative: {
            situation: "Insurance claim lodgement is a high-stakes, legally audited domain. Historically, modifying or adding a claim journey required 10–14 days of backend developer engineering, hardcoded business rule changes, schema re-validation, and full CI/CD deployment cycles. Meanwhile, the inherent non-determinism of LLMs created legal, compliance, and hallucination risks under Australian regulatory frameworks.",
            task: "Engineer a production-grade multi-agent architecture that empowers non-developer prompt engineers to ship new claim journeys in under 24 hours without backend binary redeployments, while guaranteeing 100% compliance with privacy mandates and zero corrupted agent state transitions.",
            action: [
                "Declarative JSON Workflow Engine: Completely decoupled prompt definitions, state transition routes, and tool schemas from the execution binary. Each claim journey is configured via a single declarative JSON document.",
                "Dual-Tier Guardrail Pipeline: Inbound payloads from Managed Kafka and Azure Event Hubs are immediately processed by Azure Content Safety (blocking prompt injection) and LangChain PII redaction middleware (anonymizing citizen data).",
                "Distributed Stream Orchestration: State progression is coordinated via Azure Durable Functions, ensuring durable checkpointing, warm consumer pools, and zero dropped claims under peak surges.",
                "Runtime Pydantic Invariants: Every LangGraph node transition executes runtime Pydantic schema validation. If an LLM returns unexpected structures, deterministic recovery gates intervene immediately."
            ],
            result: "Slashed journey deployment cycle from 14 days to less than 24 hours. The platform processes 100,000+ claims annually across 19 production journeys with zero security breaches and zero state drift.",
            postMortem: {
                tradeoff: "Decoupling JSON schemas introduced slight initial parsing and validation overhead (~15ms per cold session). We mitigated this by compiling and caching validated AST schemas in hot memory and maintaining policy disclosure documents in hot Azure Blob Storage.",
                takeaway: "Strict runtime Pydantic schema validation at every micro-agent boundary is 10x cheaper than attempting to debug corrupted multi-agent conversational states downstream in production."
            }
        },
        topologyNodes: [
            {
                id: "kafka_ingest",
                label: "Managed Kafka & Event Hubs",
                category: "Event Streaming",
                tech: "Apache Kafka / Azure Event Hubs",
                badge: "High Throughput",
                description: "Ingests raw insurance claim submissions from external APIs and policyholder portals at peak concurrency.",
                payloadSample: `{
  "eventId": "evt_99841_aus_motor",
  "topic": "allianz.claims.lodgement.inbound",
  "timestamp": "2026-09-08T05:45:00Z",
  "rawPayload": {
    "policyNumber": "POL-AU-883921",
    "incidentDate": "2026-09-07",
    "driverNarrative": "Rear-ended at traffic lights on Collins St...",
    "estimatedDamage": 4200.00
  }
}`,
                sla: "< 12ms ingestion latency",
                invariant: "Immutable event persistence"
            },
            {
                id: "durable_func",
                label: "Azure Durable Functions Orchestrator",
                category: "Distributed Orchestration",
                tech: "Azure Functions v4 (Isolated Python)",
                badge: "Stateful Durable",
                description: "Coordinates long-running workflow state machines, retries, and asynchronous activity executions with checkpointing.",
                payloadSample: `{
  "orchestratorInstanceId": "orch_allianz_b40e9f1",
  "runtimeStatus": "Running",
  "activitySteps": [
    "Activity1_StreamNormalization",
    "Activity2_SafetyAndPIIInspection",
    "Activity3_LangGraphExecutionLoop"
  ],
  "durableCheckpoints": 3
}`,
                sla: "Zero state loss across retries",
                invariant: "Idempotent step execution"
            },
            {
                id: "guardrails",
                label: "Dual-Tier Safety & PII Guardrail",
                category: "AI Safety & Compliance",
                tech: "Azure Content Safety + LangChain PII",
                badge: "100% APP Compliant",
                description: "Screens prompt injection attacks, detects toxic inputs, and anonymizes personal data before LLM reasoning.",
                payloadSample: `{
  "injectionCheck": { "flagged": false, "confidence": 0.998 },
  "piiRedaction": {
    "driverName": "[REDACTED_NAME]",
    "licenseNumber": "[REDACTED_DL_AU]",
    "phone": "[REDACTED_TEL]"
  },
  "complianceStatus": "CERTIFIED_APP_COMPLIANT"
}`,
                sla: "< 35ms safety filter hop",
                invariant: "Zero raw PII to inference"
            },
            {
                id: "langgraph_engine",
                label: "LangGraph Declarative State Machine",
                category: "Agentic Reasoning",
                tech: "LangGraph + Azure AI Foundry (GPT-5.4)",
                badge: "19 Journeys",
                description: "Executes dynamic graph nodes based on the declarative JSON schema: Policy Verification, Fraud Detection, Damage Appraisal, and Settlement Triage.",
                payloadSample: `{
  "journeyId": "motor_comprehensive_claim_v4",
  "currentNode": "damage_assessment_agent",
  "pydanticValidation": "PASS",
  "stateSchema": {
    "coverageValid": true,
    "excessAmount": 650.00,
    "fraudScore": 0.04,
    "autoApprovalEligible": true
  }
}`,
                sla: "Sub-2.5s composite graph reasoning",
                invariant: "Runtime Pydantic schema validation"
            },
            {
                id: "hot_cache",
                label: "Hot Policy & Disclosure Blob Cache",
                category: "Storage Optimization",
                tech: "Azure Blob Storage + In-Memory AST",
                badge: "Cache Hit: 94%",
                description: "Maintains pre-compiled declarative journey ASTs and hot policy disclosure clauses to avoid redundant remote fetches.",
                payloadSample: `{
  "cacheHit": true,
  "journeyAstKey": "ast:journey:motor_comprehensive:v4",
  "disclosureBundleVersion": "2026.1_AUS_REG",
  "fetchTimeMs": 3.2
}`,
                sla: "< 5ms retrieval",
                invariant: "Hot memory AST cache"
            },
            {
                id: "observability",
                label: "Dual-Emit Observability Engine",
                category: "Telemetry & APM",
                tech: "Dynatrace + Azure Application Insights",
                badge: "Distributed Tracing",
                description: "Streams high-fidelity distributed traces measuring ingestion throughput, agent latency, LLM token duration, and schema hit-rates.",
                payloadSample: `{
  "traceId": "00-4bf92f3577b34da6a3ce929d0e0e4736",
  "metrics": {
    "endToEndDurationMs": 1420,
    "modelInferenceMs": 890,
    "guardrailsMs": 32,
    "cacheHitRatio": 0.94
  }
}`,
                sla: "Real-time alert dispatch",
                invariant: "Complete auditability of every decision"
            }
        ],
        codeTabs: [
            {
                id: "schema_tab",
                label: "Declarative JSON Engine",
                fileName: "motor_claim_journey_v4.json",
                language: "json",
                description: "Production JSON schema defining an entire claim journey. Business teams deploy this directly without recompiling or redeploying backend code.",
                code: `{
  "$schema": "https://allianz.internal/schemas/agentic_journey_v4.json",
  "journeyId": "motor_comprehensive_claim_v4",
  "description": "Autonomous comprehensive motor vehicle lodgement & triage",
  "entryNode": "guardrail_safety_filter",
  "stateSchema": "MotorClaimStateSchemaV4",
  "timeoutSeconds": 45,
  "nodes": [
    {
      "id": "guardrail_safety_filter",
      "agent": "ContentSafetyAgent",
      "failRoute": "reject_submission_escalation",
      "invariants": { "piiRedaction": true, "injectionHalt": true }
    },
    {
      "id": "policy_coverage_resolver",
      "agent": "PolicyValidationAgent",
      "requires": ["policyNumber", "incidentDate"],
      "routes": {
        "covered": "fraud_and_anomaly_evaluator",
        "lapsed": "policy_lapsed_notification",
        "ambiguous": "manual_underwriter_queue"
      }
    },
    {
      "id": "fraud_and_anomaly_evaluator",
      "agent": "FraudDetectionAgent",
      "parameters": { "threshold": 0.20, "weatherValidation": true },
      "routes": {
        "lowRisk": "automated_damage_settler",
        "elevatedRisk": "investigation_triage_queue"
      }
    },
    {
      "id": "automated_damage_settler",
      "agent": "SettlementTriageAgent",
      "autoApproveThreshold": 5000.00,
      "successRoute": "dispatch_settlement_payout"
    }
  ]
}`
            },
            {
                id: "langgraph_tab",
                label: "LangGraph State Machine (Python)",
                fileName: "state_graph_orchestrator.py",
                language: "python",
                description: "Runtime Python execution engine binding declarative node transitions with strict Pydantic schema validation.",
                code: `from typing import Annotated, Dict, Any, List
from typing_extensions import TypedDict
from pydantic import BaseModel, Field, ValidationError
from langgraph.graph import StateGraph, START, END

class ClaimStateSchemaV4(BaseModel):
    """Strict runtime Pydantic schema protecting agent state integrity"""
    claim_id: str
    policy_number: str
    safety_passed: bool = Field(default=False)
    pii_sanitized: bool = Field(default=False)
    coverage_verified: bool = Field(default=False)
    fraud_risk_score: float = Field(ge=0.0, le=1.0, default=0.0)
    settlement_amount: float = Field(default=0.0)
    decision_history: List[str] = Field(default_factory=list)

class DeclarativeEngineExecutor:
    """Executes declarative JSON configurations dynamically within LangGraph"""
    def __init__(self, journey_config: dict):
        self.config = journey_config
        self.graph = StateGraph(ClaimStateSchemaV4)
        self._compile_graph()

    def _compile_graph(self):
        # Bind dynamic nodes defined in declarative JSON
        for node in self.config["nodes"]:
            self.graph.add_node(node["id"], self._create_node_handler(node))

        self.graph.add_edge(START, self.config["entryNode"])
        # Connect graph edges with runtime conditional routes
        self.workflow = self.graph.compile()

    def _create_node_handler(self, node_spec: dict):
        async def node_handler(state: ClaimStateSchemaV4):
            # Every transition verifies and returns strictly validated state mutations
            state.decision_history.append(f"executed:{node_spec['id']}")
            return state
        return node_handler`
            },
            {
                id: "guardrails_tab",
                label: "Azure Safety & PII Redaction",
                fileName: "azure_safety_middleware.py",
                language: "python",
                description: "Enterprise safety pipeline blocking prompt injection attacks and redacting citizen PII for Australian regulatory compliance.",
                code: `from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
from langchain_community.document_transformers import RedactionTransformer
import re

class EnterpriseClaimSafetyGate:
    """Dual-tier guardrail screening 100k+ annual claims prior to LLM reasoning"""
    def __init__(self, endpoint: str, api_key: str):
        self.client = ContentSafetyClient(endpoint, AzureKeyCredential(api_key))
        self.pii_redactor = RedactionTransformer()

    async def screen_payload(self, raw_text: str) -> dict:
        # Step 1: Real-time Azure Content Safety injection analysis
        analysis = await self.client.analyze_text_async(text=raw_text)
        if analysis.is_flagged:
            return {
                "decision": "BLOCKED",
                "reason": "Prompt injection or malicious policyholder input detected",
                "sanitized_payload": None
            }

        # Step 2: LangChain PII Redaction (Australian Privacy Principles 100% compliant)
        sanitized = self.pii_redactor.transform_text(raw_text)
        return {
            "decision": "PERMITTED",
            "reason": "Passed security boundary",
            "sanitized_payload": sanitized
        }`
            }
        ]
    },

    engineeringPhilosophy: {
        axioms: [
            {
                number: "01",
                axiom: "Deterministic Guardrails > Stochastic Hope",
                subtext: "LLMs are statistical sequence predictors, not verified state machines.",
                description: "Never allow an LLM to mutate system state without strict Pydantic runtime schema validation. If an agent output fails type coercion or boundary invariants, drop into a deterministic recovery gate immediately."
            },
            {
                number: "02",
                axiom: "Traceability is Non-Negotiable",
                subtext: "If an agent journey cannot be replayed step-by-step from an event log, it does not run in production.",
                description: "Every agent node transition, prompt template version, tool invocation parameter, and external API result must produce an immutable audit log. Dual-emit observability via Dynatrace and Azure Application Insights enables forensic isolation within seconds."
            },
            {
                number: "03",
                axiom: "Simplicity Over Complexity",
                subtext: "Multi-agent swarms are a scalability tool, not an architectural fashion statement.",
                description: "Only introduce autonomous multi-agent topologies when a single constrained prompt or linear pipeline cannot reliably handle the state space complexity. Keep node interfaces minimal, decoupling prompt schemas from execution code."
            }
        ],
        researchReading: [
            {
                title: "Agentic Memory Compression & Sliding Window Context Condensation",
                area: "Context Engineering",
                notes: "Evaluating token-efficient episodic memory retrieval for long-horizon insurance settlement sessions."
            },
            {
                title: "LangGraph Multi-Thread Persistence & Asynchronous Checkpointing",
                area: "Distributed State",
                notes: "Stress-testing durable state recovery across Kafka partition rebalances."
            },
            {
                title: "Latency Reduction in Streaming Tool Calls via Speculative Decoding",
                area: "Model Serving",
                notes: "Benchmarking sub-second tool dispatch on Azure AI Foundry and vLLM clusters."
            },
            {
                title: "A2A (Agent-to-Agent) Protocol Negotiation & Standardized Handshakes",
                area: "Multi-Agent Protocols",
                notes: "Investigating schema-governed inter-agent contracts to prevent state corruption across heterogeneous model providers."
            }
        ]
    },

    commandPaletteItems: [
        { id: "persona-recruiter", label: "Switch Persona: 👔 Recruiter View", category: "Persona Lens", icon: "user-check", action: "switch-persona", persona: "recruiter" },
        { id: "persona-manager", label: "Switch Persona: 💼 AI Manager View", category: "Persona Lens", icon: "briefcase", action: "switch-persona", persona: "manager" },
        { id: "persona-engineer", label: "Switch Persona: ⚡ AI Engineer View", category: "Persona Lens", icon: "cpu", action: "switch-persona", persona: "engineer" },
        { id: "hero", label: "Hero & Manifesto", category: "Jump to Section", icon: "terminal", action: "scroll", target: "hero" },
        { id: "recruiter", label: "Recruiter 60-Second Fast Track", category: "Jump to Section", icon: "zap", action: "scroll", target: "recruiter-snapshot" },
        { id: "pipeline", label: "How Systems Operate: Agentic Claim Pipeline", category: "Jump to Section", icon: "git-merge", action: "scroll", target: "pipeline" },
        { id: "timeline", label: "The Career Evolution (Allianz, Yash, Persistent)", category: "Jump to Section", icon: "clock", action: "scroll", target: "career-timeline" },
        { id: "case-study", label: "Flagship Case Study: Project Bluey", category: "Jump to Section", icon: "layers", action: "scroll", target: "case-study" },
        { id: "featured-systems", label: "Featured Enterprise Systems (Yash, Persistent, Lab)", category: "Jump to Section", icon: "folder-git-2", action: "scroll", target: "featured-systems" },
        { id: "philosophy", label: "Engineering Philosophy & The Lab", category: "Jump to Section", icon: "cpu", action: "scroll", target: "philosophy" },
        { id: "contact", label: "Frictionless Recruitment Footer", category: "Jump to Section", icon: "mail", action: "scroll", target: "contact" },
        { id: "resume", label: "Download Resume (PDF)", category: "Quick Actions", icon: "file-text", action: "download-resume" },
        { id: "toggle-dark-mode", label: "Toggle Dark Mode (Obsidian Scheme)", category: "Quick Actions", icon: "moon", action: "toggle-recruiter-mode" },
        { id: "copy-email", label: "Copy Email (shivraj.25d@gmail.com)", category: "Quick Actions", icon: "copy", action: "copy-email" },
        { id: "copy-phone", label: "Copy Phone (+91 7972476081)", category: "Quick Actions", icon: "phone", action: "copy-phone" },
        { id: "vcard", label: "Save Contact (vCard .vcf)", category: "Quick Actions", icon: "user-plus", action: "download-vcard" },
        { id: "github", label: "Visit GitHub Profile", category: "External Links", icon: "github", action: "open-link", url: "https://github.com/Shivraj-Dhaytadak" },
        { id: "linkedin", label: "Connect on LinkedIn", category: "External Links", icon: "linkedin", action: "open-link", url: "https://www.linkedin.com/in/shivraj-dhaytadak7" },
        { id: "simulator", label: "Launch Interactive Simulator", category: "External Links", icon: "external-link", action: "open-link", url: "workflow.html" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
