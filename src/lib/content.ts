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

export const content = {
  es: {
    seo: {
      defaultTitle: "Marc Armillas | Senior Ruby on Rails Developer",
      defaultDescription:
        "Desarrollador Senior Ruby on Rails en Barcelona especializado en integraciones, automatizacion, ecommerce e inteligencia artificial aplicada a negocio.",
    },
    nav: {
      role: "Rails, integraciones y automatizacion",
      about: "Sobre mi",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
      cta: "Iniciar proyecto",
      language: "Idioma",
      primary: "Navegacion principal",
    },
    footer: {
      eyebrow: "Disponible para proyectos freelance seleccionados",
      title:
        "Sistemas Rails, integraciones y automatizacion para equipos que necesitan ejecucion fiable.",
      body:
        "Basado en Barcelona, trabajando en remoto con empresas europeas, equipos SaaS y negocios ecommerce.",
    },
    home: {
      seoTitle:
        "Senior Ruby on Rails Developer para Integraciones, Automatizacion e IA | Marc Armillas",
      seoDescription:
        "Contrata a Marc Armillas, desarrollador Senior Ruby on Rails especializado en backend, integraciones API, ecommerce, Salesforce, pagos, automatizacion e IA aplicada.",
      eyebrow: "Senior Ruby on Rails Developer en Barcelona",
      title:
        "Ingenieria backend para sistemas Rails que tienen que funcionar en produccion.",
      lead:
        "Ayudo a empresas SaaS, ecommerce y equipos con operaciones complejas a construir aplicaciones Ruby on Rails fiables, conectar plataformas externas, automatizar procesos de negocio e integrar IA donde aporta valor medible.",
      primaryCta: "Hablar de un proyecto",
      secondaryCta: "Ver casos de estudio",
      metricsLabel: "Resumen profesional",
      metrics: [
        {
          value: "+4 anos",
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
            "Foco profundo en Ruby on Rails, backend y herramientas operativas.",
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
          "Un especialista para trabajo Rails complejo, no un perfil full stack generico.",
        body:
          "El portfolio esta disenado para que el cliente vea a un backend engineer capaz de hacerse cargo de problemas tecnicos ambiguos, hablar con negocio y entregar sistemas mantenibles sin supervision constante.",
      },
    },
    about: {
      seoTitle: "Sobre Marc Armillas | Ruby on Rails Specialist",
      seoDescription:
        "Marc Armillas es Senior Ruby on Rails Developer especializado en backend, integraciones, automatizacion e IA aplicada a procesos de negocio.",
      eyebrow: "Sobre mi",
      title:
        "Backend Engineer especializado en Integraciones, Automatizacion e Inteligencia Artificial aplicada a negocio.",
      lead:
        "Trabajo donde las aplicaciones Rails se cruzan con operaciones reales: catalogos, proveedores, pagos, logistica, equipos comerciales, herramientas internas y fiabilidad en produccion.",
      profile: {
        eyebrow: "Perfil profesional",
        title:
          "Un especialista Rails pragmatico para sistemas con piezas moviles.",
        body:
          "Mi mayor valor no esta en construir webs corporativas simples. Esta en convertir requisitos operativos complejos en sistemas Rails estables y mantenerlos evolucionables cuando cambian las reglas de negocio.",
      },
      seniorityTitle: "Como comunicar seniority",
      positioning: [
        "Mostrar propiedad sobre sistemas en produccion antes que anos de experiencia sin contexto.",
        "Convertir Wordans en varios resultados de negocio, no en una unica linea de empleo.",
        "Usar dominios concretos de integracion: suppliers, carriers, pagos, Salesforce y flujos de IA.",
        "Presentar el trabajo freelance como responsabilidad completa: arquitectura, entrega, despliegue y mantenimiento.",
        "Evitar senales junior como full stack generico o mensajes centrados en diseno visual.",
      ],
      strengthsEyebrow: "Analisis del perfil",
      strengthsTitle: "Fortalezas comerciales a destacar",
      strengths: [
        {
          title: "Especializacion Rails",
          body:
            "Las empresas con Rails valoran mas la experiencia enfocada que una lista amplia pero superficial de tecnologias.",
        },
        {
          title: "Profundidad en integraciones",
          body:
            "Suppliers, carriers, pagos y Salesforce son areas de alto valor porque conectan directamente con ingresos y operaciones.",
        },
        {
          title: "Mentalidad de produccion",
          body:
            "Infraestructura, deployments, rendimiento y mantenimiento demuestran capacidad para cubrir el ciclo completo.",
        },
        {
          title: "Automatizacion con ROI",
          body:
            "Sustituir trabajo manual por herramientas internas fiables crea una historia clara de retorno para negocio.",
        },
        {
          title: "IA aplicada",
          body:
            "La IA se presenta como acelerador dentro de procesos Rails, no como una etiqueta vaga de AI Engineer.",
        },
        {
          title: "Entrega independiente",
          body:
            "Arcanmotors demuestra capacidad para definir, construir, desplegar y evolucionar un producto con cliente directo.",
        },
      ],
      focus: {
        eyebrow: "Foco del mensaje",
        title: "Que debe tener menos peso",
        body:
          "El frontend debe acompanar la historia, no liderarla. El relato comercial mas fuerte es ejecucion backend senior para empresas con complejidad operativa.",
      },
      lowerValueTitle: "Senales con menor valor comercial",
      lowerValue: [
        "Posicionamiento full stack generico.",
        "Enmarcar el trabajo como webs estaticas o paginas corporativas.",
        "Listas largas de tecnologias sin contexto de negocio.",
        "Presentar la IA como rol principal en vez de capacidad dentro de automatizacion de negocio.",
      ],
    },
    projects: {
      seoTitle:
        "Casos Rails: Ecommerce, Integraciones, Automatizacion e IA | Marc Armillas",
      seoDescription:
        "Casos de estudio confidenciales de Wordans y Arcanmotors sobre suppliers, logistica, pagos, Salesforce, herramientas internas y delivery Rails.",
      eyebrow: "Casos de estudio",
      title: "Trabajo de produccion convertido en casos de negocio.",
      lead:
        "Estos casos explican el tipo de sistemas que construyo manteniendo privados los detalles de implementacion y la informacion confidencial.",
      responsibilities: "Responsabilidades",
      outcome: "Resultado de negocio",
    },
    services: {
      seoTitle:
        "Consultoria Ruby on Rails, Integraciones y Automatizacion | Marc Armillas",
      seoDescription:
        "Servicios Rails para SaaS, ecommerce, sistemas legacy, integraciones API, Salesforce, automatizacion e IA aplicada.",
      eyebrow: "Servicios",
      title: "Servicios",
      pageTitle: "Consultoria Rails para empresas con backend complejo.",
      lead:
        "Ayuda enfocada para equipos que necesitan ejecucion backend fiable, ownership senior y comunicacion clara entre restricciones tecnicas y de negocio.",
    },
    contact: {
      seoTitle: "Contacto Marc Armillas | Rails Developer Barcelona",
      seoDescription:
        "Contacta con Marc Armillas para desarrollo Ruby on Rails, consultoria backend, integraciones API, Salesforce, automatizacion e IA aplicada.",
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
          "Menos de 5.000 EUR",
          "5.000-15.000 EUR",
          "15.000-40.000 EUR",
          "Soporte mensual continuo",
        ],
        message: "Contexto del proyecto",
        submit: "Enviar consulta",
        sending: "Enviando...",
        success:
          "Gracias. Tu consulta se ha enviado correctamente por email.",
        error: "No se pudo enviar el mensaje. Intentalo de nuevo.",
      },
      fit: {
        eyebrow: "Mejor encaje",
        title: "Proyectos donde puedo aportar mas valor",
        points: [
          "Aplicaciones Rails que necesitan ownership backend senior.",
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
        "El portfolio mantiene el mismo foco tecnico que el posicionamiento: Rails, PostgreSQL, Hotwire, Tailwind, integraciones e infraestructura de produccion.",
      groups: {
        Backend: ["Ruby", "Ruby on Rails", "Hotwire", "Turbo", "Stimulus"],
        Datos: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis"],
        Infraestructura: ["AWS", "Linux", "Nginx", "Docker"],
        Integraciones: [
          "REST APIs",
          "Salesforce",
          "Stripe",
          "Apple Pay",
          "Google Pay",
          "Carriers",
        ],
        Automatizacion: [
          "Selenium",
          "Procesamiento de datos",
          "Herramientas internas",
          "Reporting",
        ],
        IA: ["APIs de IA", "Generacion de contenido", "Traduccion", "Clasificacion"],
      },
    },
    rates: {
      eyebrow: "Tarifas freelance europeas",
      title: "Precios orientativos",
      lead:
        "Estos rangos sirven como guia de posicionamiento para trabajo senior de Rails, integraciones y automatizacion en Europa. El precio final depende de urgencia, responsabilidad, alcance y criticidad del sistema.",
      items: [
        {
          title: "Consultoria por horas",
          range: "60-95 EUR/hora",
          body:
            "Adecuado para auditorias, troubleshooting de integraciones, direccion tecnica e implementacion acotada.",
        },
        {
          title: "Bloques de entrega",
          range: "2.500-7.500 EUR",
          body:
            "Util para integraciones definidas, herramientas internas, automatizaciones o features Rails.",
        },
        {
          title: "Sistemas criticos",
          range: "90-130 EUR/hora",
          body:
            "Aplicable cuando el trabajo toca ingresos, checkout, fiabilidad de produccion u operaciones urgentes.",
        },
        {
          title: "Soporte mensual",
          range: "3.000-9.000 EUR/mes",
          body:
            "Para empresas que necesitan mantenimiento Rails, integraciones y automatizacion de forma continua.",
        },
      ] satisfies Rate[],
    },
    caseStudies: [
      {
        title: "Integraciones con suppliers internacionales",
        scope: "Wordans",
        system: "Operaciones ecommerce",
        summary:
          "Integracion de flujos de datos con proveedores para sincronizacion de catalogo, stock, precios y automatizacion de pedidos en mercados internacionales.",
        responsibilities: [
          "Procesamiento de feeds XML, CSV e integraciones via API.",
          "Mapeo de productos, stock y precios externos dentro de workflows Rails.",
          "Automatizacion de operaciones repetitivas de importacion y exportacion.",
          "Mejora de validaciones y tratamiento de excepciones operativas.",
        ],
        outcome:
          "Reduccion de trabajo manual y mayor consistencia en los datos de catalogo, stock y precios usados por equipos ecommerce.",
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
          "Sincronizacion de datos entre sistemas Rails y Salesforce.",
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
          "Conexion de APIs de modelos de lenguaje con workflows Rails existentes.",
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
    ] satisfies CaseStudy[],
    servicesList: [
      {
        title: "Desarrollo Ruby on Rails",
        summary:
          "Diseno, construccion y mejora de aplicaciones Rails con arquitectura backend mantenible.",
        points: [
          "Nuevas funcionalidades y workflows backend.",
          "Mantenimiento y modernizacion de Rails legacy.",
          "Rendimiento, fiabilidad y soporte de produccion.",
        ],
      },
      {
        title: "Integraciones API y sistemas",
        summary:
          "Conexion limpia de plataformas externas con flujos de datos resilientes y visibilidad operativa.",
        points: [
          "REST APIs, pipelines XML y CSV.",
          "Suppliers, carriers, pagos y Salesforce.",
          "Errores, reintentos, validaciones y monitorizacion.",
        ],
      },
      {
        title: "Automatizacion de negocio",
        summary:
          "Conversion de trabajo operativo repetitivo en herramientas y procesos fiables.",
        points: [
          "Herramientas internas para ventas, soporte y operaciones.",
          "Procesamiento de datos, reporting y sincronizacion.",
          "Automatizacion para ecommerce y SaaS.",
        ],
      },
      {
        title: "IA aplicada en workflows Rails",
        summary:
          "Integracion de IA donde mejora operaciones, contenido, traduccion o clasificacion.",
        points: [
          "APIs de IA dentro de sistemas existentes.",
          "Generacion de contenido y flujos multidioma.",
          "Automatizacion asistida con revision humana.",
        ],
      },
      {
        title: "Ecommerce systems engineering",
        summary:
          "Soporte a la mecanica backend que sostiene operaciones ecommerce internacionales.",
        points: [
          "Sincronizacion de catalogo, stock y precios.",
          "Checkout, pagos y logistica.",
          "Herramientas operativas para comercio de volumen.",
        ],
      },
      {
        title: "Consultoria tecnica",
        summary:
          "Claridad de arquitectura, plan de entrega y camino de implementacion antes de comprometer recursos.",
        points: [
          "Auditorias tecnicas y definicion de roadmap.",
          "Analisis de viabilidad y riesgos de integracion.",
          "Ejecucion senior para proyectos freelance acotados.",
        ],
      },
    ] satisfies Service[],
  },
  en: {
    seo: {
      defaultTitle: "Marc Armillas | Senior Ruby on Rails Developer",
      defaultDescription:
        "Senior Ruby on Rails developer in Barcelona specializing in integrations, automation, ecommerce systems and applied AI for business operations.",
    },
    nav: {
      role: "Rails, integrations and automation",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      cta: "Start a project",
      language: "Language",
      primary: "Primary navigation",
    },
    footer: {
      eyebrow: "Available for selected freelance projects",
      title:
        "Rails systems, integrations and automation for teams that need dependable execution.",
      body:
        "Based in Barcelona, working remotely with European companies, SaaS teams and ecommerce businesses.",
    },
    home: {
      seoTitle:
        "Senior Ruby on Rails Developer for Integrations, Automation and AI | Marc Armillas",
      seoDescription:
        "Hire Marc Armillas, a Senior Ruby on Rails developer specialized in backend systems, API integrations, ecommerce automation, Salesforce, payments and applied AI.",
      eyebrow: "Senior Ruby on Rails Developer in Barcelona",
      title: "Backend engineering for Rails systems that have to run in production.",
      lead:
        "I help SaaS, ecommerce and operations-heavy companies build reliable Ruby on Rails applications, connect external platforms, automate business workflows and apply AI where it creates measurable leverage.",
      primaryCta: "Discuss a project",
      secondaryCta: "View case studies",
      metricsLabel: "Professional highlights",
      metrics: [
        {
          value: "4+ years",
          label:
            "Building production software in business-critical environments.",
        },
        {
          value: "B2B + B2C",
          label: "International ecommerce experience across multiple markets.",
        },
        {
          value: "Rails first",
          label: "Deep focus on Ruby on Rails, backend systems and operational tooling.",
        },
        {
          value: "AI applied",
          label:
            "Language models integrated into real workflows, not as a standalone title.",
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
        title: "A specialist for complex Rails work, not a generic full stack profile.",
        body:
          "The portfolio is designed to make clients see a backend engineer who can own ambiguous technical problems, communicate with business teams and ship maintainable systems without constant supervision.",
      },
    },
    about: {
      seoTitle: "About Marc Armillas | Ruby on Rails Specialist",
      seoDescription:
        "Marc Armillas is a Senior Ruby on Rails developer focused on backend systems, integrations, automation and applied AI for business processes.",
      eyebrow: "About",
      title:
        "Backend Engineer specialized in integrations, automation and applied AI for business.",
      lead:
        "I work where Rails applications meet real business operations: catalog data, suppliers, payments, logistics, sales teams, internal tools and production reliability.",
      profile: {
        eyebrow: "Professional profile",
        title: "A pragmatic Rails specialist for systems with moving parts.",
        body:
          "My strongest work is not building simple brochure sites. It is taking complex operational requirements, translating them into stable Rails systems and keeping those systems maintainable as business rules evolve.",
      },
      seniorityTitle: "How seniority is communicated",
      positioning: [
        "Lead with ownership of production systems instead of years of experience alone.",
        "Show Wordans as multiple business outcomes, not one employer line.",
        "Use specific integration domains: suppliers, carriers, payments, Salesforce and AI workflows.",
        "Frame freelance work as full product responsibility: architecture, delivery, deployment and maintenance.",
        "Avoid junior signals such as generic full stack claims or visual-design-first messaging.",
      ],
      strengthsEyebrow: "Profile analysis",
      strengthsTitle: "Commercial strengths to emphasize",
      strengths: [
        {
          title: "Rails specialization",
          body:
            "Companies running Rails value focused experience more than broad but shallow technology lists.",
        },
        {
          title: "Integration depth",
          body:
            "Suppliers, carriers, payments and Salesforce are high-value areas because they connect directly to revenue and operations.",
        },
        {
          title: "Production mindset",
          body:
            "Infrastructure, deployments, performance and maintenance show that you can handle the full lifecycle of business-critical systems.",
        },
        {
          title: "Automation leverage",
          body:
            "Replacing manual work with reliable internal tooling creates a clear ROI story for decision makers.",
        },
        {
          title: "Applied AI",
          body:
            "AI is positioned as a business accelerator inside Rails workflows, not as a vague AI engineer label.",
        },
        {
          title: "Independent delivery",
          body:
            "Arcanmotors proves you can scope, build, deploy and evolve a product directly with a client.",
        },
      ],
      focus: {
        eyebrow: "Messaging focus",
        title: "What should get less attention",
        body:
          "Frontend tools should support the story, not lead it. The strongest commercial narrative is senior backend execution for companies with operational complexity.",
      },
      lowerValueTitle: "Lower-value signals",
      lowerValue: [
        "Generic full stack positioning.",
        "Static website or corporate page framing.",
        "Long technology lists without business context.",
        "Presenting AI as the main role instead of a capability inside business automation.",
      ],
    },
    projects: {
      seoTitle:
        "Rails Case Studies: Ecommerce, Integrations, Automation and AI | Marc Armillas",
      seoDescription:
        "Confidential case studies from Wordans and Arcanmotors covering supplier integrations, logistics, payments, Salesforce, internal tools and Rails product delivery.",
      eyebrow: "Case studies",
      title: "Production work translated into business cases.",
      lead:
        "These case studies explain the type of systems I build while keeping implementation details and confidential business information private.",
      responsibilities: "Responsibilities",
      outcome: "Business outcome",
    },
    services: {
      seoTitle: "Ruby on Rails Consulting, Integrations and Automation | Marc Armillas",
      seoDescription:
        "Rails consulting services for SaaS, ecommerce, legacy systems, API integrations, Salesforce, automation and applied AI.",
      eyebrow: "Services",
      title: "Services",
      pageTitle: "Rails consulting for companies with complex backend work.",
      lead:
        "Focused help for teams that need reliable backend execution, senior ownership and clean communication across technical and business constraints.",
    },
    contact: {
      seoTitle: "Contact Marc Armillas | Rails Developer Barcelona",
      seoDescription:
        "Contact Marc Armillas for Ruby on Rails development, backend consulting, API integrations, Salesforce, automation and applied AI projects.",
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
          "Under EUR 5,000",
          "EUR 5,000-15,000",
          "EUR 15,000-40,000",
          "Ongoing monthly support",
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
          "Rails applications that need senior backend ownership.",
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
        "The portfolio keeps the same technical focus as the positioning: Rails, PostgreSQL, Hotwire, Tailwind, integrations and production infrastructure.",
      groups: {
        Backend: ["Ruby", "Ruby on Rails", "Hotwire", "Turbo", "Stimulus"],
        Data: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis"],
        Infrastructure: ["AWS", "Linux", "Nginx", "Docker"],
        Integrations: [
          "REST APIs",
          "Salesforce",
          "Stripe",
          "Apple Pay",
          "Google Pay",
          "Carriers",
        ],
        Automation: ["Selenium", "Data processing", "Internal tooling", "Reporting"],
        AI: ["AI APIs", "Content generation", "Translation", "Classification"],
      },
    },
    rates: {
      eyebrow: "European freelance rates",
      title: "Indicative pricing",
      lead:
        "These ranges are positioning guidance for senior Rails, integrations and automation work in the European market. Final pricing depends on urgency, responsibility, scope and business criticality.",
      items: [
        {
          title: "Hourly consulting",
          range: "EUR 60-95/hour",
          body:
            "Good for audits, integration troubleshooting, technical direction and narrowly scoped implementation.",
        },
        {
          title: "Focused delivery blocks",
          range: "EUR 2,500-7,500",
          body:
            "Useful for defined integrations, internal tools, automation workflows or Rails feature delivery.",
        },
        {
          title: "Critical systems work",
          range: "EUR 90-130/hour",
          body:
            "Appropriate when the work touches revenue, checkout, production reliability or urgent business operations.",
        },
        {
          title: "Monthly retained support",
          range: "EUR 3,000-9,000/month",
          body:
            "Best for companies that need ongoing Rails maintenance, integrations and operational automation.",
        },
      ] satisfies Rate[],
    },
    caseStudies: [
      {
        title: "International supplier integrations",
        scope: "Wordans",
        system: "Ecommerce operations",
        summary:
          "Integrated supplier data flows for catalog synchronization, stock updates, pricing and operational order automation across international markets.",
        responsibilities: [
          "Processed XML, CSV and API-based supplier feeds.",
          "Mapped external product, stock and pricing data into Rails workflows.",
          "Automated repetitive import and export operations.",
          "Improved reliability around data validation and operational exceptions.",
        ],
        outcome:
          "Reduced manual operational work and improved the consistency of catalog, stock and pricing data used by ecommerce teams.",
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
          "Developed Salesforce integrations for lead creation, data synchronization and business-process automation between internal systems and sales workflows.",
        responsibilities: [
          "Automated lead creation and commercial data flows.",
          "Synchronized data between Rails systems and Salesforce.",
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
          "Connected language-model APIs to existing Rails workflows.",
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
          "Demonstrated end-to-end freelance ownership: from architecture and implementation to production deployment and ongoing maintenance.",
        tags: ["Rails", "AWS", "Nginx", "SEO", "Freelance"],
      },
    ] satisfies CaseStudy[],
    servicesList: [
      {
        title: "Ruby on Rails development",
        summary:
          "Design, build and improve Rails applications with maintainable backend architecture.",
        points: [
          "New Rails features and backend workflows.",
          "Legacy Rails maintenance and modernization.",
          "Performance, reliability and production support.",
        ],
      },
      {
        title: "API and system integrations",
        summary:
          "Connect external platforms cleanly, with resilient data flows and operational visibility.",
        points: [
          "REST APIs, XML and CSV pipelines.",
          "Suppliers, carriers, payment providers and Salesforce.",
          "Error handling, retries, validation and monitoring.",
        ],
      },
      {
        title: "Business automation",
        summary:
          "Turn repetitive operational work into dependable tools and background processes.",
        points: [
          "Internal tools for sales, support and operations.",
          "Data processing, reporting and synchronization.",
          "Workflow automation for ecommerce and SaaS teams.",
        ],
      },
      {
        title: "Applied AI in Rails workflows",
        summary:
          "Integrate AI where it improves operations, content workflows or data classification.",
        points: [
          "AI API integrations inside existing systems.",
          "Automated content generation and multilingual workflows.",
          "Human-reviewed automation for business processes.",
        ],
      },
      {
        title: "Ecommerce systems engineering",
        summary:
          "Support the backend mechanics behind international ecommerce operations.",
        points: [
          "Catalog, stock and price synchronization.",
          "Checkout, payments and logistics flows.",
          "Operational tools for high-volume commerce.",
        ],
      },
      {
        title: "Technical consulting",
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
