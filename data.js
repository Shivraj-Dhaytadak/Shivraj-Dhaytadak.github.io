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
        headline: "I architect production-grade multi-agent systems for regulated enterprises.",
        bio: "I'm Shivraj Dhaytadak — Agentic AI Consultant at Allianz Services. Dynamic AI Strategy Consultant with 4+ years of experience designing and deploying Gen AI solutions. Proven track record in optimizing workflows and reducing costs. Skilled in Context Engineering, RAG, and Agentic AI to automate complex enterprise workflows and generate high-quality outcomes.",
        location: "Pune, IN",
        status: "Open to High-Impact Agentic AI Roles & Strategic Consulting",
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

    canonicalMetrics: {
        claimsVolume: "100k+",
        activeJourneys: "18",
        rolloutSpeed: "< 24 Hours",
        velocityGain: "21x",
        releaseBaseline: "3 Weeks",
        complianceBreaches: "0 Breaches",
        privacyStandard: "APP 11",
        kafkaIngestion: "~2s",
        dataPullPhase: "~50s",
        inferencePhase: "60–100s",
        graphLatencyMedian: "< 120s",
        graphLatencyP95: "155s",
        microAgentsCount: "~10 Agents"
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
                id: "kpi-latency",
                value: "< 120s",
                number: 120,
                suffix: "s",
                label: "Median Completion",
                sublabel: "p95 Latency: 155s",
                icon: "clock",
                accent: "emerald",
                highlight: "2s Kafka + 50s Data Pulls + LLM inference"
            },
            {
                id: "kpi-deploy",
                value: "1 Day",
                number: 1,
                suffix: " Day",
                label: "Journey Rollout",
                sublabel: "Slashed from 3-week cycle",
                icon: "sparkles",
                accent: "indigo",
                highlight: "Zero-code redeploy declarative JSON"
            },
            {
                id: "kpi-journeys",
                value: "18",
                number: 18,
                suffix: "",
                label: "Claim Journeys",
                sublabel: "Runtime LangGraph Compilation",
                icon: "workflow",
                accent: "blue",
                highlight: "Assembled & compiled dynamically per claim"
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
                title: "Perimeter Guardrails Gate (Azure Content Safety)",
                description: "Screens unstructured free-field claim descriptions; outputs strict Pydantic APPROVED or REJECTED routing status.",
                icon: "shield-check"
            },
            {
                title: "LangChain Automated PII Redaction",
                description: "Strict compliance with Australia corporate privacy standards (APP 11) prior to data persistence.",
                icon: "lock"
            },
            {
                title: "Runtime Pydantic Schema-First Invariants",
                description: "Every agent node boundary enforces Pydantic schemas; zero corrupted state across LangGraph transitions.",
                icon: "check-circle"
            },
            {
                title: "Declarative JSON Engine (Runtime Compiled)",
                description: "Creates, assembles, and compiles LangGraph state graphs at runtime across 18 distinct claim journeys.",
                icon: "cpu"
            }
        ],
        proofPills: [
            "Python",
            "SQL (PostgreSQL, MySQL)",
            "MongoDB",
            "LangGraph",
            "LangChain",
            "CrewAI",
            "MCP",
            "A2A",
            "Context Engineering",
            "RAG",
            "Guardrails",
            "LangFuse",
            "Pydantic",
            "FastAPI",
            "vLLM",
            "PyTorch",
            "Hugging Face Transformers",
            "TRL (LoRA/QLoRA)",
            "Scikit-learn",
            "Azure AI Foundry",
            "Azure OpenAI (GPT-4o)",
            "Azure Durable Functions",
            "Apache Kafka",
            "Docker",
            "Pytest"
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
            stack: ["LangGraph", "Azure Durable Functions", "Azure OpenAI (GPT-4o)", "Apache Kafka", "Azure Event Hubs", "Azure Content Safety", "Pydantic", "Blob Storage"],
            metrics: [
                { label: "Median Latency", value: "< 120s" },
                { label: "p95 Latency", value: "155s" },
                { label: "Data Pull Phase", value: "~50s" },
                { label: "Kafka Ingest SLA", value: "~2s" }
            ],
            narrative: {
                challenge: "Legacy claim intake pipelines required 3 weeks of backend developer engineering, schema re-compilation, and CI/CD validation to alter a single business lodgement rule. Free-field text descriptions risked adversarial prompt injection, citizen PII leaks, and downstream state corruption under Australian regulatory frameworks.",
                solution: "Architected a Declarative JSON Workflow Engine covering 18 claim journeys that dynamically creates, assembles, and compiles LangGraph state graphs at runtime. Incoming Kafka payloads pass through an initial Guardrails gate (Azure Content Safety + LangChain PII redaction) with strict Pydantic categorical validation (APPROVED/REJECTED) before orchestrating ~50s of external data pulls (BOM, ICEYE, PDS Blob) and ~10 agents for LLM inference.",
                impact: "Slashed new claim journey launch time from 3 weeks to 1 day. Scaled pipeline to process 100k+ annual claims across 18 distinct automated journeys with < 120s median latency (p95 at 155s) and 100% compliance with Australia corporate privacy standards."
            },
            deliverables: [
                "<strong>[Guardrails Gate]</strong> Engineered a multi-layer Guardrails agent using Azure Content Safety to screen 100k+ annual claims, acting as an input gate on free-field claim descriptions and halting prompt injection attacks before downstream processing.",
                "<strong>[PII Compliance]</strong> Engineered a LangChain-based PII redaction middleware integrated with Azure Content Safety, automated data anonymization prior to persistence, and ensured 100% compliance with Australia corporate privacy standards across 100k+ annual insurance claim logs.",
                "<strong>[Declarative Engine]</strong> Architected a declarative JSON workflow engine covering 18 claim journeys to process 100k+ annual claims, creating and compiling LangGraph graphs dynamically at runtime, slashing journey onboarding from 3 weeks to 1 day without underlying codebase modifications.",
                "<strong>[Two-Tier Prompts]</strong> Designed a two-tier prompt architecture decoupling domain-general guidelines from claim-specific rules, eliminating 100% of prompt duplication while cutting agent configuration latency for 18 distinct claim journeys.",
                "<strong>[Runtime Pydantic Validation]</strong> Implemented comprehensive Pydantic classes to handle output validations and LangGraph state, enforcing strict categorical outputs (e.g. guardrails routing: approved/rejected) to eliminate downstream type issues caused by LLM non-determinism."
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
                "<strong>FastAPI Endpoints:</strong> Engineered a high-performance FastAPI endpoint integrating a Text-to-SQL graph, enabling seamless natural language query translation to structured SQL, accelerating data retrieval by 40%.",
                "<strong>Hybrid Memory:</strong> Architected a custom hybrid memory framework (short-term & long-term) for chat sessions, enhancing contextual retention and summarization, boosting query accuracy by 35% and improving SQL success rate scores by 25%.",
                "<strong>Impact:</strong> Achieved 80% reduction in manual SQL effort and 35% higher response precision, streamlining analytics workflows and decision-making.",
                "<strong>Multi-Agent:</strong> Built a multi-agent workflow using CrewAI & Google Gemini 2.5 models to support code generation and review across multiple programming languages."
            ]
        },
        {
            act: "Act I",
            id: "persistentsystems",
            period: "Aug 2022 – May 2025",
            company: "Persistent Systems",
            role: "Senior Software Engineer (Gen AI)",
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
                "<strong>Model Serving:</strong> Implemented high-performance model-serving endpoints using FastAPI, reducing response latency by 50% & reliable delivery for AI/ML applications.",
                "<strong>Automation:</strong> Created and executed automation scripts to replace repetitive tasks, enhancing precision in data retrieval by 35% and boosting productivity by 25% for product development initiatives.",
                "<strong>Codebase RAG:</strong> Developed an internal RAG codebase assistant leveraging LangChain and vector embeddings, reducing developer onboarding documentation lookup time by 40% across engineering teams.",
                "<strong>RAG Enhancement:</strong> Enhanced LLM inference with RAG by leveraging document chunking, embedding optimization, and similarity search, improving response relevancy by 40%.",
                "<strong>RAG Optimization:</strong> Optimized RAG workflow by fine-tuning embeddings and retrieval strategies, reducing latency by 30% and enhancing answer relevance.",
                "<strong>Dataset Curation:</strong> Architected a data curation framework to aggregate and process datasets from multiple sources, enabling 40% faster data integration to fine-tune LLMs, and improving processing accuracy by 30%."
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
            { label: "Rollout Velocity", from: "3 Weeks", to: "< 24 Hours", change: "95% Reduction" },
            { label: "Annual Volume", value: "100,000+", sub: "Screened Claims" },
            { label: "Claim Journeys", value: "18", sub: "Runtime Compiled Graphs" },
            { label: "Median Latency", value: "< 120s", sub: "p95 at 155s End-to-End" }
        ],
        starNarrative: {
            situation: "Insurance claim lodgement is a high-stakes, legally audited domain governed by Australian corporate privacy standards (APP 11). Historically, adding or modifying a claim journey required 3 weeks of backend developer engineering, schema re-compilations, and full CI/CD deployment cycles. Meanwhile, free-field text descriptions and claim intake forms exposed systems to adversarial prompt injection, citizen PII leakage, and stochastic LLM state drift.",
            task: "Engineer a production-grade multi-agent architecture that enables non-developer prompt engineers to ship new claim journeys in under 24 hours without backend binary redeployments, while guaranteeing strict perimeter safety on free-field text, deterministic Pydantic schema validation at every node boundary, and < 120s median end-to-end processing across 18 distinct claim journeys.",
            action: [
                "Runtime-Compiled Declarative JSON Engine: Architected an engine that inspects incoming claim categories across 18 claim journeys, dynamically creates and assembles the required LangGraph state graph, and compiles it at runtime without codebase modifications.",
                "Perimeter Guardrails Gate: Incoming Kafka streams pass directly to Azure Content Safety and LangChain PII redaction middleware. The Guardrails Agent acts as a strict gate on free-field claim descriptions, returning Pydantic-validated categorical routing: APPROVED or REJECTED. Unsafe payloads are halted immediately with 0 tokens wasted.",
                "Decoupled Data Pulls & Distributed Orchestration: Coordinates external data retrieval (~50s across BOM weather, ICEYE flood radar, power outage feeds, and Azure Blob PDS documents) and long-running state machines via Azure Durable Functions.",
                "Runtime Pydantic Node Invariants: Every transition across ~10 micro-agents enforces strict Pydantic schemas, eliminating state drift and ensuring deterministic routing."
            ],
            result: "Slashed claim journey deployment cycles from 3 weeks to 1 day. The engine processes 100,000+ annual claims across 18 production journeys with a median completion latency under 120s (p95 at 155s: ~2s Kafka ingest, ~50s data pulls, and ~60–100s LLM inference across ~10 agents on Azure OpenAI GPT-4o), with 0 privacy breaches and 100% APP 11 compliance.",
            postMortem: {
                tradeoff: "External data pulls (~50s for BOM weather, ICEYE radar, and PDS documents) dominated wall-clock time over local computation. We optimized this by parallelizing asynchronous activity pulls in Azure Durable Functions and maintaining policy disclosure documents in hot Azure Blob Storage.",
                takeaway: "Enforcing strict runtime Pydantic validation (such as Guardrails routing restricted to APPROVED or REJECTED) is 10x more reliable than attempting post-hoc error recovery on unconstrained LLM outputs."
            }
        },
        topologyNodes: [
            {
                id: "kafka_ingest",
                label: "Managed Kafka & Event Hubs",
                category: "Event Streaming",
                tech: "Apache Kafka / Azure Event Hubs",
                badge: "High Throughput",
                description: "Ingests raw insurance claim submissions from external APIs and policyholder portals with partition buffering and exactly-once delivery.",
                payloadSample: `{
  "eventId": "evt_99841_aus_motor",
  "topic": "allianz.claims.lodgement.inbound",
  "timestamp": "2026-09-08T05:45:00Z",
  "rawPayload": {
    "policyNumber": "POL-AU-883921",
    "incidentDate": "2026-09-07",
    "driverNarrative": "Hail damage to windscreen and roof during storm...",
    "estimatedDamage": 4200.00
  }
}`,
                sla: "~2s ingestion & partitioning SLA",
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
    "Activity1_KafkaPayloadValidation",
    "Activity2_PerimeterGuardrailInspection",
    "Activity3_DataPullsAndEnrichment",
    "Activity4_LangGraphStateExecution"
  ],
  "durableCheckpoints": 4
}`,
                sla: "Zero state loss across retries",
                invariant: "Idempotent step execution"
            },
            {
                id: "guardrails",
                label: "Perimeter Guardrails Gate",
                category: "AI Safety & Compliance",
                tech: "Azure Content Safety + LangChain PII",
                badge: "APP 11 Compliant",
                description: "Screens unstructured free-field claim descriptions for prompt injection and toxic payloads; executes PII redaction. Strictly returns Pydantic status: APPROVED or REJECTED.",
                payloadSample: `{
  "injectionCheck": { "flagged": false, "confidence": 0.999 },
  "piiRedaction": {
    "driverName": "[REDACTED_NAME]",
    "licenseNumber": "[REDACTED_DL_AU]",
    "phone": "[REDACTED_TEL]"
  },
  "guardrailRouting": "APPROVED",
  "complianceStatus": "APP_11_COMPLIANT"
}`,
                sla: "Perimeter gate: halts malicious inputs before LLM transit",
                invariant: "Zero raw PII or unvalidated payloads"
            },
            {
                id: "langgraph_engine",
                label: "Runtime-Compiled LangGraph Engine",
                category: "Agentic Reasoning",
                tech: "LangGraph + Azure OpenAI (GPT-4o)",
                badge: "18 Claim Journeys",
                description: "JSON declarative engine dynamically creates, assembles, and compiles tailored LangGraph topologies at runtime across ~10 agents per claim category.",
                payloadSample: `{
  "journeyId": "motor_storm_damage_claim_v4",
  "compiledGraphNodes": 10,
  "currentNode": "damage_assessment_agent",
  "pydanticValidation": "PASS",
  "stateSchema": {
    "guardrailStatus": "APPROVED",
    "coverageValid": true,
    "weatherConfirmed": true,
    "excessAmount": 650.00,
    "fraudScore": 0.02,
    "autoApprovalEligible": true
  }
}`,
                sla: "Median < 120s | p95 155s total completion",
                invariant: "Runtime Pydantic schema validation at each node"
            },
            {
                id: "data_enrichment",
                label: "Data Pulls & External Feeds (BOM / ICEYE / PDS)",
                category: "Data Enrichment",
                tech: "Azure Blob (PDS) + BOM Weather + ICEYE Satellite",
                badge: "Data Enrichment Phase",
                description: "Fetches real-time weather alerts from BOM Australia, satellite radar from ICEYE, power outage telemetry, and policy PDS disclosure clauses from Azure Blob.",
                payloadSample: `{
  "bomWeatherVerified": true,
  "hailWarningSeverity": "SEVERE",
  "iceyeFloodRadarMatch": false,
  "pdsDocumentVersion": "2026.1_AUS_REG",
  "dataPullLatencySec": 48.6
}`,
                sla: "~50s cumulative data retrieval phase",
                invariant: "Immutable third-party evidentiary verification"
            },
            {
                id: "observability",
                label: "Dual-Emit Observability Engine",
                category: "Telemetry & APM",
                tech: "LangFuse + Azure Application Insights / Dynatrace",
                badge: "Distributed Tracing",
                description: "Streams high-fidelity distributed traces measuring Kafka ingest latency (~2s), data pull duration (~50s), and LLM token inference (~60-100s) across ~10 agents.",
                payloadSample: `{
  "traceId": "00-4bf92f3577b34da6a3ce929d0e0e4736",
  "metrics": {
    "totalDurationSec": 114.2,
    "kafkaIngestSec": 2.1,
    "dataPullsSec": 49.3,
    "llmInferenceSec": 62.8,
    "guardrailsDecision": "APPROVED"
  }
}`,
                sla: "Real-time alert dispatch & audit trace replay",
                invariant: "Complete auditability of every decision"
            }
        ],
        codeTabs: [
            {
                id: "schema_tab",
                label: "Declarative JSON Engine",
                fileName: "storm_damage_claim_journey.json",
                language: "json",
                description: "Production declarative JSON schema defining a claim journey. Assembled and compiled by the runtime engine without backend redeployment.",
                code: `{
  "$schema": "https://allianz.internal/schemas/agentic_journey_v4.json",
  "journeyId": "motor_storm_damage_claim_v4",
  "description": "Runtime-compiled storm damage lodgement across ~10 agents",
  "entryNode": "guardrails_gate",
  "stateSchema": "ClaimStateSchema",
  "catalogJourney": "18_Production_Journeys",
  "nodes": [
    {
      "id": "guardrails_gate",
      "agent": "GuardrailsSafetyAgent",
      "pydanticModel": "GuardrailValidationResult",
      "routes": {
        "APPROVED": "weather_and_coverage_pull",
        "REJECTED": "halt_security_escalation"
      }
    },
    {
      "id": "weather_and_coverage_pull",
      "agent": "DataPullCoordinator",
      "feeds": ["BOM_Weather", "ICEYE_Satellite", "Blob_PDS_Docs"],
      "routes": { "ready": "triage_and_reserve_evaluator" }
    },
    {
      "id": "triage_and_reserve_evaluator",
      "agent": "TriageReserveAgent",
      "autoApproveThreshold": 5000.00,
      "routes": {
        "autoSettle": "dispatch_settlement_payout",
        "investigate": "investigation_triage_queue"
      }
    }
  ]
}`
            },
            {
                id: "langgraph_tab",
                label: "Runtime LangGraph Engine (Python)",
                fileName: "runtime_graph_engine.py",
                language: "python",
                description: "Runtime Python execution engine creating, assembling, and compiling LangGraph graphs on the fly with strict Pydantic validation.",
                code: `from typing import Literal, Dict, Any, List
from pydantic import BaseModel, Field, ValidationError
from langgraph.graph import StateGraph, START, END

class ClaimStateSchema(BaseModel):
    """Strict runtime Pydantic schema enforcing categorical state across ~10 agents"""
    claim_id: str
    claim_type: str
    guardrail_status: Literal["APPROVED", "REJECTED"]
    coverage_verified: bool = False
    weather_validated: bool = False
    fraud_risk_score: float = Field(ge=0.0, le=1.0, default=0.0)
    settlement_reserve: float = Field(default=0.0)
    triage_route: Literal["AUTO_SETTLE", "FAST_TRACK", "MANUAL_ASSESSOR"] = "FAST_TRACK"
    decision_history: List[str] = Field(default_factory=list)

class DeclarativeRuntimeEngine:
    """Creates, assembles, and compiles LangGraph graphs at runtime for 18 claim journeys"""
    def __init__(self, journey_spec: dict):
        self.spec = journey_spec
        self.graph = StateGraph(ClaimStateSchema)
        self.compiled_workflow = self._assemble_and_compile()

    def _assemble_and_compile(self):
        # 1. Dynamically instantiate ~10 agent nodes defined in declarative JSON
        for node in self.spec["nodes"]:
            self.graph.add_node(node["id"], self._make_node_handler(node))

        # 2. Wire conditional routing and entry boundaries
        self.graph.add_edge(START, self.spec["entryNode"])
        for source, routes in self.spec.get("conditionalEdges", {}).items():
            self.graph.add_conditional_edges(source, self._route_selector(routes))

        # 3. Compile LangGraph state graph at runtime
        return self.graph.compile()

    def _make_node_handler(self, node_spec: dict):
        async def node_handler(state: ClaimStateSchema):
            state.decision_history.append(f"executed:{node_spec['id']}")
            return state
        return node_handler`
            },
            {
                id: "guardrails_tab",
                label: "Perimeter Safety Gate & Pydantic Validation",
                fileName: "perimeter_guardrail_gate.py",
                language: "python",
                description: "Perimeter guardrail screening free-field descriptions and returning strict Pydantic categorical routing (APPROVED / REJECTED).",
                code: `from typing import Literal
from pydantic import BaseModel, Field
from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
from langchain_community.document_transformers import RedactionTransformer

class GuardrailValidationResult(BaseModel):
    """Strict Pydantic schema enforcing categorical gate status"""
    status: Literal["APPROVED", "REJECTED"]
    reason: str
    sanitized_description: str | None = None
    injection_detected: bool = False
    pii_redacted: bool = False

class PerimeterClaimSafetyGate:
    """Perimeter guardrail screening free-field claim descriptions"""
    def __init__(self, endpoint: str, api_key: str):
        self.client = ContentSafetyClient(endpoint, AzureKeyCredential(api_key))
        self.pii_redactor = RedactionTransformer()

    async def screen_free_text(self, raw_description: str) -> GuardrailValidationResult:
        # Step 1: Detect prompt injection / malicious payloads in free text
        analysis = await self.client.analyze_text_async(text=raw_description)
        if analysis.is_flagged:
            return GuardrailValidationResult(
                status="REJECTED",
                reason="Malicious prompt injection or unsafe content halted at gate",
                injection_detected=True
            )

        # Step 2: Redact citizen PII before downstream transit (APP 11 compliance)
        sanitized = self.pii_redactor.transform_text(raw_description)
        return GuardrailValidationResult(
            status="APPROVED",
            reason="Payload verified and sanitized",
            sanitized_description=sanitized,
            pii_redacted=True
        )`
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
                description: "Every agent node transition, prompt template version, tool invocation parameter, and external API result must produce an immutable audit log. Dual-emit observability via Azure Application Insights and LangFuse enables forensic isolation within seconds."
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
        { id: "case-study", label: "Flagship Case Study: Allianz Claims Lodgement Engine", category: "Jump to Section", icon: "layers", action: "scroll", target: "case-study" },
        { id: "capabilities", label: "Contextual Capabilities Matrix: 4 Architecture Domains", category: "Jump to Section", icon: "cpu", action: "scroll", target: "capabilities" },
        { id: "featured-systems", label: "Featured Systems: FlowIQ, SASVA & Research Lab", category: "Jump to Section", icon: "folder-git-2", action: "scroll", target: "featured-systems" },
        { id: "pipeline", label: "Interactive Simulator: Claims Triage Graph", category: "Jump to Section", icon: "git-merge", action: "scroll", target: "pipeline" },
        { id: "timeline", label: "Work Experience: Allianz, Yash, Persistent", category: "Jump to Section", icon: "clock", action: "scroll", target: "career-timeline" },
        { id: "philosophy", label: "Engineering Principles & About Shivraj", category: "Jump to Section", icon: "compass", action: "scroll", target: "philosophy" },
        { id: "contact", label: "Get in Touch & Contact Channels", category: "Jump to Section", icon: "mail", action: "scroll", target: "contact" },
        { id: "resume", label: "Download Resume (PDF)", category: "Quick Actions", icon: "file-text", action: "download-resume" },
        { id: "toggle-dark-mode", label: "Toggle Dark / Light Mode", category: "Quick Actions", icon: "moon", action: "toggle-recruiter-mode" },
        { id: "copy-email", label: "Copy Email (shivraj.25d@gmail.com)", category: "Quick Actions", icon: "copy", action: "copy-email" },
        { id: "copy-phone", label: "Copy Phone (+91 7972476081)", category: "Quick Actions", icon: "phone", action: "copy-phone" },
        { id: "vcard", label: "Save Contact (vCard .vcf)", category: "Quick Actions", icon: "user-plus", action: "download-vcard" },
        { id: "simulator", label: "Launch Topology Simulator (New Tab)", category: "External Tools", icon: "external-link", action: "open-link", url: "workflow.html" },
        { id: "github", label: "Visit GitHub Profile", category: "External Links", icon: "github", action: "open-link", url: "https://github.com/Shivraj-Dhaytadak" },
        { id: "linkedin", label: "Connect on LinkedIn", category: "External Links", icon: "linkedin", action: "open-link", url: "https://www.linkedin.com/in/shivraj-dhaytadak7" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
