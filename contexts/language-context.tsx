"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "es";

const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    // Hero
    hero: {
      greeting: "Hi, my name is",
      name: "Edrian Díaz.",
      tagline: "I build things for the web.",
      description:
        "I'm a full stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, human-centered products that make a difference.",
      cta: "Check out my work",
    },
    // About
    about: {
      title: "About Me",
      p1: "Hello! I'm Edrian, a passionate full stack developer based in Tenerife. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.",
      p2: "I started my journey in web development back in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about how the web works!",
      p3: "Fast-forward to today, and I've had the privilege of working at a consulting and digitalization company, and several personal projects that have helped me grow as a developer.",
      techTitle: "Here are a few technologies I've been working with recently:",
    },
    // Experience
    experience: {
      title: "Where I've Worked",
      jobs: [
        {
          company: "E-asy",
          role: "Junio Full Stack Developer",
          period: "2025 — Present",
          description: [
            "Frontend Design with REACT and Tailwind CSS to create responsive and user-friendly interfaces",
            "Frontend communication with APIs using Axios and Fetch for seamless data integration",
            "Backend Development with Node.js and Express to build robust server-side applications",
            "Database Management using MongoDB and Mongoose for efficient data storage and retrieval",
          ],
        }],
    },
    // Projects
    projects: {
      title: "Some Things I've Built",
      featuredLabel: "Featured Project",
      otherTitle: "Other Noteworthy Projects",
      featured: [
        {
          title: "CloudSync Dashboard",
          description:
            "A comprehensive cloud management platform that allows users to monitor, analyze, and optimize their cloud infrastructure across multiple providers. Features real-time metrics, cost analysis, and automated scaling recommendations.",
        },
        {
          title: "DevCollab",
          description:
            "Real-time collaborative code editor with support for multiple programming languages, live cursors, and integrated video chat. Built for remote development teams to pair program effectively from anywhere.",
        },
        {
          title: "FinTrack Pro",
          description:
            "Personal finance management application with AI-powered insights, expense tracking, and investment portfolio analysis. Integrates with major banks and provides customized financial recommendations.",
        },
      ],
      other: [
        {
          title: "CLI Task Manager",
          description:
            "A command-line task management tool with natural language processing for adding tasks and smart scheduling.",
        },
        {
          title: "Weather Widget API",
          description:
            "RESTful API serving weather data from multiple providers with caching and rate limiting.",
        },
        {
          title: "Markdown Blog Engine",
          description:
            "Static site generator that converts Markdown files into a beautiful, customizable blog.",
        },
        {
          title: "E-commerce Starter Kit",
          description:
            "Full-stack e-commerce template with cart, checkout, and admin dashboard functionality.",
        },
        {
          title: "Real-time Chat App",
          description:
            "Instant messaging application with end-to-end encryption and support for file sharing.",
        },
        {
          title: "Portfolio Template",
          description:
            "Customizable portfolio template for developers with dark mode and multiple layout options.",
        },
      ],
    },
    // Contact
    contact: {
      label: "04. What's Next?",
      title: "Get In Touch",
      description:
        "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!",
      cta: "Say Hello",
    },
    // Footer
    footer: {
      credit: "Designed & Built by Alex Chen",
    },
  },
  es: {
    // Navigation
    nav: {
      about: "Sobre Mi",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Curriculum",
    },
    // Hero
    hero: {
      greeting: "Hola, mi nombre es",
      name: "Alex Chen.",
      tagline: "Construyo cosas para la web.",
      description:
        "Soy un desarrollador full stack especializado en crear experiencias digitales excepcionales. Actualmente enfocado en crear productos accesibles y centrados en el usuario que marquen la diferencia.",
      cta: "Mira mi trabajo",
    },
    // About
    about: {
      title: "Sobre Mi",
      p1: "¡Hola! Soy Alex, un apasionado desarrollador full stack con sede en San Francisco. Disfruto creando cosas que viven en internet, ya sean sitios web, aplicaciones o cualquier cosa intermedia. Mi objetivo es siempre construir productos que ofrezcan experiencias perfectas y de alto rendimiento.",
      p2: "Comencé mi viaje en el desarrollo web en 2018 cuando decidí probar a editar temas personalizados de Tumblr — ¡resulta que juntar HTML y CSS me enseñó mucho sobre cómo funciona la web!",
      p3: "Avanzando hasta hoy, he tenido el privilegio de trabajar en una startup, una gran corporación y un estudio de diseño dirigido por estudiantes. Mi enfoque principal en estos días es construir productos accesibles e inclusivos y experiencias digitales.",
      techTitle: "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
    },
    // Experience
    experience: {
      title: "Donde He Trabajado",
      jobs: [
        {
          company: "TechFlow Inc",
          role: "Desarrollador Full Stack Senior",
          period: "2023 — Presente",
          description: [
            "Lidero el desarrollo de una plataforma SaaS que sirve a más de 50,000 usuarios activos mensuales usando Next.js, TypeScript y PostgreSQL",
            "Diseñé e implementé un sistema de colaboración en tiempo real usando WebSockets, reduciendo la latencia en un 60%",
            "Mentoré a desarrolladores junior y establecí estándares de revisión de código que mejoraron la productividad del equipo en un 25%",
            "Colaboré con equipos de producto y diseño para lanzar más de 15 funciones manteniendo un 99.9% de tiempo activo",
          ],
        },
        {
          company: "DataSync Solutions",
          role: "Desarrollador Full Stack",
          period: "2021 — 2023",
          description: [
            "Construí y mantuve múltiples aplicaciones orientadas al cliente usando React, Node.js y MongoDB",
            "Desarrollé APIs RESTful y endpoints GraphQL sirviendo millones de solicitudes por día",
            "Implementé pipelines CI/CD que redujeron el tiempo de despliegue de horas a minutos",
            "Integré APIs de terceros incluyendo Stripe, Twilio y SendGrid para funciones de pago y comunicación",
          ],
        },
        {
          company: "StartupHub",
          role: "Desarrollador Junior",
          period: "2019 — 2021",
          description: [
            "Desarrollé aplicaciones web responsivas usando React y JavaScript moderno (ES6+)",
            "Colaboré con diseñadores UX para implementar interfaces pixel-perfect y accesibles",
            "Escribí pruebas unitarias e de integración logrando 85% de cobertura de código en toda la base de código",
            "Participé en procesos de desarrollo ágil incluyendo reuniones diarias y planificación de sprints",
          ],
        },
        {
          company: "Freelance",
          role: "Desarrollador Web",
          period: "2018 — 2019",
          description: [
            "Diseñé y construí sitios web personalizados para pequeñas empresas y emprendedores",
            "Creé temas y plugins de WordPress adaptados a los requisitos del cliente",
            "Gestioné relaciones con clientes y entregué proyectos a tiempo y dentro del presupuesto",
            "Gané experiencia con optimización SEO y análisis de sitios web",
          ],
        },
      ],
    },
    // Projects
    projects: {
      title: "Algunas Cosas Que He Construido",
      featuredLabel: "Proyecto Destacado",
      otherTitle: "Otros Proyectos Notables",
      featured: [
        {
          title: "CloudSync Dashboard",
          description:
            "Una plataforma integral de gestión en la nube que permite a los usuarios monitorear, analizar y optimizar su infraestructura en la nube en múltiples proveedores. Incluye métricas en tiempo real, análisis de costos y recomendaciones de escalado automatizado.",
        },
        {
          title: "DevCollab",
          description:
            "Editor de código colaborativo en tiempo real con soporte para múltiples lenguajes de programación, cursores en vivo y videollamada integrada. Construido para que equipos de desarrollo remoto programen en pareja de manera efectiva desde cualquier lugar.",
        },
        {
          title: "FinTrack Pro",
          description:
            "Aplicación de gestión de finanzas personales con información impulsada por IA, seguimiento de gastos y análisis de cartera de inversiones. Se integra con los principales bancos y proporciona recomendaciones financieras personalizadas.",
        },
      ],
      other: [
        {
          title: "CLI Task Manager",
          description:
            "Una herramienta de gestión de tareas de línea de comandos con procesamiento de lenguaje natural para agregar tareas y programación inteligente.",
        },
        {
          title: "Weather Widget API",
          description:
            "API RESTful que sirve datos meteorológicos de múltiples proveedores con caché y limitación de velocidad.",
        },
        {
          title: "Markdown Blog Engine",
          description:
            "Generador de sitios estáticos que convierte archivos Markdown en un blog hermoso y personalizable.",
        },
        {
          title: "E-commerce Starter Kit",
          description:
            "Plantilla de comercio electrónico full-stack con carrito, checkout y funcionalidad de panel de administración.",
        },
        {
          title: "Real-time Chat App",
          description:
            "Aplicación de mensajería instantánea con cifrado de extremo a extremo y soporte para compartir archivos.",
        },
        {
          title: "Portfolio Template",
          description:
            "PlantillA de portafolio personalizable para desarrolladores con modo oscuro y múltiples opciones de diseño.",
        },
      ],
    },
    // Contact
    contact: {
      label: "04. ¿Qué Sigue?",
      title: "Ponte en Contacto",
      description:
        "Actualmente estoy buscando nuevas oportunidades y mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta, quieras colaborar en un proyecto o simplemente quieras saludar, ¡haré mi mejor esfuerzo para responderte!",
      cta: "Di Hola",
    },
    // Footer
    footer: {
      credit: "Diseñado y Construido por Alex Chen",
    },
  },
};

type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
