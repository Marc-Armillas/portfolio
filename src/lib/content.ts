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
      "Integracion de flujos de datos con proveedores para sincronizacion de catalogo, stock, precios y automatizacion de pedidos en mercados internacionales.",
    responsibilities: [
      "Procesamiento de feeds XML, CSV e integraciones via API.",
      "Mapeo de productos, stock y precios externos dentro de workflows backend.",
      "Automatizacion de operaciones repetitivas de importacion y exportacion.",
      "Mejora de validaciones y tratamiento de excepciones operativas.",
    ],
    outcome:
      "Reduccion de trabajo manual y mayor consistencia en datos de catalogo, stock y precios usados por equipos ecommerce.",
    tags: ["Rails", "Suppliers", "XML", "CSV", "REST APIs"],
  },
  {
    title: "Integraciones logisticas y carriers",
    scope: "Wordans",
    system: "Operaciones de envio",
    summary:
      "Desarrollo y mantenimiento de integraciones con carriers internacionales como DPD, UPS, Mondial Relay, Purolator y otros operadores logisticos.",
    responsibilities: [
      "Tracking de envios y sincronizacion de estados logisticos.",
      "Integracion de calculo de costes e impresion de etiquetas.",
      "Conexion de pedidos backend con sistemas externos de transporte.",
      "Soporte a equipos operativos con mejor visibilidad logistica.",
    ],
    outcome:
      "Operaciones ecommerce internacionales con menos pasos manuales y mayor consistencia backend.",
    tags: ["Rails", "Logistica", "DPD", "UPS", "Tracking"],
  },
  {
    title: "Pagos y fiabilidad del checkout",
    scope: "Wordans",
    system: "Checkout critico para ingresos",
    summary:
      "Trabajo en integraciones y mantenimiento de sistemas de pago internacionales, incluyendo Stripe, Authorize.net, Apple Pay y Google Pay.",
    responsibilities: [
      "Implementacion y mantenimiento de integraciones backend de pago.",
      "Gestion de validaciones, errores y casos limite del checkout.",
      "Mejoras de experiencia de usuario en flujos de pago.",
      "Trabajo con procesos backend sensibles a seguridad.",
    ],
    outcome:
      "Mayor fiabilidad en flujos de pago que impactan directamente en conversion e ingresos.",
    tags: ["Pagos", "Stripe", "Apple Pay", "Google Pay", "Checkout"],
  },
  {
    title: "Salesforce y automatizacion comercial",
    scope: "Wordans",
    system: "Operaciones comerciales",
    summary:
      "Desarrollo de integraciones Salesforce para creacion de leads, sincronizacion de datos y automatizacion entre sistemas internos y procesos comerciales.",
    responsibilities: [
      "Automatizacion de creacion de leads y flujos comerciales.",
      "Sincronizacion de datos entre sistemas internos y Salesforce.",
      "Construccion de workflows para mejorar productividad de ventas.",
      "Reduccion de traspasos manuales entre sistemas de negocio.",
    ],
    outcome:
      "Equipos comerciales con acceso mas rapido a datos mas limpios y menos trabajo repetitivo.",
    tags: ["Salesforce", "Leads", "Automatizacion", "Rails", "Sales Ops"],
  },
  {
    title: "Herramientas internas y automatizacion operativa",
    scope: "Wordans",
    system: "Productividad backoffice",
    summary:
      "Construccion de herramientas internas para ventas, atencion al cliente, operaciones y produccion, centralizando informacion y automatizando trabajo repetitivo.",
    responsibilities: [
      "Creacion de workflows backoffice para varios departamentos.",
      "Automatizacion de procesamiento masivo de datos y reportes.",
      "Mejora de visibilidad sobre informacion operativa.",
      "Mantenimiento de herramientas usadas en procesos diarios.",
    ],
    outcome:
      "Departamentos con menos esfuerzo manual y datos operativos mas consistentes.",
    tags: ["Backoffice", "Automatizacion", "Reporting", "Operaciones"],
  },
  {
    title: "IA aplicada a procesos de negocio",
    scope: "Wordans",
    system: "Operaciones asistidas por IA",
    summary:
      "Integracion de APIs de IA en procesos reales: generacion de contenido, traduccion multidioma, clasificacion y herramientas internas asistidas.",
    responsibilities: [
      "Conexion de APIs de modelos de lenguaje con workflows operativos existentes.",
      "Automatizacion de descripciones de producto y traduccion.",
      "Clasificacion asistida por IA y tooling operativo.",
      "IA planteada como automatizacion practica, no como investigacion.",
    ],
    outcome:
      "Mayor capacidad operativa dentro de procesos existentes sin cambiar el posicionamiento tecnico hacia AI Engineer puro.",
    tags: ["APIs de IA", "Traduccion", "Contenido", "Rails"],
  },
  {
    title: "Plataforma premium para Arcanmotors",
    scope: "Freelance",
    system: "Entrega completa de producto",
    summary:
      "Diseno, desarrollo, despliegue y mantenimiento de una plataforma completa para un concesionario de vehiculos premium.",
    responsibilities: [
      "Ownership de arquitectura y backend Ruby on Rails.",
      "Backoffice, gestion de vehiculos y flujos de imagenes.",
      "SEO tecnico, AWS, Nginx y deployments.",
      "Comunicacion directa con cliente y evolucion del producto.",
    ],
    outcome:
      "Demostracion de ownership freelance end-to-end: arquitectura, implementacion, despliegue en produccion y mantenimiento.",
    tags: ["Rails", "AWS", "Nginx", "SEO", "Freelance"],
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
      "Mapped external product, stock and pricing data into backend workflows.",
      "Automated repetitive import and export operations.",
      "Improved reliability around data validation and operational exceptions.",
    ],
    outcome:
      "Reduced manual work and improved consistency in catalog, stock and pricing data used by ecommerce teams.",
    tags: ["Rails", "Suppliers", "XML", "CSV", "REST APIs"],
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
    tags: ["Rails", "Logistics", "DPD", "UPS", "Tracking"],
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
      "Improved the dependability of payment flows that directly affect conversion and revenue.",
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
    tags: ["Salesforce", "Leads", "Automation", "Rails", "Sales Ops"],
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
      "Kept AI framed as practical workflow automation.",
    ],
    outcome:
      "Created AI leverage inside existing operations without repositioning the engineering role as pure AI research.",
    tags: ["AI APIs", "Translation", "Content", "Rails"],
  },
  {
    title: "Arcanmotors premium vehicle platform",
    scope: "Freelance",
    system: "Full product delivery",
    summary:
      "Designed, built, deployed and maintained a complete platform for a premium vehicle dealership.",
    responsibilities: [
      "Owned application architecture and Rails backend development.",
      "Built the backoffice, vehicle management and image workflows.",
      "Handled technical SEO, AWS, Nginx and deployments.",
      "Communicated directly with the client and evolved the product.",
    ],
    outcome:
      "Demonstrated end-to-end freelance ownership: architecture, implementation, production deployment and maintenance.",
    tags: ["Rails", "AWS", "Nginx", "SEO", "Freelance"],
  },
];

export const content = {
  es: {
    seo: {
      defaultTitle: "Marc Armillas | Backend Engineer for Business Systems",
      defaultDescription:
        "Backend engineer en Barcelona especializado en sistemas criticos de negocio, integraciones API, ecommerce, automatizacion, Salesforce, pagos, logistica e IA aplicada.",
    },
    nav: {
      role: "Backend, integraciones y automatizacion",
      about: "Sobre mi",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      cta: "Agendar una consulta tecnica",
      language: "Idioma",
      primary: "Navegacion principal",
    },
    footer: {
      eyebrow: "Disponible para proyectos freelance seleccionados",
      title:
        "Sistemas criticos de negocio, integraciones y automatizacion para equipos que necesitan ejecucion fiable.",
      body:
        "Basado en Barcelona, trabajando en remoto con empresas europeas, equipos SaaS y negocios ecommerce.",
    },
    home: {
      seoTitle:
        "Backend Engineer para Sistemas Criticos, Integraciones y Automatizacion | Marc Armillas",
      seoDescription:
        "Contrata a Marc Armillas para construir, conectar y automatizar sistemas criticos de negocio: backend, APIs, ecommerce, Salesforce, pagos, logistica e IA aplicada.",
      eyebrow: "Backend Engineer para integraciones y automatizacion",
      title: "Construyo, conecto y automatizo sistemas criticos de negocio.",
      lead:
        "Ayudo a empresas SaaS, ecommerce y equipos con operaciones complejas a construir backend fiable, conectar plataformas externas, automatizar workflows operativos e integrar IA donde aporta valor medible.",
      primaryCta: "Hablar de un proyecto",
      secondaryCta: "Resolver un problema de integracion",
      metricsLabel: "Resumen profesional",
      metrics: [
        {
          value: "+6 años",
          label:
            "Construyendo software en produccion para entornos criticos de negocio.",
        },
        {
          value: "B2B + B2C",
          label: "Experiencia en ecommerce internacional con multiples mercados.",
        },
        {
          value: "Rails first",
          label:
            "Ruby on Rails como stack principal para backend, integraciones y tooling operativo.",
        },
        {
          value: "IA aplicada",
          label:
            "Modelos de lenguaje integrados en procesos reales, sin vender humo.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Experiencia principal",
        title:
          "Wordans convertido en una cartera de casos de estudio de produccion.",
        body:
          "Mas de cuatro anos en una plataforma internacional de ecommerce pueden explicarse sin revelar informacion confidencial: suppliers, logistica, checkout, Salesforce, herramientas internas, automatizacion y flujos asistidos por IA.",
        cta: "Explorar el trabajo",
      },
      conversion: {
        eyebrow: "Posicionamiento",
        title:
          "Backend, integraciones y automatizacion para operaciones que no pueden fallar.",
        body:
          "El objetivo es resolver problemas backend que afectan a negocio: conectar sistemas, reducir trabajo manual, mejorar datos operativos y mantener workflows criticos funcionando en produccion.",
      },
    },
    about: {
      seoTitle: "Sobre Marc Armillas | Backend, Integraciones y Automatizacion",
      seoDescription:
        "Marc Armillas ayuda a empresas a construir, conectar y automatizar sistemas criticos de negocio con backend, integraciones, ecommerce, Salesforce, pagos, logistica e IA aplicada.",
      eyebrow: "Sobre mi",
      title: "Construyo, conecto y automatizo sistemas criticos de negocio.",
      lead:
        "Trabajo en la capa donde las operaciones se vuelven software: integraciones API, ecommerce, pagos, logistica, equipos comerciales, automatizacion interna e IA aplicada sobre sistemas backend mantenibles.",
      profile: {
        eyebrow: "Perfil profesional",
        title: "Backend engineer para empresas con operaciones complejas.",
        body:
          "Mi trabajo consiste en entender procesos de negocio, convertirlos en sistemas fiables y conectar las herramientas que equipos de ventas, operaciones, soporte y ecommerce necesitan para trabajar con menos friccion.",
      },
      workTitle: "Como trabajo",
      workPoints: [
        "Empiezo por el proceso de negocio, no por la tecnologia.",
        "Mapeo sistemas, datos, dependencias y puntos de fallo antes de implementar.",
        "Construyo soluciones backend mantenibles, observables y preparadas para evolucionar.",
        "Comunico riesgos, tradeoffs y progreso de forma clara para equipos tecnicos y de negocio.",
      ],
      problemsEyebrow: "Problemas que resuelvo",
      problemsTitle: "Backend, integraciones y automatizacion con impacto operativo",
      problems: [
        {
          title: "Sistemas que no se hablan entre si",
          body:
            "Conecto APIs, proveedores, Salesforce, pagos, logistica y herramientas internas para reducir trabajo manual y errores operativos.",
        },
        {
          title: "Operaciones ecommerce complejas",
          body:
            "Ayudo con catalogos, stock, precios, checkout, pedidos, carriers y backoffice en negocios donde la operacion depende del backend.",
        },
        {
          title: "Procesos manuales repetitivos",
          body:
            "Convierto tareas recurrentes en workflows automatizados, reportes, sincronizaciones y herramientas internas fiables.",
        },
        {
          title: "Flujos comerciales en Salesforce",
          body:
            "Automatizo creacion de leads, sincronizacion de datos y procesos comerciales entre Salesforce y sistemas internos.",
        },
        {
          title: "IA aplicada a negocio",
          body:
            "Integro APIs de IA donde aceleran contenido, traduccion, clasificacion o asistencia operativa dentro de procesos existentes.",
        },
        {
          title: "Aplicaciones Rails en produccion",
          body:
            "Ruby on Rails sigue siendo mi stack principal para construir backend robusto, pero el foco es resolver el problema de negocio completo.",
        },
      ],
      companies: {
        eyebrow: "Por que empresas trabajan conmigo",
        title: "Puedo moverme entre negocio, operaciones y codigo.",
        body:
          "Soy util cuando el problema no es solo desarrollar una pantalla o una feature, sino entender un flujo operativo, conectar varias plataformas, proteger datos criticos y entregar una solucion que el equipo pueda usar en produccion.",
      },
      usefulTitle: "Especialmente util para",
      usefulPoints: [
        "Startups SaaS y ecommerce con integraciones pendientes o fragiles.",
        "Empresas con sistemas legacy que necesitan automatizar sin parar la operacion.",
        "Equipos que dependen de Salesforce, pagos, carriers, proveedores o herramientas internas.",
        "Founders, CTOs y ecommerce managers que necesitan ejecucion backend autonoma.",
      ],
    },
    projects: {
      seoTitle:
        "Casos: Ecommerce, Integraciones, Automatizacion e IA | Marc Armillas",
      seoDescription:
        "Casos de estudio confidenciales de Wordans y Arcanmotors sobre ecommerce, suppliers, logistica, pagos, Salesforce, herramientas internas, automatizacion e IA aplicada.",
      eyebrow: "Casos de estudio",
      title: "Trabajo de produccion convertido en casos de negocio.",
      lead:
        "Estos casos explican el tipo de sistemas que construyo manteniendo privados los detalles de implementacion y la informacion confidencial.",
      responsibilities: "Responsabilidades",
      outcome: "Resultado de negocio",
    },
    services: {
      seoTitle:
        "Integraciones API, Automatizacion y Backend para Negocio | Marc Armillas",
      seoDescription:
        "Servicios de backend, integraciones API, ecommerce, Salesforce, pagos, logistica, automatizacion e IA aplicada para operaciones complejas.",
      eyebrow: "Servicios",
      title: "Servicios",
      pageTitle: "Backend, integraciones y automatizacion para operaciones complejas.",
      lead:
        "Ayuda enfocada para equipos que necesitan conectar sistemas, automatizar procesos, estabilizar operaciones ecommerce y resolver problemas backend con impacto directo en negocio.",
    },
    contact: {
      seoTitle: "Contacto Marc Armillas | Backend, Integraciones y Automatizacion",
      seoDescription:
        "Contacta con Marc Armillas para backend, integraciones API, ecommerce, Salesforce, pagos, logistica, automatizacion e IA aplicada.",
      eyebrow: "Contacto",
      title: "Cuentame que sistema necesitas construir, arreglar o conectar.",
      lead:
        "El primer mensaje mas util incluye objetivo de negocio, stack actual, sistemas implicados, plazo y donde esta bloqueado el proyecto.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        budget: "Presupuesto",
        budgetPlaceholder: "Selecciona un rango",
        budgetOptions: [
          "Hablar de un proyecto",
          "Agendar una consulta tecnica",
          "Automatizar un workflow",
          "Resolver un problema de integracion",
        ],
        message: "Contexto del proyecto",
        submit: "Enviar consulta",
        sending: "Enviando...",
        success: "Gracias. Tu consulta se ha enviado correctamente por email.",
        error: "No se pudo enviar el mensaje. Intentalo de nuevo.",
      },
      fit: {
        eyebrow: "Mejor encaje",
        title: "Proyectos donde puedo aportar mas valor",
        points: [
          "Sistemas backend que necesitan ownership tecnico senior.",
          "Ecommerce con suppliers, pagos, logistica o complejidad backoffice.",
          "Empresas que quieren sustituir procesos manuales por automatizacion.",
          "Equipos que integran Salesforce, APIs externas o procesos asistidos por IA.",
        ],
      },
    },
    stack: {
      eyebrow: "Stack tecnico",
      title: "Un stack enfocado para sistemas de negocio mantenibles.",
      lead:
        "Rails sigue siendo el stack principal, dentro de un enfoque mas amplio de backend, datos, integraciones, automatizacion e infraestructura de produccion.",
      groups: {
        Backend: ["Ruby", "Ruby on Rails", "Hotwire", "Turbo", "Stimulus"],
        Datos: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis"],
        Infraestructura: ["AWS", "Linux", "Nginx", "Docker"],
        Integraciones: ["REST APIs", "Salesforce", "Stripe", "Apple Pay", "Google Pay", "Carriers"],
        Automatizacion: ["Selenium", "Procesamiento de datos", "Herramientas internas", "Reporting"],
        IA: ["APIs de IA", "Generacion de contenido", "Traduccion", "Clasificacion"],
      },
    },
    rates: {
      eyebrow: "Disponibilidad",
      title: "Disponible para proyectos con alcance claro",
      lead:
        "Disponible para proyectos freelance acotados, consultoria tecnica y soporte continuo en sistemas backend, integraciones, ecommerce y automatizacion de negocio.",
      items: [
        {
          title: "Proyectos freelance acotados",
          range: "Alcance definido",
          body:
            "Integraciones, automatizaciones, herramientas internas o mejoras backend con objetivos y entregables claros.",
        },
        {
          title: "Agendar una consulta tecnica",
          range: "Diagnostico y direccion",
          body:
            "Auditorias, decisiones de arquitectura, viabilidad de integraciones y priorizacion tecnica para equipos de producto u operaciones.",
        },
        {
          title: "Automatizar un workflow",
          range: "Acompanamiento operativo",
          body:
            "Mantenimiento evolutivo, mejoras de fiabilidad y soporte para sistemas que conectan procesos criticos de negocio.",
        },
        {
          title: "Resolver un problema de integracion",
          range: "Problemas concretos",
          body:
            "Ayuda para desbloquear APIs, Salesforce, pagos, logistica, datos o automatizaciones que afectan a la operacion.",
        },
      ] satisfies Rate[],
    },
    caseStudies: esCaseStudies,
    servicesList: [
      {
        title: "Integraciones API y sistemas",
        summary:
          "Conexion limpia de plataformas externas con flujos de datos resilientes y visibilidad operativa.",
        points: ["REST APIs, pipelines XML y CSV.", "Suppliers, carriers, pagos y Salesforce.", "Errores, reintentos, validaciones y monitorizacion."],
      },
      {
        title: "Automatizacion de negocio",
        summary:
          "Conversion de trabajo operativo repetitivo en herramientas, sincronizaciones y procesos fiables.",
        points: ["Herramientas internas para ventas, soporte y operaciones.", "Procesamiento de datos, reporting y sincronizacion.", "Workflows automatizados para ecommerce y SaaS."],
      },
      {
        title: "Ingenieria de sistemas ecommerce",
        summary:
          "Soporte a la mecanica backend que sostiene operaciones ecommerce internacionales.",
        points: ["Sincronizacion de catalogo, stock y precios.", "Checkout, pagos, pedidos y logistica.", "Herramientas operativas para comercio de volumen."],
      },
      {
        title: "Automatizacion con IA aplicada",
        summary:
          "Integracion de IA donde mejora operaciones, contenido, traduccion, clasificacion o asistencia interna.",
        points: ["APIs de IA dentro de sistemas existentes.", "Generacion de contenido y flujos multidioma.", "Automatizacion asistida con revision humana."],
      },
      {
        title: "Desarrollo Ruby on Rails",
        summary:
          "Diseno, construccion y mejora de aplicaciones Rails como stack principal para backend mantenible.",
        points: ["Nuevas funcionalidades y workflows backend.", "Mantenimiento y modernizacion de Rails legacy.", "Rendimiento, fiabilidad y soporte de produccion."],
      },
      {
        title: "Consultoria tecnica",
        summary:
          "Claridad de arquitectura, plan de entrega y camino de implementacion antes de comprometer recursos.",
        points: ["Auditorias tecnicas y definicion de roadmap.", "Analisis de viabilidad y riesgos de integracion.", "Ejecucion senior para proyectos freelance acotados."],
      },
    ] satisfies Service[],
  },
  en: {
    seo: {
      defaultTitle: "Marc Armillas | Backend Engineer for Business Systems",
      defaultDescription:
        "Backend engineer in Barcelona specializing in business-critical systems, API integrations, ecommerce operations, automation, Salesforce workflows, payments, logistics and applied AI.",
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
        "I help SaaS, ecommerce and operations-heavy companies build reliable backend systems, connect external platforms, automate operational workflows and apply AI where it creates measurable leverage.",
      primaryCta: "Discuss a project",
      secondaryCta: "Solve an integration problem",
      metricsLabel: "Professional highlights",
      metrics: [
        {
          value: "4+ years",
          label: "Building production software in business-critical environments.",
        },
        {
          value: "B2B + B2C",
          label: "International ecommerce experience across multiple markets.",
        },
        {
          value: "Rails first",
          label: "Ruby on Rails as the main stack for backend, integrations and operational tooling.",
        },
        {
          value: "AI applied",
          label: "Language models integrated into real workflows, not as a standalone title.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Main experience",
        title: "Wordans as a portfolio of production case studies.",
        body:
          "More than four years working on an international ecommerce platform can be explained without exposing confidential data: supplier integrations, logistics, checkout, Salesforce, internal tools, automation and AI-assisted workflows.",
        cta: "Explore the work",
      },
      conversion: {
        eyebrow: "Positioning",
        title:
          "Backend, integrations and automation for operations that cannot afford to break.",
        body:
          "The goal is to solve backend problems that affect the business: connect systems, reduce manual work, improve operational data and keep critical workflows running in production.",
      },
    },
    about: {
      seoTitle: "About Marc Armillas | Backend, Integrations and Automation",
      seoDescription:
        "Marc Armillas helps companies build, connect and automate business-critical systems across backend engineering, API integrations, ecommerce, Salesforce, payments, logistics and applied AI.",
      eyebrow: "About",
      title: "I build, connect and automate business-critical systems.",
      lead:
        "I work where business operations become software: API integrations, ecommerce, payments, logistics, sales teams, internal automation and applied AI on top of maintainable backend systems.",
      profile: {
        eyebrow: "Professional profile",
        title: "Backend engineer for operationally complex businesses.",
        body:
          "My work is about understanding business processes, turning them into reliable systems and connecting the tools that sales, operations, support and ecommerce teams need to work with less friction.",
      },
      workTitle: "How I work",
      workPoints: [
        "I start with the business process, not the technology choice.",
        "I map systems, data, dependencies and failure points before implementation.",
        "I build maintainable backend solutions that can be observed, operated and evolved.",
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
            "I turn recurring work into automated workflows, reports, synchronizations and dependable internal tools.",
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
          title: "Rails applications in production",
          body:
            "Ruby on Rails remains my main technical stack for robust backend work, but the focus is solving the full business problem.",
        },
      ],
      companies: {
        eyebrow: "Why companies work with me",
        title: "I can move between business, operations and code.",
        body:
          "I am useful when the problem is not just building a screen or feature, but understanding an operational workflow, connecting multiple platforms, protecting critical data and delivering something the team can run in production.",
      },
      usefulTitle: "Especially useful for",
      usefulPoints: [
        "SaaS and ecommerce companies with pending or fragile integrations.",
        "Companies with legacy systems that need automation without stopping operations.",
        "Teams that depend on Salesforce, payments, carriers, suppliers or internal tools.",
        "Founders, CTOs and ecommerce managers who need autonomous backend execution.",
      ],
    },
    projects: {
      seoTitle:
        "Case Studies: Ecommerce, Integrations, Automation and AI | Marc Armillas",
      seoDescription:
        "Confidential case studies from Wordans and Arcanmotors covering ecommerce, supplier integrations, logistics, payments, Salesforce, internal tools, automation and applied AI.",
      eyebrow: "Case studies",
      title: "Production work translated into business cases.",
      lead:
        "These case studies explain the type of systems I build while keeping implementation details and confidential business information private.",
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
        "Focused help for teams that need to connect systems, automate processes, stabilize ecommerce operations and solve backend problems with direct business impact.",
    },
    contact: {
      seoTitle: "Contact Marc Armillas | Backend, Integrations and Automation",
      seoDescription:
        "Contact Marc Armillas for backend engineering, API integrations, ecommerce, Salesforce, payments, logistics, automation and applied AI projects.",
      eyebrow: "Contact",
      title: "Tell me what system needs to be built, fixed or connected.",
      lead:
        "The most useful first message includes the business goal, current stack, systems involved, deadline and where the project is blocked.",
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
          "Solve an integration problem",
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
          "Backend systems that need senior technical ownership.",
          "Ecommerce systems with suppliers, payments, logistics or backoffice complexity.",
          "Companies replacing manual workflows with automation.",
          "Teams integrating Salesforce, external APIs or AI-assisted processes.",
        ],
      },
    },
    stack: {
      eyebrow: "Technical stack",
      title: "A focused stack for maintainable business systems.",
      lead:
        "Rails remains the main technical stack within a broader focus on backend systems, data, integrations, automation and production infrastructure.",
      groups: {
        Backend: ["Ruby", "Ruby on Rails", "Hotwire", "Turbo", "Stimulus"],
        Data: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis"],
        Infrastructure: ["AWS", "Linux", "Nginx", "Docker"],
        Integrations: ["REST APIs", "Salesforce", "Stripe", "Apple Pay", "Google Pay", "Carriers"],
        Automation: ["Selenium", "Data processing", "Internal tooling", "Reporting"],
        AI: ["AI APIs", "Content generation", "Translation", "Classification"],
      },
    },
    rates: {
      eyebrow: "Availability",
      title: "Available for clearly scoped work",
      lead:
        "Available for scoped freelance projects, technical consulting and ongoing support across backend systems, integrations, ecommerce operations and business automation.",
      items: [
        {
          title: "Discuss a project",
          range: "Defined scope",
          body:
            "Integrations, automations, internal tools or backend improvements with clear goals and deliverables.",
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
          title: "Solve an integration problem",
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
          "Turn repetitive operational work into dependable tools, synchronizations and background processes.",
        points: ["Internal tools for sales, support and operations.", "Data processing, reporting and synchronization.", "Automated workflows for ecommerce and SaaS teams."],
      },
      {
        title: "Ecommerce Systems Engineering",
        summary:
          "Support the backend mechanics behind international ecommerce operations.",
        points: ["Catalog, stock and price synchronization.", "Checkout, payments, orders and logistics flows.", "Operational tools for high-volume commerce."],
      },
      {
        title: "Applied AI Automation",
        summary:
          "Integrate AI where it improves operations, content workflows, translation, classification or internal assistance.",
        points: ["AI API integrations inside existing systems.", "Automated content generation and multilingual workflows.", "Human-reviewed automation for business processes."],
      },
      {
        title: "Ruby on Rails Development",
        summary:
          "Design, build and improve Rails applications as the main technical stack for maintainable backend work.",
        points: ["New Rails features and backend workflows.", "Legacy Rails maintenance and modernization.", "Performance, reliability and production support."],
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
