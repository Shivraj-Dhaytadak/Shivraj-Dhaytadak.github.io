/**
 * Shivraj Dhaytadak - Portfolio Data Model
 * Complete structured data covering profile, employer tenures, verified metrics,
 * technical blueprints, code specifications, production moats, and skill baselines.
 */

const portfolioData = {
    profile: {
        name: "Shivraj Dhaytadak",
        role: "Agentic AI Consultant",
        subRole: "Agentic AI Consultant @ Allianz Services",
        location: "Pune, IN",
        email: "shivraj.25d@gmail.com",
        phone: "+91 7972476081",
        github: "https://github.com/Shivraj-Dhaytadak",
        linkedin: "https://www.linkedin.com/in/shivraj-dhaytadak7",
        relocation: "Open to Relocation"
    },
    companies: [
        {
            id: "allianz",
            name: "Allianz Services",
            type: "Insurance GCC / Captive",
            targetRole: "Agentic AI Consultant",
            duration: "Jan 2026 - Present",
            mappedProject: "bluey_ai_lodgement",
            metrics: [
                { label: "Claims Volume", value: "100k+", sub: "Annual Pipeline", icon: "zap", color: "amber" },
                { label: "Agent Core", value: "145+", sub: "Micro-Agents in Prod", icon: "bot", color: "indigo" },
                { label: "Deploy Speed", value: "1 Day", sub: "New Journey Launch", icon: "sparkles", color: "emerald" },
                { label: "Workflows", value: "19", sub: "Automated Journeys", icon: "workflow", color: "blue" },
                { label: "GCC Honors", value: "Q1 & Q2", sub: "Best Performer & Team", icon: "award", color: "purple" }
            ],
            moats: [
                "Multi-Layer Guardrails Agent & Azure Content Safety (Halts Injection Attacks)",
                "LangChain PII Redaction Middleware (100% Australia Privacy Compliance)",
                "Declarative JSON Workflow Engine (19 Claim Journeys Managed Directly)",
                "Two-Tier Decoupled Prompt Architecture (100% Duplication Eliminated)",
                "Runtime Node Validation (LangGraph State Synchronized with Pydantic)"
            ],
            baselines: [
                "Azure AI Foundry (GPT-5.4 mini)",
                "Azure Content Safety & LangChain PII",
                "Managed Kafka & Event Hubs",
                "Azure Durable Function Apps",
                "Blob Storage Hot Caching"
            ],
            blueprint: {
                title: "Project Bluey-AI Lodgement Topology",
                image: "ProjectBluey.png",
                interactiveUrl: "workflow.html",
                registry: "Azure-Durable-LangGraph-Pipeline",
                overview: "An Event Driven Multi-Agent Insurance Claims processing system built with Langgraph, Langchain, and Azure OpenAI (Azure AI Foundry) at its core, with Dual-Emit Observability via Dynatrace & Azure Application Insights.",
                specs: [
                    { icon: "workflow", label: "Orchestration", desc: "Azure Durable Functions App orchestrating input validations, multi-agent pipeline, and output gates." },
                    { icon: "shield-alert", label: "Safety & Privacy", desc: "Multi-layer Azure Content Safety guardrails screening 100k+ annual claims with LangChain PII redaction." },
                    { icon: "cpu", label: "Inference Core", desc: "Federated micro-agent array driven under unified Foundry GPT-5.4 mini backends." },
                    { icon: "bot", label: "Agentic Core", desc: "Robust LangGraph topology orchestrating 145+ specialized micro-agents across 19 claim types." },
                    { icon: "database", label: "PDS Layer", desc: "Hot caching arrays optimized via dedicated Blob Storage structures to shield redundant disclosures." },
                    { icon: "activity", label: "Observability", desc: "Distributed Application Insights & Dynatrace traces measuring throughput, latency, and schema hit-rates." }
                ]
            }
        },
        {
            id: "yashtechnologies",
            name: "Yash Technologies",
            type: "Consultancy",
            targetRole: "Data Scientist (Gen AI)",
            duration: "May 2025 - Jan 2026",
            mappedProject: "project_FlowIQ",
            metrics: [
                { label: "SQL Effort", value: "80%", sub: "Manual Cut", icon: "sparkles", color: "emerald" },
                { label: "Accuracy Lift", value: "+35%", sub: "Query Precision", icon: "target", color: "indigo" },
                { label: "Query Speed", value: "40%", sub: "Faster Retrieval", icon: "gauge", color: "blue" },
                { label: "Schema Success", value: "+25%", sub: "Execution Rate", icon: "database", color: "amber" },
                { label: "Distinction", value: "Top Asset", sub: "Individual Honor", icon: "award", color: "purple" }
            ],
            moats: [
                "Hybrid Session Memory Matrix (Short-Term & Long-Term Schema Recall)",
                "Dynamic Database Schema Sharding (Zero Schema-Lookup Lockups)",
                "Multi-Agent CrewAI Code Generation & Cross-Dialect SQL Cleansing Chains",
                "80% Reduction in Manual Analytics Development Effort",
                "Deterministic AST Parsers for Zero Schema Leakage"
            ],
            baselines: [
                "FastAPI Async Engine",
                "Google Gemini 2.5 Models",
                "CrewAI Multi-Agent Framework",
                "PostgreSQL & Azure SQL",
                "SQLAlchemy ORM & AST Verification"
            ],
            blueprint: {
                title: "Project FlowIQ Text-to-SQL Graph Matrix",
                image: "",
                registry: "FastAPI-CrewAI-Gemini-Memory-Pipeline",
                overview: "A high-performance Text-to-SQL Graph Matrix combining short & long-term session memory engines to autonomously translate natural language questions into certified operational queries.",
                specs: [
                    { icon: "workflow", label: "API Gateway", desc: "FastAPI high-throughput asynchronous router handling natural language queries with sub-second response times." },
                    { icon: "cpu", label: "Multi-Agent Crew", desc: "CrewAI agent team paired with Google Gemini 2.5 for schema resolution, query synthesis, and cross-dialect verification." },
                    { icon: "database", label: "Memory Framework", desc: "Custom hybrid short-term chat context buffer and persistent schema definition repository boosting accuracy by 35%." },
                    { icon: "shield-check", label: "SQL Guardrails", desc: "Deterministic AST parser verifying syntactic and access-control boundaries before execution." }
                ]
            }
        },
        {
            id: "persistentsystems",
            name: "Persistent Systems",
            type: "IT Products & Services",
            targetRole: "Senior Software Engineer (Gen AI)",
            duration: "Aug 2022 - May 2025",
            mappedProject: "sasva",
            metrics: [
                { label: "Serving Latency", value: "-50%", sub: "vLLM & FastAPI", icon: "gauge", color: "blue" },
                { label: "RAG Relevance", value: "+40%", sub: "Context Relevancy", icon: "cpu", color: "indigo" },
                { label: "Dev Output", value: "+25%", sub: "Output Accelerated", icon: "zap", color: "amber" },
                { label: "Precision", value: "+35%", sub: "Extraction Gain", icon: "target", color: "emerald" },
                { label: "Recognition", value: "2x Awards", sub: "High Five & Bravo", icon: "award", color: "purple" }
            ],
            moats: [
                "Multi-Source LLM Data Curation Framework (40% Faster Dataset Integration)",
                "Internal RAG Codebase Assistant (-40% Onboarding Lookup Time)",
                "FastAPI & vLLM High-Throughput Serving (-50% Latency Reduction)",
                "AST Codebase Hierarchy Traversal & Multi-Vector Caching",
                "Fine-Tuned Embeddings & Retrieval Strategies (-30% Query Latency)"
            ],
            baselines: [
                "AWS Bedrock & SageMaker",
                "vLLM & FastAPI Distributed Serving",
                "TRL & LoRA/QLoRA Curation",
                "LangChain RAG Orchestration",
                "Docker Containerization & CI/CD"
            ],
            blueprint: {
                title: "Project SASVA Codebase Knowledge Graph & RAG Core",
                image: "",
                registry: "AWS-Bedrock-vLLM-Codebase-RAG",
                overview: "An enterprise semantic acceleration layer indexing complex multi-repo source code patterns into dense structural vector representations, providing real-time developer context and code navigation.",
                specs: [
                    { icon: "workflow", label: "Serving Layer", desc: "High-performance model-serving endpoints using FastAPI and vLLM reducing response latency by 50%." },
                    { icon: "cpu", label: "Embedding Engine", desc: "Fine-tuned local vLLM embedding service batching source-tree AST chunks into high-density vector coordinates." },
                    { icon: "database", label: "Semantic Index", desc: "Persistent vector store synchronizing with git change listener hooks to avoid redundant recalculations." },
                    { icon: "layers", label: "Curation Framework", desc: "Multi-source dataset aggregation and preprocessing pipeline accelerating LLM fine-tuning by 40%." },
                    { icon: "activity", label: "RAG Orchestration", desc: "LangChain contextual retriever feeding optimized source snippets to AWS Bedrock foundation models." }
                ]
            }
        }
    ],
    projects: {
        bluey_ai_lodgement: {
            name: "Project Bluey-AI Lodgement",
            impact: "Production architecture serving automated insurance lodgement pipelines. Built as an enterprise-grade agentic workflow optimized for high-throughput messaging structures and deterministic business constraints.",
            stack: ["LangGraph", "Azure Function App", "Blob Storage", "Managed Kafka", "Service Bus", "Event Hubs", "Pydantic", "Application Insights", "Foundry GPT-5.4 mini", "Azure Content Safety"],
            tabs: {
                orchestration: {
                    title: "Multi-Agent Orchestration Flow",
                    description: "Visualizes state validation, parallel valuation, tool selection, and routing within the LangGraph Multi-Agent loop.",
                    visualType: "flow-allianz",
                    specTitle: "LangGraph State Machine & Multi-Agent Topologies",
                    code: `from typing import Annotated, Sequence, Dict, Any\nfrom typing_extensions import TypedDict\nfrom pydantic import BaseModel, Field\nfrom langgraph.graph import StateGraph, START, END\n\n# Enterprise State Definition matching production blueprint specs\nclass AgenticGraphState(TypedDict):\n    claim_id: str\n    payload_standardized: bool\n    validation_passed: bool\n    coverage_matched: bool\n    fraud_metrics: Dict[str, Any]\n    weather_risk_score: float\n    payment_reserve_exposure: float\n    routing_history: list[str]\n\n# Dynamic Two-Tier Supervisor Prompt Router Implementation\ndef supervisor_guardrail_node(state: AgenticGraphState):\n    """Evaluates inbound parameters using Pydantic Validation Schemes"""\n    if not state.get("validation_passed"):\n        return {"next": "Guardrails"}\n    if not state.get("coverage_matched"):\n        return {"next": "Coverage"}\n    return {"next": "Triage"}`,
                    bullets: [
                        "Designed and implemented a declarative JSON Workflow system covering 19 claim journeys.",
                        "Enables a 100k+ Claims per year workflow to be routed and processed without any code changes per claim type.",
                        "New Claim journeys can be on-boarded with just a single JSON file, reducing time to ship from 3 weeks to just 1 day.",
                        "Implemented a Two-tier prompt architecture that lets every claim type have custom rules alongside a Generalized rule per agent.",
                        "Eliminated 100% of prompt duplication while cutting agent configuration latency for 19 distinct claim journeys."
                    ],
                    tradeoffs: "Utilizing a centralized Orchestrator pattern introduces a slight processing hop overhead, but provides bulletproof transaction tracing and isolation boundaries for highly audited corporate workflows.",
                    bottlenecks: "Addressed LLM non-determinism by injecting custom runtime validation layers directly into every individual micro-agent interface boundary."
                },
                vector: {
                    title: "Data Ingestion & Event Fabric",
                    description: "Asynchronous stream architecture handling incoming event telemetry, raw payloads, and persistent storage routing.",
                    visualType: "vector-allianz",
                    specTitle: "Managed Event Fabrics & Stream Ingestion",
                    code: `# Ingestion Layer Processing - Managed Kafka & Azure Event Hubs Stream\nasync def process_kafka_stream_payload(event: KafkaEvent) -> StandardizedPayload:\n    raw_bytes = event.value()\n    parsed_json = external_parser_service(raw_bytes)\n    \n    # Map incoming telemetry straight to Azure Function Activity 1 Processing\n    standardized = StandardizedPayload(\n        claim_id=parsed_json['id'],\n        metadata=parsed_json['meta'],\n        timestamp=parsed_json['ts']\n    )\n    return standardized`,
                    bullets: [
                        "Architected an end-to-end data integration system stream parsing from Managed Kafka and Event Hubs into Activity 1 Ingestion Layers.",
                        "Enforces payload standardization upstream prior to pushing execution parameters down into long-running Azure Durable Function App states.",
                        "Integrates seamlessly with PDS caching storage strategies leveraging high-density cloud blobs for persistent downstream retrieval.",
                        "Shields downstream reasoning agents from malformed schemas through upfront contract validation at the event boundary."
                    ],
                    tradeoffs: "Upfront schema enforcement at the Kafka pipeline edge drops malformed claims early, decreasing downstream computing waste while requiring strict contract management.",
                    bottlenecks: "Implemented asynchronous retry queues inside Azure Function apps to protect against downstream model gateway rate constraints."
                },
                guardrails: {
                    title: "Production Guardrails & PII Redaction",
                    description: "Azure Content Safety multi-layer screening, LangChain PII redaction middleware, and runtime Pydantic boundary guards.",
                    visualType: "guardrails-allianz",
                    specTitle: "Azure Content Safety, PII Redaction & Pydantic Validation",
                    code: `from pydantic import BaseModel, Field\nfrom azure.ai.contentsafety import ContentSafetyClient\n\n# Multi-Layer Azure Content Safety & LangChain PII Redaction Middleware\nclass ClaimsSecurityGuardrail:\n    """Halts malicious payloads & anonymizes PII for 100k+ annual claims"""\n    def __init__(self, client: ContentSafetyClient):\n        self.safety_client = client\n\n    async def validate_and_redact(self, raw_payload: str) -> dict:\n        # Halt prompt injections & malicious payloads instantly\n        safety_eval = await self.safety_client.analyze_text_async(raw_payload)\n        if safety_eval.is_flagged:\n            return {"status": "HALTED", "reason": "Prompt Injection / Malicious Payload"}\n        \n        # Redact PII (100% compliance with Australian Corporate Privacy Standards)\n        sanitized_doc = langchain_pii_anonymizer.transform(raw_payload)\n        return {"status": "PASSED", "sanitized_payload": sanitized_doc}`,
                    bullets: [
                        "Engineered a multi-layer Guardrails agent using Azure Content Safety to screen 100k+ annual claims, instantly halting malicious payloads and eliminating prompt injection vulnerabilities.",
                        "Engineered a LangChain-based PII redaction middleware integrated with Azure Content Safety, automated data anonymization prior to persistence, ensuring 100% compliance with Australian corporate privacy standards.",
                        "Implemented comprehensive Pydantic classes to handle output validations and LangGraph state, with validations included in each agent node at runtime, eliminating downstream type issues caused by LLM non-determinism.",
                        "Tracks critical production metrics: ingestion throughput, agent latency, model inference duration, coverage cache hit rate, and distributed Application Insights & Dynatrace traces."
                    ],
                    tradeoffs: "Comprehensive run-time validation and PII redaction adds a few milliseconds to single node execution intervals but guarantees full regulatory compliance and elimination of injection vulnerabilities.",
                    bottlenecks: "Enabled distributed transaction trace tracking across long-lived asynchronous processes to allow developers to rapidly isolate latency anomalies."
                }
            }
        },
        project_FlowIQ: {
            name: "Project FlowIQ: Text-to-SQL Graph Matrix",
            impact: "High-performance enterprise analytics interface translating natural language expressions into structured operational queries securely.",
            stack: ["FastAPI", "LangGraph", "CrewAI", "Gemini 2.5", "SQLAlchemy", "PostgreSQL", "Azure SQL", "sqlglot"],
            tabs: {
                orchestration: {
                    title: "Natural Language SQL Generation Flow",
                    description: "Text-to-SQL graph execution workflow designed with deep hybrid session state engines.",
                    visualType: "flow-sql",
                    specTitle: "Dynamic Context Retention & High-Speed Retrieval",
                    code: `# High-Performance FastAPI Text-to-SQL Graph Endpoint (+40% Retrieval Speedup)\n@app.post("/v1/query/sql")\nasync def translate_natural_query(query_req: QueryRequest):\n    # Custom Hybrid Memory: Short-Term Session Context + Long-Term Schema Recall\n    chat_context = await hybrid_memory.get_context(query_req.session_id)\n    \n    # Synthesize SQL query via Google Gemini 2.5\n    generated_query = await gemini_client.synthesize_query(\n        prompt=query_req.natural_prompt,\n        context=chat_context\n    )\n    return {"sql": generated_query, "latency_ms": 185}`,
                    bullets: [
                        "Engineered a high-performance FastAPI endpoint integrating a Text-to-SQL graph, enabling seamless natural language query translation to structured SQL, accelerating data retrieval by 40%.",
                        "Architected a custom hybrid memory framework (short-term & long-term) for chat sessions, enhancing contextual retention and summarization, boosting query accuracy by 35% and improving SQL success rate scores by 25%.",
                        "Achieved 80% reduction in manual SQL effort and 35% higher response precision, streamlining analytics workflows and decision-making.",
                        "Sharded database metadata catalogs into memory spaces to isolate schema lookup lockups entirely during high-concurrency analytical queries."
                    ],
                    tradeoffs: "Short-term loop state management tracks structural schema updates perfectly but updates memory cache profiles with elevated frequency layouts.",
                    bottlenecks: "Sharded database metadata catalogs into memory spaces to isolate schema lookup lockups entirely during execution tasks."
                },
                crew_review: {
                    title: "Multi-Agent Code Review & Verification",
                    description: "CrewAI agent team paired with Google Gemini 2.5 for schema resolution, query synthesis, and cross-dialect verification.",
                    visualType: "flow-sql",
                    specTitle: "CrewAI Multi-Agent Team & SQL Dialect Parser",
                    code: `from crewai import Agent, Task, Crew\nimport sqlglot\n\n# Multi-Agent Workflow using CrewAI & Google Gemini 2.5\nsql_auditor = Agent(\n    role="Database Verification Specialist",\n    goal="Ensure SQL adheres strictly to target dialect (Postgres / Azure SQL)",\n    backstory="Enforces syntactic boundaries, prevents schema leaks, and tunes cost.",\n    llm="gemini/gemini-2.5-flash"\n)\n\ndef verify_and_clean_query(sql_text: str, target_dialect: str = "postgres") -> str:\n    """Deterministic AST parser checking access controls & eliminating malformed SQL"""\n    parsed = sqlglot.parse_one(sql_text, read=target_dialect)\n    return parsed.sql(target_dialect)`,
                    bullets: [
                        "Built a multi-agent workflow using CrewAI & Google Gemini 2.5 models to support code generation and review across multiple programming languages.",
                        "Achieved 80% reduction in manual SQL effort and 35% higher response precision, streamlining analytics workflows and decision-making.",
                        "Engineered deterministic AST verification rules ensuring zero schema leakage and cross-dialect query safety across PostgreSQL and Azure SQL.",
                        "Dynamic database schema sharding into memory buffers prevents schema lookup lockups during high-concurrency execution."
                    ],
                    tradeoffs: "Multi-agent review pass adds an extra evaluation hop of ~120ms, but guarantees 100% syntactically valid and certified SQL queries.",
                    bottlenecks: "Cached verified query plans in Redis short-term store to bypass LLM generation passes for recurring semantic patterns."
                }
            }
        },
        sasva: {
            name: "Project SASVA: Codebase Knowledge Graph & RAG Core",
            impact: "Context-aware developer acceleration layer processing source code patterns via optimized semantic indexes.",
            stack: ["FastAPI", "LangChain", "Transformers", "vLLM", "TRL", "Docker", "Git", "AWS Bedrock", "SageMaker"],
            tabs: {
                orchestration: {
                    title: "Codebase Knowledge Graph & RAG Core",
                    description: "Internal RAG codebase assistant leveraging LangChain, AST chunking, and similarity search for multi-repo exploration.",
                    visualType: "vector-rag",
                    specTitle: "LangChain Codebase RAG Assistant & Vector Search",
                    code: `from langchain.text_splitter import Language, RecursiveCharacterTextSplitter\nfrom langchain_community.vectorstores import FAISS\n\n# Internal RAG Codebase Assistant with AST Chunking & Vector Search\ndef index_source_repository(repo_path: str):\n    code_splitter = RecursiveCharacterTextSplitter.from_language(\n        language=Language.PYTHON, chunk_size=750, chunk_overlap=80\n    )\n    ast_chunks = code_splitter.split_documents(scan_repository_source(repo_path))\n    # Fine-tuned embeddings & retrieval strategies reduce latency by 30%\n    vector_store = FAISS.from_documents(ast_chunks, fine_tuned_embeddings)\n    return vector_store`,
                    bullets: [
                        "Developed an internal RAG codebase assistant leveraging LangChain and vector embeddings, reducing developer onboarding documentation lookup time by 40% across engineering teams.",
                        "Enhanced LLM inference with RAG by leveraging document chunking, embedding optimization, and similarity search, improving response relevancy by 40%.",
                        "Optimized RAG workflow by fine-tuning embeddings and retrieval strategies, reducing latency by 30% and enhancing overall answer relevance.",
                        "Created and executed automation scripts to replace repetitive tasks, enhancing precision in data retrieval by 35% and boosting productivity by 25% for product development initiatives."
                    ],
                    tradeoffs: "Upfront recursive AST traversal yields deep relational graph connections across multi-repo files but takes initial sync overhead.",
                    bottlenecks: "Enabled tree sharding boundaries inside git change listener monitors to strictly limit continuous embedding recalculations to changed modules."
                },
                curation: {
                    title: "LLM Data Curation & Model Serving",
                    description: "Multi-source dataset aggregation framework for LLM fine-tuning and high-performance FastAPI model serving.",
                    visualType: "curation-rag",
                    specTitle: "vLLM Model-Serving & Fine-Tuning Curation Pipelines",
                    code: `from fastapi import FastAPI\nimport vllm\n\n# High-Performance FastAPI Model-Serving Endpoints (-50% Latency Reduction)\napp = FastAPI(title="vLLM Serving Gateway")\nengine = vllm.AsyncLLMEngine.from_engine_args(\n    vllm.AsyncEngineArgs(model="meta-llama/Llama-3-8B-Instruct", tensor_parallel_size=1)\n)\n\n# Data Curation Framework for Fine-Tuning LLMs (LoRA/QLoRA)\ndef curate_finetuning_corpus(source_feeds: list[dict]) -> list[dict]:\n    """Aggregates multi-source datasets (+40% faster integration, +30% accuracy)"""\n    normalized = [standardize_dataset_schema(record) for record in source_feeds]\n    return deduplicate_and_filter_tokens(normalized)`,
                    bullets: [
                        "Architected a data curation framework to aggregate and process datasets from multiple sources, enabling 40% faster data integration to fine-tune LLMs, and improving processing accuracy by 30%.",
                        "Implemented high-performance model-serving endpoints using FastAPI, reducing response latency by 50% & securing reliable delivery for AI/ML applications.",
                        "Created and executed automation scripts to replace repetitive tasks, enhancing precision in data retrieval by 35% and boosting productivity by 25% for product development initiatives.",
                        "Containerized model serving clusters using Docker, establishing reproducible CI/CD test gates on AWS Bedrock and SageMaker."
                    ],
                    tradeoffs: "Curating and cleaning multi-source datasets upfront requires strict schema normalization steps but increases model fine-tuning accuracy by 30%.",
                    bottlenecks: "Deployed vLLM continuous batching to avoid GPU memory fragmentation under simultaneous high-concurrency requests."
                }
            }
        }
    },
    careerDashboard: {
        skills: {
            "Agentic AI & LLMs": ["LangChain", "LangGraph", "CrewAI", "MCP", "A2A", "RAG", "Context Engineering", "Guardrails", "LangFuse", "Prompt Engineering"],
            "Model Serving & ML": ["FastAPI", "vLLM", "PyTorch", "Hugging Face Transformers", "TRL (LoRA/QLoRA)", "Pydantic", "Scikit-Learn"],
            "Cloud & MLOps": ["Azure (AI Foundry, Function App, Blob, APIM, Cosmos DB)", "AWS (Bedrock, SageMaker, EC2, Lambda, S3, ECS, Fargate)", "Docker"],
            "Languages & Data": ["Python", "SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB)"],
            "DevOps & Quality": ["Git", "GitHub Actions", "Jenkins", "Pytest", "Jira"]
        },
        moats: [
            "Multi-Layer Guardrails Agent & Azure Content Safety (Halts Injection Attacks)",
            "LangChain PII Redaction Middleware (100% Australia Privacy Compliance)",
            "Declarative JSON Workflow Systems (19 Claim Journeys Managed Directly)",
            "Two-Tier LLM Prompt Architectures (Custom Rules + Generalized Rules)",
            "Runtime Node Validation (LangGraph State Synchronized with Pydantic)"
        ],
        baselines: [
            "Azure AI Foundry & AWS Bedrock Tool Integration",
            "Asynchronous Stream Processing (Kafka / Event Hubs)",
            "High-Performance Model Serving (vLLM & FastAPI)",
            "Relational & Document Stores (PostgreSQL, Azure SQL, MongoDB)",
            "Containerized Deployments (Docker & CI/CD)"
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
