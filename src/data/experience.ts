export interface Experience {
  date: string
  title: string
  company: string
  description: string
  link?: string
}

export const EXPERIENCE: Experience[] = [
  {
    date: "2025",
    title: "DevOps & Backend Engineer",
    company: "End-to-End Automation & Infrastructure Platform",
    description:
      "Despliegue y comunicación de servicios en producción (frontend, backend y base de datos relacional). Orquestación y gestión de clústeres con Kubernetes, automatización de integración y despliegue continuo (CI/CD), y desarrollo de scripts en Python para operativas de datos y tareas del sistema. Monitorización y resolución de incidencias mediante análisis de logs y control de métricas.",
  },
  {
    date: "2023-2024",
    title: "Data Analyst",
    company: "SDG Group – Banco Santander",
    description:
      "Análisis y modelado de datos en Snowflake y Power BI, aplicando consultas SQL avanzadas, ETL con Power Query y métricas DAX para crear dashboards interactivos y optimizar la toma de decisiones en RR. HH.",
  },
  {
    date: "2022-2023",
    title: "Python Developer",
    company: "Internship",
    description:
      "Análisis de datos de ventas con Python (pandas, NumPy y matplotlib). Creación de métricas y visualizaciones para analizar tendencias y detectar patrones en los datos.",
  },
  {
    date: "2020-2021",
    title: "Web Developer",
    company: "Dos Setenta Marketing y Desarrollo",
    description:
      "Maquetación y desarrollo web con HTML5, CSS3 y JavaScript. Mantenimiento de sitios WordPress y PrestaShop, configuración de plugins y pasarelas de pago seguras.",
  },
]
