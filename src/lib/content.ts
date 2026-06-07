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
type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  contribution: string;
};

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
    title: "SIGS: plataforma interna para operaciones de negocio",
    scope: "eSaving",
    system: "Producto interno y backend",
    summary:
      "Trabajo de producto y backend en SIGS, una plataforma Ruby on Rails usada para coordinar procesos de negocio, CRM, contratos, suministros, facturación, documentos y operaciones internas.",
    responsibilities: [
      "Desarrollo de funcionalidades backend para flujos internos de negocio.",
      "Colaboración con equipos operativos y de negocio para convertir necesidades reales en producto.",
      "Mantenimiento de sistemas en producción con datos, permisos y procesos críticos.",
      "Mejora de herramientas internas para que distintos equipos trabajaran desde una fuente de información más conectada.",
    ],
    outcome:
      "Equipos internos con procesos más centralizados, menos dependencia de hojas de cálculo y una base de producto más preparada para escalar operaciones.",
    tags: ["Ruby on Rails", "CRM", "Facturación", "Operaciones"],
  },
  {
    title: "Automatización de facturas, documentos y reporting",
    scope: "eSaving",
    system: "Automatización operativa",
    summary:
      "Desarrollo y mantenimiento de flujos backend para importar, exportar, consultar y procesar información de facturas, documentos, tesorería, alertas y reportes operativos.",
    responsibilities: [
      "Trabajo con importaciones CSV, generación de exports y procesos asíncronos.",
      "Soporte a flujos de descarga, lectura y asociación de facturas y documentos.",
      "Conexión de módulos de CRM, facturación, tesorería y gestión documental.",
      "Reducción de pasos manuales en procesos administrativos y de backoffice.",
    ],
    outcome:
      "Menos trabajo repetitivo para equipos de negocio y más capacidad para operar procesos internos complejos desde sistemas conectados.",
    tags: ["Automatización", "CSV", "Documentos", "Reporting"],
  },
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
    title: "SIGS internal business operations platform",
    scope: "eSaving",
    system: "Internal product and backend",
    summary:
      "Product and backend work on SIGS, a Ruby on Rails platform used to coordinate business processes across CRM, contracts, supplies, invoicing, documents and internal operations.",
    responsibilities: [
      "Developed backend features for internal business workflows.",
      "Collaborated with operations and business teams to turn real needs into product behavior.",
      "Maintained production systems handling critical data, permissions and processes.",
      "Improved internal tooling so teams could work from more connected operational information.",
    ],
    outcome:
      "Helped internal teams centralize processes, reduce spreadsheet dependency and build a stronger product base for scaling operations.",
    tags: ["Ruby on Rails", "CRM", "Invoicing", "Operations"],
  },
  {
    title: "Invoice, document and reporting automation",
    scope: "eSaving",
    system: "Operational automation",
    summary:
      "Built and maintained backend flows for importing, exporting, querying and processing information around invoices, documents, treasury, alerts and operational reports.",
    responsibilities: [
      "Worked on CSV imports, export generation and asynchronous processing.",
      "Supported flows for downloading, reading and associating invoices and documents.",
      "Connected CRM, invoicing, treasury and document management modules.",
      "Reduced manual steps in administrative and backoffice processes.",
    ],
    outcome:
      "Reduced repetitive business work and increased the ability to run complex internal operations through connected systems.",
    tags: ["Automation", "CSV", "Documents", "Reporting"],
  },
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
      menu: "Menú de navegación",
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
        "Contrata a Marc Armillas para automatizar procesos, conectar sistemas y escalar operaciones internas con backend, APIs, ecommerce, Salesforce, pagos, logística e IA aplicada.",
      eyebrow: "Backend Engineer para integraciones y automatización",
      title: "Construyo, conecto y automatizo sistemas críticos de negocio.",
      lead:
        "Ayudo a equipos SaaS, ecommerce y operaciones a reducir trabajo manual, conectar sistemas desconectados y mantener backend crítico funcionando.",
      primaryCta: "Hablar de un proyecto",
      secondaryCta: "Arreglar una integración",
      metricsLabel: "Resumen profesional",
      metrics: [
        {
          value: "+4 años",
          label:
            "Resolviendo problemas reales de negocio en entornos de producción.",
        },
        {
          value: "B2B + B2C",
          label: "Experiencia en ecommerce internacional con múltiples mercados.",
        },
        {
          value: "Operaciones",
          label:
            "Automatización, integraciones y herramientas internas para reducir trabajo manual.",
        },
        {
          value: "Stack principal",
          label:
            "Ruby on Rails como base para backend fiable y mantenible.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Progresión profesional",
        title:
          "De sistemas internos de negocio a operaciones ecommerce internacionales.",
        body:
          "Mi experiencia conecta producto, backend y operaciones: eSaving me dio base en sistemas internos, Wordans amplió esa base a ecommerce internacional y Arcanmotors consolidó ownership end-to-end.",
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
        "Trabajo donde las operaciones dependen del software: producto interno, integraciones, ecommerce, pagos, logística, Salesforce, automatización e IA aplicada.",
      profile: {
        eyebrow: "Perfil profesional",
        title: "Consultor backend para operaciones complejas.",
        body:
          "Mi trabajo consiste en entender procesos de negocio, conectar herramientas y entregar soluciones que reduzcan fricción operativa, duplicidad de datos y trabajo manual.",
      },
      experienceEyebrow: "Experiencia profesional",
      experienceTitle: "Una progresión continua hacia backend y sistemas de negocio.",
      experienceLead:
        "La base común de mi carrera ha sido convertir procesos operativos en software fiable: primero en plataformas internas, después en ecommerce internacional y finalmente en entregas freelance completas.",
      experienceItems: [
        {
          company: "eSaving",
          role: "Desarrollo de producto, backend y sistemas internos",
          period: "Etapa inicial de producto",
          summary:
            "Trabajé en SIGS, una plataforma de negocio construida con Ruby on Rails para coordinar CRM, contratos, suministros, facturación, tesorería, documentos, reportes y flujos internos.",
          points: [
            "Desarrollo de funcionalidades backend para procesos usados por equipos de negocio.",
            "Automatización de tareas administrativas, importaciones, exports y flujos documentales.",
            "Mantenimiento de sistemas de producción con datos sensibles y procesos críticos.",
            "Colaboración directa con equipos operativos para traducir necesidades internas en producto.",
          ],
          contribution:
            "Esta etapa construyó mi criterio actual: entender el proceso antes de escribir código, conectar módulos que antes funcionaban separados y diseñar backend que reduzca trabajo manual en operaciones reales.",
        },
        {
          company: "Wordans",
          role: "Backend, integraciones y automatización ecommerce",
          period: "Escala internacional",
          summary:
            "Apliqué esa base de sistemas de negocio a ecommerce B2B y B2C internacional, conectando suppliers, carriers, pagos, Salesforce, herramientas internas e IA aplicada.",
          points: [
            "Integraciones entre sistemas externos y procesos backend de ecommerce.",
            "Automatización de catálogo, stock, precios, pedidos, logística y flujos comerciales.",
            "Soporte y evolución de sistemas críticos que afectan ingresos y operación diaria.",
          ],
          contribution:
            "Wordans amplió mi experiencia hacia entornos con más volumen, más integraciones y más impacto directo en revenue y eficiencia operativa.",
        },
        {
          company: "Arcanmotors",
          role: "Ownership freelance de producto completo",
          period: "Entrega end-to-end",
          summary:
            "Diseñé, construí, desplegué y mantuve una plataforma para un concesionario premium, cubriendo backend, backoffice, infraestructura, SEO técnico y evolución con cliente.",
          points: [
            "Arquitectura e implementación Ruby on Rails.",
            "Backoffice para gestión de vehículos, contenido e imágenes.",
            "Despliegue, mantenimiento y comunicación directa con cliente.",
          ],
          contribution:
            "Esta etapa consolidó ownership completo: pasar de problema de negocio a producto en producción, con decisiones técnicas, entrega y mantenimiento bajo mi responsabilidad.",
        },
      ] satisfies ExperienceItem[],
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
            "Conecto APIs, proveedores, Salesforce, pagos, logística, CRM y herramientas internas para reducir trabajo manual y errores operativos.",
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
        "Startups SaaS, ecommerce y equipos de operaciones con integraciones pendientes o frágiles.",
        "Empresas con sistemas legacy que necesitan automatizar sin parar la operación.",
        "Equipos que dependen de Salesforce, pagos, carriers, proveedores, CRM o herramientas internas.",
        "Founders, CTOs y ecommerce managers que necesitan ejecución autónoma y criterio técnico.",
      ],
    },
    projects: {
      seoTitle:
        "Casos: Ecommerce, Integraciones, Automatización e IA | Marc Armillas",
      seoDescription:
        "Casos de estudio confidenciales de eSaving, Wordans y Arcanmotors sobre sistemas internos, ecommerce, integraciones, logística, pagos, Salesforce, automatización e IA aplicada.",
      eyebrow: "Casos de estudio",
      title: "Problemas reales convertidos en casos de negocio.",
      lead:
        "Una muestra de problemas de negocio resueltos conectando sistemas, automatizando procesos y mejorando operaciones internas, ecommerce, pagos, logística e IA aplicada.",
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
        "Ayuda práctica para conectar sistemas desconectados, automatizar procesos y estabilizar operaciones que afectan a ingresos, datos o productividad.",
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
          "Equipos que integran CRM, Salesforce, APIs externas o procesos asistidos por IA.",
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
        Integraciones: ["REST APIs", "CRM", "Salesforce", "Pagos", "Carriers"],
        Operaciones: ["Automatización", "Herramientas internas", "Reporting", "Flujos de datos"],
        "Escala interna": ["Procesos conectados", "Backoffice", "Reducción de trabajo manual"],
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
          "Conexión limpia de plataformas externas e internas para que datos y procesos no dependan de traspasos manuales.",
        points: [
          "REST APIs, pipelines XML y CSV.",
          "CRM, suppliers, carriers, pagos y Salesforce.",
          "Errores, reintentos, validaciones y monitorización.",
        ],
      },
      {
        title: "Automatización de negocio",
        summary:
          "Automatización de tareas operativas, sincronizaciones y procesos internos para escalar sin multiplicar trabajo administrativo.",
        points: [
          "Herramientas internas para ventas, soporte, finanzas y operaciones.",
          "Procesamiento de datos, reporting y sincronización.",
          "Flujos automatizados para ecommerce, SaaS y backoffice.",
        ],
      },
      {
        title: "Ingeniería de sistemas ecommerce",
        summary:
          "Mejora de los flujos que sostienen operaciones ecommerce internacionales.",
        points: [
          "Sincronización de catálogo, stock y precios.",
          "Checkout, pagos, pedidos y logística.",
          "Herramientas operativas para comercio de volumen.",
        ],
      },
      {
        title: "Automatización con IA aplicada",
        summary:
          "IA aplicada donde mejora procesos, contenido, traducción, clasificación o asistencia interna.",
        points: [
          "APIs de IA dentro de sistemas existentes.",
          "Generación de contenido y flujos multidioma.",
          "Automatización asistida con revisión humana.",
        ],
      },
      {
        title: "Desarrollo Ruby on Rails",
        summary:
          "Desarrollo y mantenimiento de aplicaciones Ruby on Rails cuando el backend sostiene operaciones, datos e integraciones críticas.",
        points: [
          "Nuevas funcionalidades y flujos backend.",
          "Mantenimiento y modernización de aplicaciones existentes.",
          "Rendimiento, fiabilidad y soporte de producción.",
        ],
      },
      {
        title: "Consultoría técnica",
        summary:
          "Claridad de arquitectura, plan de entrega y camino de implementación antes de comprometer recursos.",
        points: [
          "Auditorías técnicas y definición de roadmap.",
          "Análisis de viabilidad y riesgos de integración.",
          "Ejecución senior para proyectos freelance acotados.",
        ],
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
      menu: "Navigation menu",
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
        "Hire Marc Armillas to automate processes, connect systems and scale internal operations across backend engineering, APIs, ecommerce, Salesforce, payments, logistics and applied AI.",
      eyebrow: "Backend Engineer for integrations and automation",
      title: "I build, connect and automate business-critical systems.",
      lead:
        "I help SaaS, ecommerce and operations teams reduce manual work, connect disconnected systems and keep critical backend work running.",
      primaryCta: "Discuss a project",
      secondaryCta: "Fix an integration issue",
      metricsLabel: "Professional highlights",
      metrics: [
        {
          value: "4+ years",
          label: "Solving real business problems in production environments.",
        },
        {
          value: "B2B + B2C",
          label: "International ecommerce experience across multiple markets.",
        },
        {
          value: "Operations",
          label: "Automation, integrations and internal tools that reduce manual work.",
        },
        {
          value: "Main stack",
          label: "Ruby on Rails as the base for reliable, maintainable backend work.",
        },
      ] satisfies Metric[],
      wordans: {
        eyebrow: "Professional progression",
        title: "From internal business systems to international ecommerce operations.",
        body:
          "My experience connects product, backend and operations: eSaving gave me the foundation in internal business systems, Wordans expanded that into international ecommerce, and Arcanmotors consolidated end-to-end product ownership.",
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
        "I work where operations depend on software: internal product, integrations, ecommerce, payments, logistics, Salesforce, automation and applied AI.",
      profile: {
        eyebrow: "Professional profile",
        title: "Backend consultant for operationally complex businesses.",
        body:
          "My work is about understanding business processes, connecting tools and delivering solutions that reduce operational friction, duplicated data and manual work.",
      },
      experienceEyebrow: "Professional experience",
      experienceTitle: "A continuous progression toward backend and business systems.",
      experienceLead:
        "The common thread in my career has been turning operational processes into reliable software: first in internal platforms, then in international ecommerce, and finally in complete freelance product delivery.",
      experienceItems: [
        {
          company: "eSaving",
          role: "Product development, backend and internal systems",
          period: "Early product stage",
          summary:
            "I worked on SIGS, a Ruby on Rails business platform for coordinating CRM, contracts, supplies, invoicing, treasury, documents, reporting and internal workflows.",
          points: [
            "Developed backend features for processes used by business teams.",
            "Automated administrative tasks, imports, exports and document workflows.",
            "Maintained production systems with sensitive data and critical processes.",
            "Collaborated directly with operations teams to translate internal needs into product behavior.",
          ],
          contribution:
            "This stage shaped my current judgment: understand the process before writing code, connect modules that previously worked apart, and design backend systems that reduce manual work in real operations.",
        },
        {
          company: "Wordans",
          role: "Backend, integrations and ecommerce automation",
          period: "International scale",
          summary:
            "I applied that business-systems foundation to international B2B and B2C ecommerce, connecting suppliers, carriers, payments, Salesforce, internal tools and applied AI.",
          points: [
            "Integrated external systems with ecommerce backend processes.",
            "Automated catalog, stock, pricing, orders, logistics and commercial workflows.",
            "Supported and evolved critical systems affecting revenue and day-to-day operations.",
          ],
          contribution:
            "Wordans expanded my experience into higher-volume environments with more integrations and more direct impact on revenue and operational efficiency.",
        },
        {
          company: "Arcanmotors",
          role: "Freelance ownership of a complete product",
          period: "End-to-end delivery",
          summary:
            "I designed, built, deployed and maintained a platform for a premium vehicle dealership, covering backend, backoffice, infrastructure, technical SEO and client-led evolution.",
          points: [
            "Ruby on Rails architecture and implementation.",
            "Backoffice for vehicle, content and image management.",
            "Deployment, maintenance and direct client communication.",
          ],
          contribution:
            "This stage consolidated complete ownership: moving from business problem to production product, with technical decisions, delivery and maintenance under my responsibility.",
        },
      ] satisfies ExperienceItem[],
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
            "I connect APIs, suppliers, Salesforce, payments, logistics, CRM and internal tools to reduce manual work and operational errors.",
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
        "SaaS, ecommerce and operations teams with pending or fragile integrations.",
        "Companies with legacy systems that need automation without stopping operations.",
        "Teams that depend on Salesforce, CRM, payments, carriers, suppliers or internal tools.",
        "Founders, CTOs and ecommerce managers who need autonomous execution and technical judgment.",
      ],
    },
    projects: {
      seoTitle:
        "Case Studies: Ecommerce, Integrations, Automation and AI | Marc Armillas",
      seoDescription:
        "Confidential case studies from eSaving, Wordans and Arcanmotors covering internal systems, ecommerce, integrations, logistics, payments, Salesforce, automation and applied AI.",
      eyebrow: "Case studies",
      title: "Real problems translated into business cases.",
      lead:
        "A sample of business problems solved by connecting systems, automating processes and improving internal operations, ecommerce, payments, logistics and applied AI.",
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
        "Practical help connecting disconnected systems, automating processes and stabilizing operations that affect revenue, data or productivity.",
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
          "Teams integrating CRM, Salesforce, external APIs or AI-assisted processes.",
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
        Integrations: ["REST APIs", "CRM", "Salesforce", "Payments", "Carriers"],
        Operations: ["Automation", "Internal tools", "Reporting", "Data workflows"],
        "Internal scale": ["Connected processes", "Backoffice", "Manual work reduction"],
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
          "Connect external and internal platforms cleanly so data and processes do not depend on manual handoffs.",
        points: [
          "REST APIs, XML and CSV pipelines.",
          "CRM, suppliers, carriers, payment providers and Salesforce.",
          "Error handling, retries, validation and monitoring.",
        ],
      },
      {
        title: "Business Automation",
        summary:
          "Automate operational tasks, synchronizations and internal processes so teams can scale without multiplying administrative work.",
        points: [
          "Internal tools for sales, support, finance and operations.",
          "Data processing, reporting and synchronization.",
          "Automated workflows for ecommerce, SaaS and backoffice teams.",
        ],
      },
      {
        title: "Ecommerce Systems Engineering",
        summary:
          "Improve the flows that keep international ecommerce operations moving.",
        points: [
          "Catalog, stock and price synchronization.",
          "Checkout, payments, orders and logistics flows.",
          "Operational tools for high-volume commerce.",
        ],
      },
      {
        title: "Applied AI Automation",
        summary:
          "Apply AI where it improves processes, content, translation, classification or internal assistance.",
        points: [
          "AI API integrations inside existing systems.",
          "Automated content generation and multilingual workflows.",
          "Human-reviewed automation for business processes.",
        ],
      },
      {
        title: "Ruby on Rails Development",
        summary:
          "Build and maintain Ruby on Rails applications when the backend carries critical operations, data and integrations.",
        points: [
          "New backend features and workflows.",
          "Maintenance and modernization of existing applications.",
          "Performance, reliability and production support.",
        ],
      },
      {
        title: "Technical Consulting",
        summary:
          "Clarify architecture, delivery plans and implementation paths before the team commits.",
        points: [
          "Technical audits and roadmap definition.",
          "Integration feasibility and risk analysis.",
          "Senior execution for scoped freelance projects.",
        ],
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
