import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Development Work",
          quote:
            "Transforming visionary designs into seamless digital realities.",
            content: [
                "🚀 Web Development Skills",
                "Frontend (HTML, CSS, JavaScript, React, Next.js)",
                "Backend (Node.js, Python, Flask, FastAPI, Django)",
                "Database Management (PostgreSQL, MongoDB, MySQL, Redis,  Prisma)",
                "DevOps (Docker, Kubernetes, AWS, GCP, Azure, git, GitHub CI/CD, Kafka, RabbitMQ, Nginx, Grafana, Prometheus, Loki, ELK Stack)",
                "API Development (REST, GraphQL)",
                "AI Integration (OpenAI, Google Cloud AI, Hugging Face)",
                "Web Security (OWASP Top 10, SAST, DAST, IAST, RASP)",
                "🚀 AI Development Skills: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, AI Ethics and Safety",
                "💻 Notable Projects:",
                "NeuroVid – A full-featured browser-based video recording and management platform built with Next.js, Prisma, and Bun.",
                "Noor Garments E-Commerce – A scalable e-commerce solution with an admin dashboard, 3D product viewer, sales analytics, and scraping module.",
                "PortaNest – A container orchestration dashboard to manage Docker/Kubernetes clusters with built-in Prometheus + Grafana monitoring.",
                "InsightBoard – Real-time error tracking and APM (Application Performance Monitoring) web dashboard for web apps.",
                "ScanSecure – Web vulnerability scanner and report generator using Flask, GraphQL, and Socket.IO for live security insights."
              ],
        }}
        imageSrc={"/images/dev.webp"}
      />
    </>
  );
};

export default DevWorkPage;
