export type Locale = "es" | "en";
export type PageKey = "home" | "about" | "projects" | "services" | "contact";

type Metric = { value: string; label: string };
type CaseStudy = {
  title: string;
  scope: string;
  system: string;
  summary: string;
  responsibilities: string[];
  outcome: string;
  tags: string[];
};
type Service = { title: string; summary: string; points: string[] };
type Rate = { title: string; range: string; body: string };

export const locales: Locale[] = ["es", "en"];

export const routes: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "/es",
    about: "/es/sobre-mi",
    projects: "/es/proyectos",
    services: "/es/servicios",
    contact: "/es/contacto",
  },
  en: {
    home: "/en",
    about: "/en/about",
    projects: "/en/projects",
    services: "/en/services",
    contact: "/en/contact",
  },
};

const esCaseStudies: CaseStudy[] = [
  {
    title: "Integraciones con suppliers internacionales",
    scope: "Wordans",
    system: "Operaciones ecommerce",
    summary:
      "Integración de flujos de datos con proveedores para sincronización de catálogo, stock, precios y automatización de pedidos en mercados internacionales.",
    responsibilities: [
      "Procesamiento de feeds XML, CSV e integraciones via API.",
      "Mapeo de productos, stock y precios externos dentro de flujos operativos.",
      "Automatización de operaciones repetitivas de importacion y exportacion.",
      "Mejora de validaciones y tratamiento de excepciones operativas.",
    ],
    outcome:
      "Reducción de trabajo manual y mayor consistencia en datos de catálogo, stock y precios usados por equipos ecommerce.",
    tags: ["Suppliers", "XML", "CSV", "REST APIs"],
  },
  {
    title: "Integraciones logísticas y carriers",
    scope: "Wordans",
    system: "Operaciones de envio",
    summary:
      "Desarrollo y mantenimiento de integraciones con carriers internacionales como DPD, UPS, Mondial Relay, Purolator y otros operadores logisticos.",
    responsibilities: [
      "Tracking de envíos y sincronización de estádos logisticos.",
      "Integración de cálculo de costes e impresión de etiquetas.",
      "Conexión de pedidos backend con sistemas externos de transporte.",
      "Soporte a equipos operativos con mejor visibilidad logística.",
    ],
    outcome:
      "Operaciones ecommerce internacionales con menos pasos manuales y mayor consistencia backend.",
    tags: ["Logística", "DPD", "UPS", "Tracking"],
  },
  {
    title: "Pagos y fiabilidad del checkout",
    scope: "Wordans",
    system: "Checkout crítico para ingresos",
    summary:
      "Trabajo en integraciones y mantenimiento de sistemas de pago internacionales, incluyendo Stripe, Authorize.net, Apple Pay y Google Pay.",
    responsibilities: [
      "Implementación y mantenimiento de integraciones backend de pago.",
      "Gestión de validaciones, errores y casos límite del checkout.",
      "Mejoras de experiencia de usuario en flujos de pago.",
      "Trabajo con procesos backend sensibles a seguridad.",
    ],
    outcome:
      "Mayor fiabilidad en flujos de pago que impactan directamente en conversión e ingresos.",
    tags: ["Pagos", "Stripe", "Apple Pay", "Google Pay", "Checkout"],
  },
  {
    title: "Salesforce y automatización comercial",
    scope: "Wordans",
    system: "Operaciones comerciales",
    summary:
      "Desarrollo de integraciones Salesforce para creación de leads, sincronización de datos y automatización entre sístemas internos y procesos comerciales.",
    responsibilities: [
      "Automatización de creación de leads y flujos comerciales.",
      "Sincronización de datos entre sístemas internos y Salesforce.",
      "Construcción de flujos para mejorar productividad de ventas.",
      "Reducción de traspasos manuales entre sístemas de negocio.",
    ],
    outcome:
      "Equipos comerciales con acceso más rápido a datos más limpios y menos trabajo repetitivo.",
    tags: ["Salesforce", "Leads", "Automatización", "Sales Ops"],
  },
  {
    title: "Herramientas internas y automatización operativa",
    scope: "Wordans",
    system: "Productividad backoffice",
    summary:
      "Construcción de herramientas internas para ventas, atención al cliente, operaciones y producción, centralizando información y automatizando trabajo repetitivo.",
    responsibilities: [
      "Creación de flujos de backoffice para varios departamentos.",
      "Automatización de procesamiento masivo de datos y reportes.",
      "Mejora de visibilidad sobre información operativa.",
      "Mantenimiento de herramientas usadas en procesos diarios.",
    ],
    outcome:
      "Departamentos con menos esfuerzo manual y datos operativos mas consistentes.",
    tags: ["Backoffice", "Automatización", "Reporting", "Operaciones"],
  },
  {
    title: "IA aplicada a procesos de negocio",
    scope: "Wordans",
    system: "Operaciones asistidas por IA",
    summary:
      "Integración de APIs de IA en procesos reales: generación de contenido, traducción multidioma, clasificación y herramientas internas asistidas.",
    responsibilities: [
      "Conexión de APIs de modelos de lenguaje con flujos operativos existentes.",
      "Automatización de descripciones de producto y traducción.",
      "Clasificación asistida por IA y tooling operativo.",
      "IA planteada como automatización práctica, no como investigacion.",
    ],
    outcome:
      "Mayor capacidad operativa dentro de procesos existentes sin cambiar el posicionamiento técnico hacia AI Engineer puro.",
    tags: ["APIs de IA", "Traducción", "Contenido"],
  },
  {
    title: "Plataforma premium para Arcanmotors",
    scope: "Freelance",
    system: "Entrega completa de producto",
    summary:
      "Diseño, desarrollo, despliegue y mantenimiento de una plataforma completa para un concesionario de vehículos premium.",
    responsibilities: [
      "Ownership de arquitectura backend y entrega del producto.",
      "Backoffice, gestión de vehículos y procesos de imágenes.",
      "SEO técnico, AWS, Nginx y deployments.",
      "Comunicación directa con cliente y evolución del producto.",
    ],
    outcome:
      "Demostración de ownership freelance end-to-end: arquitectura, implementación, despliegue en producción y mantenimiento.",
    tags: ["Ruby on Rails", "AWS", "Nginx", "SEO", "Freelance"],
  },
];

const enCaseStudies: CaseStudy[] = [
  {
    title: "International supplier integrations",
    scope: "Wordans",
    system: "Ecommerce operations",
    summary:
      "Integrated supplier data flows for catalog synchronization, stock updates, pricing and operational order automation across international markets.",
    responsibilities: [
      "Processed XML, CSV and API-based supplier feeds.",
      "Mapped external product, stock and pricing data into operational flows.",
      "Automated repetitive import and export operations.",
      "Improved reliability around data validation and operational exceptions.",
    ],
    outcome:
      "Reduced manual work and improved consistency in catalog, stock and pricing data used by ecommerce teams.",
    tags: ["Suppliers", "XML", "CSV", "REST APIs"],
  },
  {
    title: "Logistics and carrier integrations",
    scope: "Wordans",
    system: "Shipping operations",
    summary:
      "Built and maintained integrations with international carriers such as DPD, UPS, Mondial Relay, Purolator and other logistics providers.",
    responsibilities: [
      "Handled shipment tracking and logistics state synchronization.",
      "Integrated transport cost calculation and labeling workflows.",
      "Connected backend order flows with external carrier systems.",
      "Supported operational teams with clearer logistics visibility.",
    ],
    outcome:
      "Helped ecommerce operations manage international shipping flows with fewer manual steps and better backend consistency.",
    tags: ["Logistics", "DPD", "UPS", "Tracking"],
  },
  {
    title: "Payments and checkout reliability",
    scope: "Wordans",
    system: "Revenue-critical checkout",
    summary:
      "Worked on payment integrations and maintenance for international checkout flows, including Stripe, Authorize.net, Apple Pay and Google Pay.",
    responsibilities: [
      "Implemented and maintained backend payment integrations.",
      "Handled validation, error management and checkout edge cases.",
      "Supported user experience improvements around payment flows.",
      "Worked with security-sensitive backend processes.",
    ],
    outcome:
      "Improved the dependability of payment flows that directly affect conversión and revenue.",
    tags: ["Payments", "Stripe", "Apple Pay", "Google Pay", "Checkout"],
  },
  {
    title: "Salesforce and commercial automation",
    scope: "Wordans",
    system: "Sales operations",
    summary:
      "Developed Salesforce integrations for lead creation, data synchronization and automation between internal systems and sales workflows.",
    responsibilities: [
      "Automated lead creation and commercial data flows.",
      "Synchronized data between internal systems and Salesforce.",
      "Built workflows that supported sales team productivity.",
      "Reduced manual handoffs between business systems.",
    ],
    outcome:
      "Gave commercial teams faster access to cleaner data and reduced repetitive operational work.",
    tags: ["Salesforce", "Leads", "Automation", "Sales Ops"],
  },
  {
    title: "Internal tools and operational automation",
    scope: "Wordans",
    system: "Backoffice productivity",
    summary:
      "Built internal tools used by sales, customer support, operations and production teams to centralize information and automate repetitive work.",
    responsibilities: [
      "Created backoffice workflows for multiple departments.",
      "Automated bulk data processing and report generation.",
      "Improved visibility into operational information.",
      "Maintained tools used in day-to-day business processes.",
    ],
    outcome:
      "Helped departments work with less manual effort and more consistent operational data.",
    tags: ["Backoffice", "Automation", "Reporting", "Operations"],
  },
  {
    title: "Applied AI for business workflows",
    scope: "Wordans",
    system: "AI-assisted operations",
    summary:
      "Integrated AI APIs into real business processes, including content generation, multilingual translation, classification and internal assisted tools.",
    responsibilities: [
      "Connected language-model APIs to existing operational workflows.",
      "Automated product description and translation processes.",
      "Added AI-assisted classification and operational tooling.",
      "Kept AI framed as práctical workflow automation.",
    ],
    outcome:
      "Created AI leverage inside existing operations without repositioning the engineering role as pure AI research.",
    tags: ["AI APIs", "Translation", "Content"],
  },
  {
    title: "Arcanmotors premium vehicle platform",
    scope: "Freelance",
    system: "Full product delivery",
    summary:
      "Designed, built, deployed and maintained a complete platform for a premium vehicle dealership.",
    responsibilities: [
      "Owned backend architecture and product delivery.",
      "Built the backoffice, vehicle management and image workflows.",
      "Handled technical SEO, AWS, Nginx and deployments.",
      "Communicated directly with the client and evolved the product.",
    ],
    outcome:
      "Demonstrated end-to-end freelance ownership: architecture, implementation, production deployment and maintenance.",
    tags: ["Ruby on Rails", "AWS", "Nginx", "SEO", "Freelance"],
  },
];

export const content = {
  es: {
    seo: {
      defaultTitle: "Marc Armillas | Backend Engineer for Business Systems",
      defaultDescription:
        "Consultor backend en Barcelona para sistemas críticos de negocio, integraciones, ecommerce, automatización e IA aplicada.",
    },
    nav: {
      role: "Backend, integraciones y automatización",
      about: "Sobre mí",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      cta: "Agendar una consulta técnica",
      language: "Idioma",
      primary: "Navegacion principal",
    },
    footer: {
      eyebrow: "Disponible para proyectos freelance seleccionados",
      title:
        "Sistemas críticos de negocio, integraciones y automatización para equipos que necesitan ejecución fiable.",
      body:
        "Basado en Barcelona, trabajando en remoto con empresas europeas, equipos SaaS y negocios ecommerce.",
    },
    home: {
      seoTitle:
        "Backend Engineer para Sistemas Críticos, Integraciones y Automatización | Marc Armillas",
      seoDescription:
        "Contrata a Marc Armillas para construir, conectar y automatizar sistemas críticos de negocio: backend, APIs, ecommerce, Salesforce, pagos, logística e IA aplicada.",
      eyebrow: "Backend Engineer para integraciones y automatización",
      title: "Construyo, conecto y automatizo sistemas críticos de negocio.",
      lead:
        "Ayudo a equipos SaaS y ecommerce a conectar sistemas, automatizar operaciones y mantener backend crítico funcionando.",
      primaryCta: "Hablar de un proyecto",
      secondaryCta: "Arreglar una integración",
      metricsLabel: "Resumen profesional",
      metrics: [
        {
          value: "+4 años",
          label:
            "Resolviendo problemas reales en entornos de producción.",
        },
        {
          value: "B2B + B2C",
          label: "Experiencia en ecommerce internacional con múltiples mercados.",
        },
        {
          value: "Stack principal",
          label:
            "Ruby on Rails como base para backend fiable y mantenible.",
        },
        {
          value: "IA aplicada",
          label:
            "Modelos de lenguaje integrados en procesos reales con impacto operativo.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Experiencia principal",
        title:
          "Más de cuatro años resolviendo problemas reales en ecommerce internacional.",
        body:
          "Trabajo real en operaciones B2B y B2C: proveedores, logística, checkout, Salesforce, herramientas internas, automatización y flujos asistidos por IA.",
        cta: "Explorar el trabajo",
      },
      conversion: {
        eyebrow: "Confianza",
        title:
          "Basado en Barcelona, trabajando con equipos europeos.",
        body:
          "Trabajo en remoto, cómodo con sistemas legacy, flujos críticos y mantenimiento en producción. Puedo avanzar de forma autónoma, con poca supervisión y comunicación clara.",
      },
    },
    about: {
      seoTitle: "Sobre Marc Armillas | Backend, Integraciones y Automatización",
      seoDescription:
        "Marc Armillas ayuda a empresas a construir, conectar y automatizar sistemas críticos de negocio con backend, integraciones, ecommerce, Salesforce, pagos, logística e IA aplicada.",
      eyebrow: "Sobre mí",
      title: "Construyo, conecto y automatizo sistemas críticos de negocio.",
      lead:
        "Trabajo donde las operaciones dependen del software: integraciones, ecommerce, pagos, logística, Salesforce, automatización interna e IA aplicada.",
      profile: {
        eyebrow: "Perfil profesional",
        title: "Consultor backend para operaciones complejas.",
        body:
          "Mi trabajo consiste en entender procesos de negocio, conectar herramientas y entregar soluciónes que reduzcan fricción operativa.",
      },
      workTitle: "Cómo trabajo",
      workPoints: [
        "Empiezo por el proceso de negocio, no por la tecnología.",
        "Mapeo sistemas, datos, dependencias y puntos de fallo antes de implementar.",
        "Construyo soluciónes mantenibles, observables y preparadas para evolucionar.",
        "Comunico riesgos, tradeoffs y progreso de forma clara para equipos técnicos y de negocio.",
      ],
      problemsEyebrow: "Problemas que resuelvo",
      problemsTitle: "Backend, integraciones y automatización con impacto operativo",
      problems: [
        {
          title: "Sistemas que no se hablan entre sí",
          body:
            "Conecto APIs, proveedores, Salesforce, pagos, logística y herramientas internas para reducir trabajo manual y errores operativos.",
        },
        {
          title: "Operaciones ecommerce complejas",
          body:
            "Ayudo con catálogos, stock, precios, checkout, pedidos, carriers y backoffice en negocios donde la operación depende del backend.",
        },
        {
          title: "Procesos manuales repetitivos",
          body:
            "Convierto tareas recurrentes en automatizaciones, reportes, sincronizaciones y herramientas internas fiables.",
        },
        {
          title: "Flujos comerciales en Salesforce",
          body:
            "Automatizo creación de leads, sincronización de datos y procesos comerciales entre Salesforce y sistemas internos.",
        },
        {
          title: "IA aplicada a negocio",
          body:
            "Integro APIs de IA donde aceleran contenido, traducción, clasificación o asistencia operativa dentro de procesos existentes.",
        },
        {
          title: "Backend en producción",
          body:
            "Ruby on Rails es mi stack principal, pero el objetivo es resolver el problema operativo completo.",
        },
      ],
      companies: {
        eyebrow: "Por qué empresas trabajan conmigo",
        title: "Puedo moverme entre negocio, operaciones y código.",
        body:
          "Soy útil cuando el reto exige entender la operación, coordinar varias plataformas, proteger datos críticos y entregar una solución que el equipo pueda usar en producción.",
      },
      usefulTitle: "Especialmente útil para",
      usefulPoints: [
        "Startups SaaS y ecommerce con integraciones pendientes o frágiles.",
        "Empresas con sistemas legacy que necesitan automatizar sin parar la operación.",
        "Equipos que dependen de Salesforce, pagos, carriers, proveedores o herramientas internas.",
        "Founders, CTOs y ecommerce managers que necesitan ejecución autónoma y criterio técnico.",
      ],
    },
    projects: {
      seoTitle:
        "Casos: Ecommerce, Integraciones, Automatización e IA | Marc Armillas",
      seoDescription:
        "Casos de estudio confidenciales de Wordans y Arcanmotors sobre ecommerce, suppliers, logística, pagos, Salesforce, herramientas internas, automatización e IA aplicada.",
      eyebrow: "Casos de estudio",
      title: "Problemas reales convertidos en casos de negocio.",
      lead:
        "Una muestra de problemas de negocio resueltos en ecommerce, operaciones, pagos, logística, automatización e IA aplicada.",
      responsibilities: "Responsabilidades",
      outcome: "Resultado de negocio",
    },
    services: {
      seoTitle:
        "Integraciones API, Automatización y Backend para Negocio | Marc Armillas",
      seoDescription:
        "Servicios de backend, integraciones API, ecommerce, Salesforce, pagos, logística, automatización e IA aplicada para operaciones complejas.",
      eyebrow: "Servicios",
      title: "Servicios",
      pageTitle: "Backend, integraciones y automatización para operaciones complejas.",
      lead:
        "Ayuda práctica para conectar sistemas, automatizar operaciones y estabilizar procesos que afectan a ingresos, datos o productividad.",
    },
    contact: {
      seoTitle: "Contacto Marc Armillas | Backend, Integraciones y Automatización",
      seoDescription:
        "Contacta con Marc Armillas para backend, integraciones API, ecommerce, Salesforce, pagos, logística, automatización e IA aplicada.",
      eyebrow: "Contacto",
      title: "Cuéntame qué necesitas construir, arreglar o automatizar.",
      lead:
        "El primer mensaje más útil incluye objetivo de negocio, sistemas implicados, urgencia y dónde está bloqueado el proyecto.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        budget: "Presupuesto",
        budgetPlaceholder: "Selecciona un rango",
        budgetOptions: [
          "Hablar de un proyecto",
          "Agendar una consulta técnica",
          "Automatizar un flujo de trabajo",
          "Arreglar una integración",
        ],
        message: "Contexto del proyecto",
        submit: "Enviar consulta",
        sending: "Enviando...",
        success: "Gracias. Tu consulta se ha enviado correctamente por email.",
        error: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      },
      fit: {
        eyebrow: "Mejor encaje",
        title: "Proyectos donde puedo aportar más valor",
        points: [
          "Sistemas backend que necesitan criterio técnico y ejecución autónoma.",
          "Ecommerce con suppliers, pagos, logística o complejidad backoffice.",
          "Empresas que quieren sustituir procesos manuales por automatización.",
          "Equipos que integran Salesforce, APIs externas o procesos asistidos por IA.",
        ],
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnología al servicio de la operación.",
      lead:
        "Trabajo con un stack compacto y probado para construir, conectar y mantener sistemas de negocio en producción.",
      groups: {
        Backend: ["Ruby on Rails", "PostgreSQL", "Redis"],
        Integraciones: ["REST APIs", "Salesforce", "Pagos", "Carriers"],
        Operaciones: ["Herramientas internas", "Reporting", "Flujos de datos"],
        "IA aplicada": ["APIs de IA", "Traducción", "Clasificación"],
      },
    },
    rates: {
      eyebrow: "Disponibilidad",
      title: "Disponible para proyectos con alcance claro",
      lead:
        "Disponible para proyectos freelance acotados, consultoría técnica y soporte continuo en sistemas backend, integraciones, ecommerce y automatización.",
      items: [
        {
          title: "Proyectos freelance acotados",
          range: "Alcance definido",
          body:
            "Integraciones, automatizaciones o mejoras backend con objetivos y entregables claros.",
        },
        {
          title: "Agendar una consulta técnica",
          range: "Diagnóstico y dirección",
          body:
            "Auditorías, decisiones de arquitectura, viabilidad de integraciones y priorización técnica para equipos de producto u operaciones.",
        },
        {
          title: "Automatizar un flujo de trabajo",
          range: "Acompañamiento operativo",
          body:
            "Mantenimiento evolutivo, mejoras de fiabilidad y soporte para sistemas que conectan procesos críticos de negocio.",
        },
        {
          title: "Arreglar una integración",
          range: "Problemas concretos",
          body:
            "Ayuda para desbloquear APIs, Salesforce, pagos, logística, datos o automatizaciones que afectan a la operación.",
        },
      ] satisfies Rate[],
    },
    caseStudies: esCaseStudies,
    servicesList: [
      {
        title: "Integraciones API y sistemas",
        summary:
          "Conexión limpia de plataformas externas con flujos de datos resilientes y visibilidad operativa.",
        points: ["REST APIs, pipelines XML y CSV.", "Suppliers, carriers, pagos y Salesforce.", "Errores, reintentos, validaciones y monitorización."],
      },
      {
        title: "Automatización de negocio",
        summary:
          "Automatización de tareas operativas, sincronizaciones y procesos internos fiables.",
        points: ["Herramientas internas para ventas, soporte y operaciones.", "Procesamiento de datos, reporting y sincronización.", "Flujos automatizados para ecommerce y SaaS."],
      },
      {
        title: "Ingeniería de sistemas ecommerce",
        summary:
          "Mejora de los flujos que sostienen operaciones ecommerce internacionales.",
        points: ["Sincronización de catálogo, stock y precios.", "Checkout, pagos, pedidos y logística.", "Herramientas operativas para comercio de volumen."],
      },
      {
        title: "Automatización con IA aplicada",
        summary:
          "IA aplicada donde mejora procesos, contenido, traducción, clasificación o asistencia interna.",
        points: ["APIs de IA dentro de sistemas existentes.", "Generación de contenido y flujos multidioma.", "Automatización asistida con revisión humana."],
      },
      {
        title: "Desarrollo Ruby on Rails",
        summary:
          "Desarrollo y mantenimiento de aplicaciones Ruby on Rails cuando el backend necesita ser fiable y evolucionable.",
        points: ["Nuevas funcionalidades y flujos backend.", "Mantenimiento y modernización de aplicaciones existentes.", "Rendimiento, fiabilidad y soporte de producción."],
      },
      {
        title: "Consultoría técnica",
        summary:
          "Claridad de arquitectura, plan de entrega y camino de implementación antes de comprometer recursos.",
        points: ["Auditorías técnicas y definición de roadmap.", "Análisis de viabilidad y riesgos de integración.", "Ejecución senior para proyectos freelance acotados."],
      },
    ] satisfies Service[],
  },
  en: {
    seo: {
      defaultTitle: "Marc Armillas | Backend Engineer for Business Systems",
      defaultDescription:
        "Backend consultant in Barcelona for business-critical systems, integrations, ecommerce operations, automation and applied AI.",
    },
    nav: {
      role: "Backend, integrations and automation",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      cta: "Book a technical consultation",
      language: "Language",
      primary: "Primary navigation",
    },
    footer: {
      eyebrow: "Available for selected freelance projects",
      title:
        "Business-critical systems, integrations and automation for teams that need dependable execution.",
      body:
        "Based in Barcelona, working remotely with European companies, SaaS teams and ecommerce businesses.",
    },
    home: {
      seoTitle:
        "Backend Engineer for Business-Critical Systems, Integrations and Automation | Marc Armillas",
      seoDescription:
        "Hire Marc Armillas to build, connect and automate business-critical systems across backend engineering, APIs, ecommerce, Salesforce, payments, logistics and applied AI.",
      eyebrow: "Backend Engineer for integrations and automation",
      title: "I build, connect and automate business-critical systems.",
      lead:
        "I help SaaS and ecommerce teams connect systems, automate operations and keep critical backend work running.",
      primaryCta: "Discuss a project",
      secondaryCta: "Fix an integration issue",
      metricsLabel: "Professional highlights",
      metrics: [
        {
          value: "4+ years",
          label: "Solving real problems in production environments.",
        },
        {
          value: "B2B + B2C",
          label: "International ecommerce experience across multiple markets.",
        },
        {
          value: "Main stack",
          label: "Ruby on Rails as the base for reliable, maintainable backend work.",
        },
        {
          value: "AI applied",
          label: "Language models integrated into real processes with operational impact.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Main experience",
        title: "More than four years solving real ecommerce problems.",
        body:
          "Real work across B2B and B2C operations: suppliers, logistics, checkout, Salesforce, internal tools, automation and AI-assisted workflows.",
        cta: "Explore the work",
      },
      conversion: {
        eyebrow: "Trust",
        title:
          "Based in Barcelona, working with European teams.",
        body:
          "I work remotely, I am comfortable with legacy systems, business-critical workflows and production maintenance, and I can move independently with low supervisión and clear communication.",
      },
    },
    about: {
      seoTitle: "About Marc Armillas | Backend, Integrations and Automation",
      seoDescription:
        "Marc Armillas helps companies build, connect and automate business-critical systems across backend engineering, API integrations, ecommerce, Salesforce, payments, logistics and applied AI.",
      eyebrow: "About",
      title: "I build, connect and automate business-critical systems.",
      lead:
        "I work where operations depend on software: integrations, ecommerce, payments, logistics, Salesforce, internal automation and applied AI.",
      profile: {
        eyebrow: "Professional profile",
        title: "Backend consultant for operationally complex businesses.",
        body:
          "My work is about understanding business processes, connecting tools and delivering solutions that reduce operational friction.",
      },
      workTitle: "How I work",
      workPoints: [
        "I start with the business process, not the technology choice.",
        "I map systems, data, dependencies and failure points before implementation.",
        "I build maintainable solutions that can be observed, operated and evolved.",
        "I communicate risks, tradeoffs and progress clearly across technical and business teams.",
      ],
      problemsEyebrow: "Problems I solve",
      problemsTitle: "Backend, integrations and automation with operational impact",
      problems: [
        {
          title: "Systems that do not talk to each other",
          body:
            "I connect APIs, suppliers, Salesforce, payments, logistics and internal tools to reduce manual work and operational errors.",
        },
        {
          title: "Complex ecommerce operations",
          body:
            "I help with catalogs, stock, pricing, checkout, orders, carriers and backoffice workflows where operations depend on backend reliability.",
        },
        {
          title: "Repetitive manual processes",
          body:
            "I turn recurring work into automation, reports, synchronizations and dependable internal tools.",
        },
        {
          title: "Salesforce workflows",
          body:
            "I automate lead creation, data synchronization and commercial processes between Salesforce and internal systems.",
        },
        {
          title: "Applied AI for business operations",
          body:
            "I integrate AI APIs where they accelerate content, translation, classification or assisted operations inside existing workflows.",
        },
        {
          title: "Backend in production",
          body:
            "Ruby on Rails is my main stack, but the goal is solving the full operational problem.",
        },
      ],
      companies: {
        eyebrow: "Why companies work with me",
        title: "I can move between business, operations and code.",
        body:
          "I am useful when the challenge requires understanding operations, coordinating multiple platforms, protecting critical data and delivering something the team can run in production.",
      },
      usefulTitle: "Especially useful for",
      usefulPoints: [
        "SaaS and ecommerce companies with pending or fragile integrations.",
        "Companies with legacy systems that need automation without stopping operations.",
        "Teams that depend on Salesforce, payments, carriers, suppliers or internal tools.",
        "Founders, CTOs and ecommerce managers who need autonomous execution and technical judgment.",
      ],
    },
    projects: {
      seoTitle:
        "Case Studies: Ecommerce, Integrations, Automation and AI | Marc Armillas",
      seoDescription:
        "Confidential case studies from Wordans and Arcanmotors covering ecommerce, supplier integrations, logistics, payments, Salesforce, internal tools, automation and applied AI.",
      eyebrow: "Case studies",
      title: "Real problems translated into business cases.",
      lead:
        "A sample of business problems solved across ecommerce, operations, payments, logistics, automation and applied AI.",
      responsibilities: "Responsibilities",
      outcome: "Business outcome",
    },
    services: {
      seoTitle: "API Integrations, Automation and Backend Engineering | Marc Armillas",
      seoDescription:
        "Backend engineering, API integrations, ecommerce systems, Salesforce workflows, payments, logistics, automation and applied AI for complex operations.",
      eyebrow: "Services",
      title: "Services",
      pageTitle: "Backend, integrations and automation for complex operations.",
      lead:
        "Practical help connecting systems, automating operations and stabilizing processes that affect revenue, data or productivity.",
    },
    contact: {
      seoTitle: "Contact Marc Armillas | Backend, Integrations and Automation",
      seoDescription:
        "Contact Marc Armillas for backend engineering, API integrations, ecommerce, Salesforce, payments, logistics, automation and applied AI projects.",
      eyebrow: "Contact",
      title: "Tell me what you need to build, fix or automate.",
      lead:
        "The most useful first message includes the business goal, systems involved, urgency and where the project is blocked.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        budget: "Budget",
        budgetPlaceholder: "Select a range",
        budgetOptions: [
          "Discuss a project",
          "Book a technical consultation",
          "Automate a workflow",
          "Fix an integration issue",
        ],
        message: "Project context",
        submit: "Send inquiry",
        sending: "Sending...",
        success: "Thanks. Your inquiry has been sent by email.",
        error: "The message could not be sent. Please try again.",
      },
      fit: {
        eyebrow: "Best fit",
        title: "Projects where I can create the most value",
        points: [
          "Backend systems that need technical judgment and autonomous execution.",
          "Ecommerce systems with suppliers, payments, logistics or backoffice complexity.",
          "Companies replacing manual workflows with automation.",
          "Teams integrating Salesforce, external APIs or AI-assisted processes.",
        ],
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Technology in service of the operation.",
      lead:
        "I use a compact, proven stack to build, connect and maintain business systems in production.",
      groups: {
        Backend: ["Ruby on Rails", "PostgreSQL", "Redis"],
        Integrations: ["REST APIs", "Salesforce", "Payments", "Carriers"],
        Operations: ["Internal tools", "Reporting", "Data workflows"],
        "Applied AI": ["AI APIs", "Translation", "Classification"],
      },
    },
    rates: {
      eyebrow: "Availability",
      title: "Available for clearly scoped work",
      lead:
        "Available for scoped freelance projects, technical consulting and ongoing support across backend systems, integrations, ecommerce operations and automation.",
      items: [
        {
          title: "Discuss a project",
          range: "Defined scope",
          body:
            "Integrations, automations or backend improvements with clear goals and deliverables.",
        },
        {
          title: "Book a technical consultation",
          range: "Diagnosis and direction",
          body:
            "Audits, architecture decisions, integration feasibility and technical prioritization for product or operations teams.",
        },
        {
          title: "Automate a workflow",
          range: "Operational support",
          body:
            "Evolutionary maintenance, reliability improvements and support for systems that connect critical business processes.",
        },
        {
          title: "Fix an integration issue",
          range: "Specific blockers",
          body:
            "Help unblocking APIs, Salesforce, payments, logistics, data flows or automations that affect operations.",
        },
      ] satisfies Rate[],
    },
    caseStudies: enCaseStudies,
    servicesList: [
      {
        title: "API & System Integrations",
        summary:
          "Connect external platforms cleanly, with resilient data flows and operational visibility.",
        points: ["REST APIs, XML and CSV pipelines.", "Suppliers, carriers, payment providers and Salesforce.", "Error handling, retries, validation and monitoring."],
      },
      {
        title: "Business Automation",
        summary:
          "Automate operational tasks, synchronizations and internal processes that need to run reliably.",
        points: ["Internal tools for sales, support and operations.", "Data processing, reporting and synchronization.", "Automated workflows for ecommerce and SaaS teams."],
      },
      {
        title: "Ecommerce Systems Engineering",
        summary:
          "Improve the flows that keep international ecommerce operations moving.",
        points: ["Catalog, stock and price synchronization.", "Checkout, payments, orders and logistics flows.", "Operational tools for high-volume commerce."],
      },
      {
        title: "Applied AI Automation",
        summary:
          "Apply AI where it improves processes, content, translation, classification or internal assistance.",
        points: ["AI API integrations inside existing systems.", "Automated content generation and multilingual workflows.", "Human-reviewed automation for business processes."],
      },
      {
        title: "Ruby on Rails Development",
        summary:
          "Build and maintain Ruby on Rails applications when the backend needs to be reliable and evolvable.",
        points: ["New backend features and workflows.", "Maintenance and modernization of existing applications.", "Performance, reliability and production support."],
      },
      {
        title: "Technical Consulting",
        summary:
          "Clarify architecture, delivery plans and implementation paths before the team commits.",
        points: ["Technical audits and roadmap definition.", "Integration feasibility and risk analysis.", "Senior execution for scoped freelance projects."],
      },
    ] satisfies Service[],
  },
} as const;

export function pathFor(locale: Locale, page: PageKey) {
  return routes[locale][page];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
