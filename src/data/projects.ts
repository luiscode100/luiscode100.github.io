export interface ProjectTag {
  name: string
  class: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: ProjectTag[]
  github: string
  link?: string
}

export const TAGS = {
  REACT: { name: "React.js", class: "bg-black text-white" },
  DOCKER: { name: "Docker", class: "bg-black text-white" },
  PANDAS: { name: "Pandas", class: "bg-black text-white" },
  FASTAPI: { name: "FastAPI", class: "bg-black text-white" },
  EVIDENTLY: { name: "Evidently", class: "bg-black text-white" },
  KUBERNETES: { name: "Kubernetes", class: "bg-black text-white" },
  CICD: { name: "CI/CD", class: "bg-black text-white" },
  VITE: { name: "Vite.js", class: "bg-black text-white" },
  TAILWIND: { name: "Tailwind", class: "bg-black text-white" },
  JWT: { name: "JWT", class: "bg-black text-white" },
  NODE: { name: "Node.js", class: "bg-black text-white" },
  POSTGRESQL: { name: "PostgreSQL", class: "bg-black text-white" },
  PYTHON: { name: "Python", class: "bg-black text-white" },
  LAMBDA: { name: "Lambda", class: "bg-black text-white" },
  SQS: { name: "SQS", class: "bg-black text-white" },
  SNS: { name: "SNS", class: "bg-black text-white" },
  S3: { name: "S3", class: "bg-black text-white" },
  RDS: { name: "RDS", class: "bg-black text-white" },
  VPC: { name: "VPC", class: "bg-black text-white" },
  DYNAMODB: { name: "DynamoDB", class: "bg-black text-white" },
  API: { name: "API", class: "bg-black text-white" },
  TERRAFORM: { name: "Terraform", class: "bg-black text-white" },
} satisfies Record<string, ProjectTag>

export const PROJECTS: Project[] = [
  {
    title: "SecureCarx",
    description:
      "Desarrollo de un sistema end-to-end para la estimación de costes en seguros. Implementa una API con FastAPI para inferencia y feedback continuo, registro y versionado de modelos con MLflow, monitorización de data drift con Evidently AI, y arquitectura multi-servicio contenerizada con Docker Compose.",
    github: "https://github.com/luiscode100/SecureCarX",
    image: "/projects/securecarx.webp",
    tags: [
      TAGS.DOCKER,
      TAGS.PYTHON,
      TAGS.KUBERNETES,
      TAGS.CICD,
      TAGS.FASTAPI,
      TAGS.EVIDENTLY,
      TAGS.PANDAS,
      TAGS.POSTGRESQL,
    ],
  },
  {
    title: "Aplicación Full Stack",
    description:
      "Desarrollo de una aplicación full stack para la gestión de tareas y estados. Implementa una API REST con arquitectura por capas, seguridad avanzada (CORS, Helmet, Rate Limiting), autenticación segura y base de datos PostgreSQL desplegada en producción.",
    link: "https://tasklist-gamma-nine.vercel.app",
    github: "https://github.com/luiscode100/tasklist",
    image: "/projects/tasklist.webp",
    tags: [TAGS.VITE, TAGS.TAILWIND, TAGS.REACT, TAGS.NODE, TAGS.JWT, TAGS.POSTGRESQL],
  },
  {
    title: "aws-claims-management – API serverless para gestión de siniestros",
    description:
      "Desarrollo de una plataforma escalable para el procesamiento de siniestros mediante una arquitectura de microservicios. El sistema utiliza colas SQS para gestionar el procesamiento de los siniestros y automatiza el cálculo de costes y la generación de informes en PDF.",
    github: "https://github.com/luiscode100/aws-claims-management",
    image: "/projects/claims.webp",
    tags: [TAGS.PYTHON, TAGS.VPC, TAGS.RDS, TAGS.LAMBDA, TAGS.SQS, TAGS.SNS],
  },
  {
    title: "FaceDetect – API serverless para detección de rostros",
    description:
      "Aplicación en la nube que identifica rostros en imágenes enviadas por los usuarios. Al subir una imagen, el sistema analiza las caras y guarda los resultados. Todo el proceso se ejecuta en AWS sin servidores.",
    github: "https://github.com/luiscode100/aws-face-detection",
    image: "/projects/detect_faces.webp",
    tags: [TAGS.PYTHON, TAGS.LAMBDA, TAGS.DYNAMODB, TAGS.S3, TAGS.API],
  },
  {
    title: "AWS AutoScaling Web Cluster – Despliegue automatizado con Terraform",
    description:
      "Infraestructura web en AWS desplegada con Terraform. El sistema crea, configura y escala instancias EC2 según la carga mediante un balanceador de aplicación y autoescalado.",
    github: "https://github.com/luiscode100/terraform-aws-autoscaling-web-cluster",
    image: "/projects/aws_autoscaling.webp",
    tags: [TAGS.TERRAFORM],
  },
]
