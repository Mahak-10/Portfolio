export const portfolioData = {
  personalInfo: {
    name: "Mahak Singh",
    role: "SOFTWARE DEVELOPER",
    tagline: "Computer Science undergraduate focusing on backend development",
    education: "B.Tech CSE '27",
    experienceStatus: "Fresher",
    location: "Ghaziabad, India",
    phone: "+91-8521335770",
    email: "mahaksinghjsr@gmail.com",
    // Avatar image URL / path - user provided photo
    profileImage: "/mahak-photo.jpeg",
    sidebarFooterText: "Building a better tomorrow with technology.",
    summary: `Computer Science undergraduate with hands-on experience in Java, Spring Boot, and REST API development through academic and internship projects, and exposure to MySQL. Comfortable working with Data Structures and Algorithms. Looking to start my career as a Software Development Engineer with a focus on backend development.`
  },

  aboutHighlightedSkills: [
    { name: "Java", category: "language" },
    { name: "DSA", category: "core" },
    { name: "OOPS", category: "concept" },
    { name: "Spring Boot", category: "framework" },
    { name: "MySQL", category: "database" }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "A.K.G. Engineering College / APJ Abdul Kalam Technical University",
      duration: "2023 – 2027",
      status: "Pursuing (Batch of 2027)",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOPS)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    }
  ],

  projects: [
    {
      id: "ai-health",
      title: "FitSphere — Health Recommendation System",
      shortDescription: "An event-driven microservices platform that turns workout activity into personalized AI health recommendations in real time, powered by Google Gemini.",
      eyebrow: "EVENT-DRIVEN HEALTH INTELLIGENCE PLATFORM",
      tagline: "An event-driven microservices platform that turns workout activity into personalized AI health recommendations in real time, powered by Google Gemini.",
      duration: "02:36",
      accent: "#25B9FF",
      accentSecondary: "#54E0C1",
      decorativeText: ["Event-Driven", "Microservices", "Google", "Gemini"],
      tags: ["Microservices", "Event-Driven", "AI / Gemini", "Spring Boot", "RabbitMQ", "Keycloak"],
      highlights: ["Event-Driven Architecture", "Keycloak OAuth2 PKCE Security", "Google Gemini AI Engine Integration", "Async RabbitMQ Queueing", "Polyglot Persistence (PostgreSQL & MongoDB)"],
      hoverTechStack: ["Java 17", "Spring Boot 3", "RabbitMQ", "Keycloak", "MongoDB"],
      techStack: ["Java 17", "Spring Boot 3", "Spring Cloud Gateway", "Eureka Server", "RabbitMQ", "Google Gemini API", "Keycloak OAuth2", "PostgreSQL", "MongoDB", "React 18", "Docker"],
      videoSrc: "",
      githubUrl: "https://github.com/mahaksingh",
      liveDemo: "",
      overview: {
        problemStatement: "Traditional fitness trackers store raw metrics (e.g., heart rate, steps, calories burned), but fail to convert this data into actionable, contextual health guidance. Furthermore, building real-time AI recommendations directly into monolithic HTTP workflows creates major bottlenecks due to LLM latency (1.5s - 4s).",
        whatISolved: "FitSphere solves this by establishing an asynchronous, event-driven microservices architecture that ingests fitness metrics, decouples AI payload processing via RabbitMQ message queues, and delivers structured, safety-checked health insights without blocking user workflows.",
        howISolved: "Requests pass through a centralized API Gateway secured by Keycloak OAuth2/PKCE. Workouts logged via the Activity Service persist to MongoDB and emit events to RabbitMQ in < 100ms. The AI Service consumes these events asynchronously, queries Google Gemini AI models, and saves structured recommendations to MongoDB.",
        howItWorksSteps: [
          { step: "01", title: "OAuth2 PKCE Auth", desc: "User authenticates via Keycloak IDP with stateless JWT verification at Gateway", icon: "user" },
          { step: "02", title: "Workout Ingestion", desc: "Activity Service validates workout data and persists entry to MongoDB", icon: "database" },
          { step: "03", title: "Async Queue Event", desc: "Activity Service emits activity.tracking event to RabbitMQ exchange in < 100ms", icon: "brain" },
          { step: "04", title: "Async AI Service", desc: "AI Service consumes event queue and prompts Google Gemini models asynchronously", icon: "file" },
          { step: "05", title: "Google Gemini AI Engine", desc: "Generates personalized workout recovery, macro-nutrition, and rest recommendations", icon: "chart" },
          { step: "06", title: "Structured JSON Output", desc: "Custom JSON substring parser stores recommendation in MongoDB for dashboard display", icon: "chart" }
        ],
        outcomeChecklist: [
          "Reduced activity logging API latency by 95% (< 100ms response time)",
          "99.9% recommendation generation uptime with high-performance Gemini AI engine",
          "Zero JSON deserialization crashes with custom LLM substring sub-parser",
          "Stateless JWT authentication & OAuth2 PKCE browser security via Keycloak",
          "Polyglot persistence across PostgreSQL (User DB) and MongoDB (Activity & Recommendation DBs)",
          "Centralized configuration & Eureka service discovery across 6 microservices"
        ]
      },
      featuresList: [
        {
          number: "01",
          icon: "Brain",
          title: "Real-time AI Recommendations",
          desc: "Custom fitness evaluation based on calories burned, heart rate, pace, duration, and workout intensity powered by Google Gemini."
        },
        {
          number: "02",
          icon: "Sparkles",
          title: "Google Gemini AI Engine Integration",
          desc: "Generates personalized fitness evaluations, macro-nutrition planning, and workout recovery advice in real time."
        },
        {
          number: "03",
          icon: "Share2",
          title: "Asynchronous Queue Ingestion",
          desc: "Workout logging is non-blocking (< 100ms response time); RabbitMQ message queues process AI generation tasks seamlessly in the background."
        },
        {
          number: "04",
          icon: "Lock",
          title: "OAuth2 PKCE Security",
          desc: "Industry-standard browser authorization using Keycloak IDP with PKCE flow without exposing client secrets."
        },
        {
          number: "05",
          icon: "Database",
          title: "Polyglot Persistence",
          desc: "PostgreSQL 15 handles relational user account profiles; MongoDB 6 handles dynamic workout metrics and structured JSON AI recommendations."
        },
        {
          number: "06",
          icon: "Cpu",
          title: "Service Discovery & Centralized Config",
          desc: "Dynamic service load balancing via Netflix Eureka (lb://) paired with centralized Spring Cloud Config Server management."
        },
        {
          number: "07",
          icon: "Code",
          title: "Robust Substring JSON Parser",
          desc: "Custom regex/substring parser extracts valid JSON objects from conversational LLM outputs, preventing deserialization errors."
        },
        {
          number: "08",
          icon: "LayoutDashboard",
          title: "Modern Dark-Themed Frontend",
          desc: "Built with React 18, Redux Toolkit, Vite, Material UI icons, and responsive dashboard controls."
        }
      ],
      howItWorksTimeline: [
        {
          step: "01",
          title: "User Authentication",
          desc: "Client authenticates via Keycloak realm fitness-oauth2 using OAuth2 PKCE flow."
        },
        {
          step: "02",
          title: "Workout Logging",
          desc: "POST /api/activities writes workout metrics to MongoDB and returns 201 Created in < 100ms."
        },
        {
          step: "03",
          title: "RabbitMQ Event Emission",
          desc: "Emits activity.tracking event to activity.exchange asynchronously."
        },
        {
          step: "04",
          title: "AI Service Consumption",
          desc: "AI Service consumes event, prompts Gemini API with multi-model fallback."
        },
        {
          step: "05",
          title: "Recommendation Display",
          desc: "Structured insights saved to MongoDB and rendered dynamically on the user dashboard."
        }
      ],
      howItWorksArchitecture: [
        { layer: "API Gateway", tech: "Spring Cloud Gateway", desc: "Port 8080 — Unified entry point, JWT verification & Eureka load balancing" },
        { layer: "Identity & Auth", tech: "Keycloak IDP", desc: "Port 8181 — OAuth2 PKCE authorization code grant & JWK public key server" },
        { layer: "User Microservice", tech: "Spring Boot + PostgreSQL", desc: "Port 8081 — User registration, validation & fitness_user_db persistence" },
        { layer: "Activity Microservice", tech: "Spring Boot + MongoDB + RabbitMQ", desc: "Port 8082 — Logs workout metrics & emits asynchronous messaging events" },
        { layer: "AI Recommendation Microservice", tech: "Spring Boot + MongoDB + Gemini API", desc: "Port 8083 — Background event consumer, Gemini prompt inference & resilient fallbacks" },
        { layer: "Discovery & Config", tech: "Eureka + Config Server", desc: "Ports 8761 / 8888 — Service registry & central git/file configuration management" }
      ],
      techStackCategorized: {
        frontend: ["React 18", "Redux Toolkit", "Vite", "Material UI Icons", "react-oauth2-code-pkce"],
        backend: ["Java 17", "Spring Boot 3.x", "Spring Cloud Gateway", "Eureka Server", "Config Server"],
        database: ["PostgreSQL 15", "MongoDB 6"],
        messaging: ["RabbitMQ"],
        security: ["Keycloak", "OAuth2 PKCE", "JWT"],
        ai: ["Google Gemini API (3.6 Flash / 3.5 Flash-Lite Fallbacks)"],
        cloud: ["Docker", "Docker Compose"]
      },
      techStackData: {
        subtitle: "An event-driven microservices architecture built on Java 17, Spring Cloud, RabbitMQ, Keycloak, PostgreSQL, MongoDB, and Google Gemini AI.",
        categories: [
          {
            category: "Microservices",
            icon: "Cpu",
            subtitle: "Spring Cloud Ecosystem",
            technologies: [
              { name: "Spring Cloud Gateway", role: "Edge Router", icon: "Network" },
              { name: "Eureka Server", role: "Service Discovery", icon: "Search" },
              { name: "Config Server", role: "Central Config", icon: "Settings" }
            ]
          },
          {
            category: "Backend",
            icon: "Server",
            subtitle: "Core Business Services",
            technologies: [
              { name: "Java 17", role: "Core Language", icon: "Java" },
              { name: "Spring Boot 3", role: "Microservices Framework", icon: "SpringBoot" },
              { name: "REST APIs", role: "Edge Endpoints", icon: "Code" }
            ]
          },
          {
            category: "Messaging",
            icon: "Share2",
            subtitle: "Asynchronous Queueing",
            technologies: [
              { name: "RabbitMQ", role: "Message Broker", icon: "RabbitMQ" }
            ]
          },
          {
            category: "Databases",
            icon: "Database",
            subtitle: "Polyglot Persistence",
            technologies: [
              { name: "PostgreSQL 15", role: "User Relational DB", icon: "PostgreSQL" },
              { name: "MongoDB 6", role: "Activity & Recommendation DB", icon: "MongoDB" }
            ]
          },
          {
            category: "Security",
            icon: "ShieldCheck",
            subtitle: "Identity & Access",
            technologies: [
              { name: "Keycloak", role: "OAuth2 / OIDC IDP", icon: "Keycloak" },
              { name: "JWT", role: "Stateless Verification", icon: "Lock" }
            ]
          },
          {
            category: "AI Service",
            icon: "Brain",
            subtitle: "LLM Recommendations",
            technologies: [
              { name: "Google Gemini API", role: "Multi-Model Fallbacks", icon: "Sparkles" }
            ]
          }
        ],
        summaryShort: "Java 17 + Spring Boot 3 + Spring Cloud + RabbitMQ + Keycloak + PostgreSQL + MongoDB + Gemini API",
        summaryExplanation: "An event-driven microservices architecture engineered to deliver fast, non-blocking health logging and resilient AI recommendations."
      },
      screenshots: [
        {
          id: 1,
          num: "1",
          title: "Microservices Architecture",
          description: "Centralized Gateway, Eureka Discovery, Keycloak Auth, RabbitMQ Event Bus, PostgreSQL & MongoDB.",
          category: "Architecture",
          categories: ["Architecture"],
          image: ""
        },
        {
          id: 2,
          num: "2",
          title: "Interactive Health Dashboard",
          description: "Real-time activity logs, calorie tracking, and instant AI workout recommendations.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 3,
          num: "3",
          title: "Resilient LLM Fallback Sequence",
          description: "Multi-model fallback from Gemini 3.6 Flash to 3.5 Flash-Lite ensures 99.9% uptime.",
          category: "AI / Gemini",
          categories: ["AI / Gemini"],
          image: ""
        }
      ]
    },
    {
      id: "ecommerce",
      title: "ShopVerse — Full-Stack E-Commerce Platform",
      shortDescription: "A production-grade, multi-role e-commerce platform built with Spring Boot 3.4 & React 19 featuring dual Stripe & PayPal payment gateways, multi-user data isolation, and audit-safe order lifecycles.",
      eyebrow: "PREMIUM FULL-STACK E-COMMERCE PLATFORM",
      tagline: "A production-grade, multi-role e-commerce platform supporting Customer, Seller, and Admin roles with dual payment gateway redundancy and audit-safe data handling.",
      duration: "04:15",
      accent: "#FFB84A",
      accentSecondary: "#FF815F",
      decorativeText: ["ShopVerse", "Dual-Gateways", "Multi-Role", "Spring-Boot"],
      tags: ["Java 21", "Spring Boot 3", "React 19", "Redux Toolkit", "PostgreSQL", "Stripe", "PayPal"],
      highlights: ["Dual Payment Gateway (Stripe + PayPal + COD)", "Multi-Role RBAC (Customer, Seller, Admin)", "JWT-Secured Multi-User Data Isolation", "Audit-Safe Address Disassociation", "Redux Toolkit State Synchronization"],
      hoverTechStack: ["Java 21", "Spring Boot 3.4", "React 19", "Redux Toolkit", "PostgreSQL"],
      techStack: ["Java 21", "Spring Boot 3.4.2", "Spring Security", "Spring Data JPA", "PostgreSQL", "Stripe SDK 29", "PayPal SDK", "React 19.2", "Redux Toolkit 2.11", "TailwindCSS 4", "SpringDoc OpenAPI"],
      videoSrc: "",
      githubUrl: "https://github.com/mahaksingh",
      liveDemo: "",
      overview: {
        problemStatement: "Traditional e-commerce implementations struggle with data isolation leaks (cart/address data bleeding across user sessions), payment gateway rigidity (single point of failure), audit breakage (deleting an address crashing historical order records), and inventory race conditions (overselling due to non-atomic updates).",
        whatISolved: "ShopVerse solves these challenges with a clean, decoupled architecture: strict JWT-scoped resource ownership, dual Stripe & PayPal payment gateway redundancy with Cash on Delivery (COD), audit-safe soft-disassociation on delete, and role-tailored workflows for Customers, Sellers, and Admins.",
        howISolved: "Requests flow through a layered backend (Controller → Service → Repository) secured by Spring Security JWT filters. The frontend uses React 19 + Redux Toolkit for state management, communicating with Java 21 Spring Boot APIs, persisting to PostgreSQL, and interacting with Stripe Java SDK and PayPal Sandbox APIs.",
        howItWorksSteps: [
          { step: "01", title: "JWT & RBAC Auth", desc: "User authenticates via Spring Security JWT; roles determine Customer, Seller, or Admin permissions", icon: "user" },
          { step: "02", title: "Catalog & Stock Check", desc: "Paginated search, category filters, and live atomic stock validation before cart addition", icon: "database" },
          { step: "03", title: "Redux Cart & Session", desc: "Backend-persisted + Redux-synced cart with session-safe purging on user logout", icon: "file" },
          { step: "04", title: "Triple Payment Flow", desc: "Stripe PaymentIntent, PayPal Express Checkout, or Cash on Delivery (COD) processing", icon: "brain" },
          { step: "05", title: "Audit-Safe Order Record", desc: "Order creation with FK-safe address disassociation preserving historical order records", icon: "chart" }
        ],
        outcomeChecklist: [
          "Zero cart or address data bleeding across user sessions via strict JWT scope enforcement",
          "Triple payment flexibility: Stripe PaymentIntent flow, PayPal Sandbox Express Checkout, and Cash on Delivery",
          "Audit-safe historical order protection when users modify or delete address entries",
          "Atomic stock validation preventing inventory race conditions during high checkout concurrency",
          "Role-isolated management dashboards for Sellers (inventory/orders) and Admins (sales analytics)",
          "Full interactive API documentation generated automatically via SpringDoc OpenAPI (Swagger UI)"
        ]
      },
      featuresList: [
        {
          icon: "ShieldCheck",
          title: "Security & Role-Based Auth (JWT + RBAC)",
          desc: "JWT-based authentication with HTTP-only cookies, enforcing ROLE_USER, ROLE_SELLER, and ROLE_ADMIN authorization rules across endpoints."
        },
        {
          icon: "Store",
          title: "Dynamic Product Catalog & Validation",
          desc: "Paginated product search, category taxonomy filtering, live stock validation, and multipart image upload support."
        },
        {
          icon: "ShoppingCart",
          title: "Redux-Synced Persistent Shopping Cart",
          desc: "Backend-persisted and Redux Toolkit-synced shopping cart, featuring coupon engine validation and session-safe purging on logout."
        },
        {
          icon: "Receipt",
          title: "Multi-Address Book & Audit Safety",
          desc: "Multi-address management with default checkout selection and FK-safe soft disassociation preserving historical order records upon deletion."
        },
        {
          icon: "CreditCard",
          title: "Triple Payment Gateway Integration",
          desc: "Stripe PaymentIntent flow with Stripe Elements, PayPal Express Checkout sandbox integration, and Cash on Delivery (COD) option."
        },
        {
          icon: "BarChart3",
          title: "Seller & Admin Management Dashboards",
          desc: "Merchant console for seller inventory and order oversight, plus global admin sales analytics and user management."
        },
        {
          icon: "FileText",
          title: "Swagger OpenAPI Documentation",
          desc: "Interactive API reference endpoints generated automatically via SpringDoc OpenAPI for fast developer integration."
        },
        {
          icon: "LayoutDashboard",
          title: "Modern React 19 & Tailwind Architecture",
          desc: "High-contrast responsive marketplace interface built with React 19, Vite, Redux Toolkit, TailwindCSS 4, and Material-UI."
        }
      ],
      howItWorksTimeline: [
        {
          step: "01",
          title: "JWT Security & Authentication",
          desc: "Customer, Seller, or Admin logs in via Spring Security JWT endpoint; authorization claims populate the SecurityContext."
        },
        {
          step: "02",
          title: "Catalog Filtering & Redux Cart Sync",
          desc: "User browses paginated products, filters by category, and adds items to Redux Toolkit cart synchronized with backend database."
        },
        {
          step: "03",
          title: "Multi-Address Selection & Gateway Choice",
          desc: "Customer selects delivery address and chooses Stripe PaymentIntent, PayPal Sandbox, or Cash on Delivery checkout."
        },
        {
          step: "04",
          title: "Atomic Backend Order Processing",
          desc: "Spring Boot initializes transactional boundary, verifies gateway state, updates inventory atomically, and generates Order entity."
        },
        {
          step: "05",
          title: "Audit-Safe Persistence & Fulfillment",
          desc: "Order record is saved with address snapshot, cart is cleared, and live order status reflects on Seller and Admin consoles."
        }
      ],
      howItWorksArchitecture: [
        { layer: "Frontend & State", tech: "React 19 + Redux Toolkit + Vite", desc: "Responsive buyer marketplace, seller portal, and state management" },
        { layer: "Security & Controller", tech: "Spring Security + JJWT 0.13", desc: "JWT signature verification, SecurityContext, and REST Controllers" },
        { layer: "Business Logic", tech: "Spring Boot 3.4 + Service Layer", desc: "Transactional boundaries (@Transactional), DTO mapping, and payment engines" },
        { layer: "Persistence & Gateways", tech: "PostgreSQL 15 + Stripe / PayPal SDKs", desc: "Spring Data JPA relational mapping and external payment gateway APIs" }
      ],
      techStackCategorized: {
        frontend: ["React 19", "Redux Toolkit 2.11", "Vite", "TailwindCSS 4", "Material-UI"],
        backend: ["Java 21", "Spring Boot 3.4.2", "Spring Security", "Spring Data JPA", "Hibernate", "ModelMapper"],
        database: ["PostgreSQL 15"],
        messaging: ["Stripe Java SDK 29.3", "PayPal Sandbox REST API"],
        authentication: ["JJWT 0.13.0", "HTTP-Only Cookies", "RBAC"],
        cloud: ["Docker", "Maven"],
        ai: [],
        tools: ["SpringDoc OpenAPI (Swagger)", "Postman", "Git"]
      },
      techStackData: {
        subtitle: "Built with Java 21, Spring Boot 3.4, React 19, Redux Toolkit, PostgreSQL, and dual Stripe & PayPal payment APIs.",
        categories: [
          {
            category: "Frontend & State",
            icon: "Monitor",
            subtitle: "React 19 & Redux Toolkit UI",
            technologies: [
              { name: "React 18", role: "React 19.2 Library", icon: "React" },
              { name: "CSS Modules", role: "TailwindCSS 4 & MUI", icon: "Layout" },
              { name: "JavaScript", role: "Core Logic", icon: "Code" }
            ]
          },
          {
            category: "Backend Services",
            icon: "Server",
            subtitle: "Spring Boot 3.4 REST Engine",
            technologies: [
              { name: "Java 17", role: "Java 21 Runtime", icon: "Java" },
              { name: "Spring Boot 3", role: "Spring Boot 3.4.2", icon: "SpringBoot" },
              { name: "Hibernate / JPA", role: "Spring Data JPA & Hibernate", icon: "Database" },
              { name: "Maven", role: "Build Tool", icon: "Box" }
            ]
          },
          {
            category: "Database",
            icon: "Database",
            subtitle: "Relational Persistence",
            technologies: [
              { name: "PostgreSQL 15", role: "Relational PostgreSQL DB", icon: "PostgreSQL" }
            ]
          },
          {
            category: "Payment Gateways",
            icon: "CreditCard",
            subtitle: "Dual Gateway Redundancy",
            technologies: [
              { name: "Stripe API", role: "Stripe PaymentIntent SDK", icon: "CreditCard" },
              { name: "PayPal SDK", role: "PayPal Express Sandbox API", icon: "DollarSign" }
            ]
          },
          {
            category: "Security",
            icon: "ShieldCheck",
            subtitle: "JWT & Multi-Role RBAC",
            technologies: [
              { name: "Spring Security", role: "Role-Based Access Control", icon: "ShieldCheck" },
              { name: "OAuth2 / JWT", role: "JJWT 0.13 Token Service", icon: "Lock" }
            ]
          },
          {
            category: "Tools & Docs",
            icon: "Wrench",
            subtitle: "API Documentation & Tools",
            technologies: [
              { name: "Postman", role: "SpringDoc OpenAPI (Swagger)", icon: "Send" },
              { name: "Git", role: "Version Control", icon: "GitBranch" }
            ]
          }
        ],
        summaryShort: "Java 21 + Spring Boot 3.4 + React 19 + Redux Toolkit + PostgreSQL + Stripe + PayPal + OpenAPI",
        summaryExplanation: "A production-grade e-commerce marketplace engineered with dual payment gateways, multi-role RBAC, and audit-safe order lifecycles."
      },
      screenshots: [
        {
          id: 1,
          num: "1",
          title: "ShopVerse Storefront Landing",
          description: "Featured multi-vendor product carousel, search bar, and category taxonomy.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 2,
          num: "2",
          title: "Product Search & Stock Filter",
          description: "Real-time search filtering by price range, ratings, and atomic stock levels.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 3,
          num: "3",
          title: "Redux Cart & Price Summary",
          description: "Item quantity adjustments, discount code engine, and cart state synchronization.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 4,
          num: "4",
          title: "Stripe PaymentIntent Gateway",
          description: "Secure credit/debit card processing with Stripe Elements integration.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 5,
          num: "5",
          title: "PayPal Sandbox Express Checkout",
          description: "PayPal Express checkout approval flow and instant transaction capture.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 6,
          num: "6",
          title: "Seller Management Console",
          description: "Dedicated merchant dashboard to add products, set prices, and manage orders.",
          category: "Admin",
          categories: ["Admin", "Analytics"],
          image: ""
        },
        {
          id: 7,
          num: "7",
          title: "Admin Analytics & Global Control",
          description: "Store revenue charts, order tracking metrics, and global user management.",
          category: "Analytics",
          categories: ["Admin", "Analytics"],
          image: ""
        },
        {
          id: 8,
          num: "8",
          title: "Customer Order Tracking",
          description: "Order status timeline from confirmation, dispatch to delivery.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 9,
          num: "9",
          title: "Mobile Marketplace View",
          description: "Touch-optimized mobile marketplace interface for buyers and sellers.",
          category: "Mobile",
          categories: ["Mobile"],
          image: ""
        }
      ]
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker — Personal Finance Platform",
      shortDescription: "A multi-tenant personal finance application featuring a 5-layer tracking system (Expenses, Savings, Debts, Bills, Subscriptions), self-healing demo mode, and Recharts analytics.",
      eyebrow: "PREMIUM PERSONAL FINANCE & PORTFOLIO PLATFORM",
      tagline: "A multi-tenant personal finance application featuring a 5-layer tracking system, automated self-healing demo mode, and dynamic Recharts spending analytics.",
      duration: "03:46",
      accent: "#2DDBA0",
      accentSecondary: "#00E676",
      decorativeText: ["ExpenseFlow", "5-Layer-Track", "Self-Healing", "Recharts"],
      tags: ["Java 17", "Spring Boot 3", "React 19", "Vite", "PostgreSQL", "Recharts", "TailwindCSS"],
      highlights: ["Multi-Tenant Isolation (X-User-Id)", "Self-Healing Demo Mode (@Transactional)", "5-Layer Financial Tracker (Expenses, Savings, Debts, Bills, Subscriptions)", "Dynamic Recharts Monthly Trends", "Rupee (Rs) Currency Localization"],
      hoverTechStack: ["Java 17", "Spring Boot 3", "React 19", "PostgreSQL", "Recharts"],
      techStack: ["Java 17", "Spring Boot 3", "Spring Data JPA", "PostgreSQL", "React 19", "Vite", "Recharts", "TailwindCSS", "Axios", "ModelMapper"],
      videoSrc: "",
      githubUrl: "https://github.com/mahaksingh",
      liveDemo: "https://personal-expense-tracker-liart-five.vercel.app",
      overview: {
        problemStatement: "Traditional personal finance tools suffer from data cross-contamination (mixing data across accounts), static non-interactive insights, corrupted demo accounts when testers alter seed data, and fragmented scope ignoring debts, utility bills, and subscriptions.",
        whatISolved: "Engineered a multi-tenant personal finance platform with 100% resource isolation via X-User-Id request context validation, a self-healing demo mode engine that auto-resets pristine seed data (Rs 34,650) on demo login, and a unified 5-layer tracking architecture.",
        howISolved: "Built a layered Spring Boot REST backend with ModelMapper DTO conversion and PostgreSQL persistence, paired with a modern React 19 + Vite frontend utilizing TailwindCSS and dynamic Recharts visual graphs localized in Rupees (Rs).",
        howItWorksSteps: [
          { step: "01", title: "Multi-Tenant Auth", desc: "Requests pass through X-User-Id context validation enforcing strict user data boundaries", icon: "user" },
          { step: "02", title: "Self-Healing Engine", desc: "Demo login triggers @Transactional engine restoring pristine Rs 34,650 state", icon: "database" },
          { step: "03", title: "5-Layer Financial Track", desc: "Ingests Expenses, Savings, Debts (Owed To/By), Utility Bills, and Brand Subscriptions", icon: "file" },
          { step: "04", title: "JPA Aggregations", desc: "Spring Data JPA aggregates monthly trends, category totals, and bill due dates", icon: "brain" },
          { step: "05", title: "Recharts Analytics", desc: "Renders dynamic bar graphs, allocation donut charts, and instant balance metrics", icon: "chart" }
        ],
        outcomeChecklist: [
          "100% multi-tenant resource isolation enforced via X-User-Id request header validation",
          "Automated @Transactional self-healing demo engine resetting pristine Rs 34,650 portfolio",
          "Unified 5-layer financial tracking: Expenses, Savings, Debts, Utility Bills, Subscriptions",
          "Audit-safe soft-disassociation unlinking JPA entities to protect historical records",
          "Dynamic Recharts visual analytics with monthly trend bar charts and category donut charts",
          "Full Indian Rupee (Rs) currency localization and brand icon subscription mapping"
        ]
      },
      featuresList: [
        {
          icon: "ShieldCheck",
          title: "Multi-User Security & User Isolation",
          desc: "X-User-Id header validation protecting profile settings, categories, expenses, savings, debts, and subscriptions per account."
        },
        {
          icon: "Zap",
          title: "Self-Healing Recruiter Demo Mode",
          desc: "Direct demo portal bypassing registration with a self-healing @Transactional engine that restores a pristine Rs 34,650 portfolio on every login."
        },
        {
          icon: "Receipt",
          title: "5-Layer Financial Tracker Architecture",
          desc: "Unifies Expenses, Savings logs, Debts (Owed to Me vs Owed to Others), Scheduled Utility Bills, and Brand Subscriptions."
        },
        {
          icon: "BarChart3",
          title: "Recharts Analytics & Monthly Trends",
          desc: "Dynamic bar charts and category allocation donut charts rendered via Recharts for instant spending visibility."
        },
        {
          icon: "Calendar",
          title: "Scheduled Utility Bills Management",
          desc: "Track recurring utilities (Water, Electricity, Wifi, Mobile) with custom options, due dates, and payment toggles."
        },
        {
          icon: "Tv",
          title: "Brand Subscriptions Tracker",
          desc: "Monitor streaming and SaaS subscriptions (Netflix, Spotify, YouTube Premium, Prime) with automated brand icons and renewal dates."
        },
        {
          icon: "FileText",
          title: "Audit-Safe Category Disassociation",
          desc: "JPA service layer soft-disassociation preventing category deletions from corrupting historical transaction records."
        },
        {
          icon: "LayoutDashboard",
          title: "Rupee (Rs) Localized React 19 UI",
          desc: "Clean, clutter-free financial dashboard built with React 19, Vite, TailwindCSS, and Axios localized in Indian Rupees (Rs)."
        }
      ],
      howItWorksTimeline: [
        {
          step: "01",
          title: "User Sign-In / Demo Auto-Reset",
          desc: "User authenticates or enters Recruiter Demo Mode; self-healing engine restores pristine Rs 34,650 portfolio state."
        },
        {
          step: "02",
          title: "5-Layer Record Ingestion",
          desc: "User logs Expenses, Savings, Debts (Owed To/By), Utility Bills, or Subscriptions mapped to custom categories."
        },
        {
          step: "03",
          title: "X-User-Id Scope Validation",
          desc: "Spring Boot REST controllers validate header context and isolate database operations per user session."
        },
        {
          step: "04",
          title: "JPA Aggregation & Calculations",
          desc: "Spring Data JPA executes optimized aggregation queries calculating category distributions and total balances."
        },
        {
          step: "05",
          title: "Recharts Visual Analytics",
          desc: "Frontend receives structured JSON payloads and updates monthly trend bar graphs and category donut charts."
        }
      ],
      howItWorksArchitecture: [
        { layer: "Frontend & State", tech: "React 19 + Vite + TailwindCSS", desc: "Responsive financial dashboard, 5-layer logs, and Recharts graphs" },
        { layer: "REST Controller", tech: "Spring Boot 3 + X-User-Id Header", desc: "Multi-tenant context verification, payload validation, and REST controllers" },
        { layer: "Business Logic", tech: "Spring Boot Service + @Transactional", desc: "Self-healing demo engine, DTO mapping (ModelMapper), and soft disassociation" },
        { layer: "Data Layer", tech: "PostgreSQL 15 + Spring Data JPA", desc: "Relational persistence with indexed aggregation queries" }
      ],
      techStackCategorized: {
        frontend: ["React 19", "Vite", "Recharts", "TailwindCSS", "Axios"],
        backend: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "ModelMapper"],
        database: ["PostgreSQL 15"],
        messaging: ["RESTful APIs", "X-User-Id Validation"],
        authentication: ["Multi-Tenant Session Isolation", "Self-Healing Demo Engine"],
        cloud: ["Vercel (Frontend)", "Maven"],
        ai: [],
        tools: ["Postman", "Git", "GitHub"]
      },
      techStackData: {
        subtitle: "Engineered with Java 17, Spring Boot 3, React 19, Vite, PostgreSQL, Recharts, and TailwindCSS.",
        categories: [
          {
            category: "Frontend UI & Analytics",
            icon: "Monitor",
            subtitle: "React 19 & Recharts Dashboard",
            technologies: [
              { name: "React 18", role: "React 19.2 Library", icon: "React" },
              { name: "CSS Modules", role: "TailwindCSS Styling", icon: "Layout" },
              { name: "Chart.js", role: "Recharts Visual Graphs", icon: "BarChart" }
            ]
          },
          {
            category: "Backend REST Services",
            icon: "Server",
            subtitle: "Multi-tenant Spring Boot Engine",
            technologies: [
              { name: "Java 17", role: "Java 17 Runtime", icon: "Java" },
              { name: "Spring Boot 3", role: "Spring Boot 3 REST API", icon: "SpringBoot" },
              { name: "Hibernate / JPA", role: "Spring Data JPA ORM", icon: "Database" },
              { name: "Maven", role: "Build Automation", icon: "Box" }
            ]
          },
          {
            category: "Database",
            icon: "Database",
            subtitle: "Relational Persistence",
            technologies: [
              { name: "PostgreSQL 15", role: "PostgreSQL Relational DB", icon: "PostgreSQL" }
            ]
          },
          {
            category: "Security & Multi-Tenancy",
            icon: "ShieldCheck",
            subtitle: "Header Context & Demo Engine",
            technologies: [
              { name: "Spring Security", role: "X-User-Id Data Isolation", icon: "ShieldCheck" },
              { name: "REST APIs", role: "Self-Healing Demo Mode", icon: "Zap" }
            ]
          },
          {
            category: "Tools & Deployment",
            icon: "Wrench",
            subtitle: "Hosting & Developer Tools",
            technologies: [
              { name: "Postman", role: "Vercel Hosting & API Docs", icon: "Send" },
              { name: "Git", role: "Version Control", icon: "GitBranch" }
            ]
          }
        ],
        summaryShort: "Java 17 + Spring Boot 3 + React 19 + Vite + PostgreSQL + Recharts + TailwindCSS",
        summaryExplanation: "A multi-tenant personal finance platform with 5 tracking layers, a self-healing demo engine, and dynamic Recharts analytics."
      },
      screenshots: [
        {
          id: 1,
          num: "1",
          title: "Modern Financial Dashboard",
          description: "Summary metrics for Total Spent, Current Month Spent, Savings, and Category Counts.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 2,
          num: "2",
          title: "Monthly Trend & Category Charts",
          description: "Dynamic monthly expenditure bar charts and category distribution donut charts via Recharts.",
          category: "Analytics",
          categories: ["User", "Analytics"],
          image: ""
        },
        {
          id: 3,
          num: "3",
          title: "Categorized Expense Logs",
          description: "Record individual expense entries with custom category mapping, date, and Rupee amount.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 4,
          num: "4",
          title: "Savings Portfolio Manager",
          description: "Dedicated savings logs detailing dates, descriptions, and cumulative totals.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 5,
          num: "5",
          title: "Debts & Loans Tracker",
          description: "Track money owed with clear separation between 'Owed to Me' vs 'Owed to Others'.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 6,
          num: "6",
          title: "Scheduled Utility Bills Manager",
          description: "Manage recurring utilities (Electricity, Water, Wifi) with due dates and payment toggles.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 7,
          num: "7",
          title: "Brand Subscriptions Tracker",
          description: "Track recurring streaming packages (Netflix, Spotify, Prime) with automated brand logos.",
          category: "User",
          categories: ["User"],
          image: ""
        },
        {
          id: 8,
          num: "8",
          title: "Recruiter Self-Healing Demo Mode",
          description: "Instant demo portal access auto-resetting pristine Rs 34,650 seed portfolio on login.",
          category: "User",
          categories: ["User"],
          image: ""
        }
      ]
    }
  ],

  technicalSkills: {
    languages: ["Java", "SQL"],
    frameworks: ["Spring Boot", "REST APIs", "Spring Data JPA", "Spring Security"],
    databases: ["MySQL"],
    coreCompetencies: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOPS)", "System Architecture"],
    tools: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA"]
  },

  experience: [
    {
      role: "Software Developer Intern / Academic Projects",
      organization: "Computer Science Dept",
      period: "2024 – Present",
      description: "Hands-on experience in Java, Spring Boot, REST APIs, and database design through practical backend projects and coding challenges."
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "mahak_singh",
      link: "https://leetcode.com",
      highlights: "Solved DSA problems in Java focusing on Arrays, Linked Lists, Trees & Dynamic Programming"
    },
    {
      platform: "GeeksforGeeks",
      username: "mahaksingh",
      link: "https://geeksforgeeks.org",
      highlights: "Regular practice on Core CS concepts, DSA algorithms & Data Structures"
    },
    {
      platform: "GitHub",
      username: "mahaksingh",
      link: "https://github.com",
      highlights: "Open repositories for Spring Boot applications and Java DSA implementations"
    }
  ],

  achievements: [
    "Computer Science Undergraduate (B.Tech CSE '27)",
    "Built end-to-end Spring Boot REST API services with MySQL database persistence",
    "Active DSA problem solver on LeetCode & GeeksforGeeks"
  ],

  resume: {
    downloadLink: "#",
    filename: "Mahak_Singh_Resume.pdf"
  },

  contact: {
    email: "mahaksinghjsr@gmail.com",
    phone: "+91-8521335770",
    location: "Ghaziabad, India",
    linkedin: "https://linkedin.com/in/mahaksingh",
    github: "https://github.com/mahaksingh",
    calendly: "https://calendly.com/mahaksinghjsr/30min"
  }
};
