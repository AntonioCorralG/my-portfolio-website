import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiVite,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

// Types
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planning";
  category: "frontend" | "fullstack" | "backend" | "mobile";
  featured: boolean;
}

// Sample project data - replace with your actual projects
export const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
    longDescription:
      "Built a full-featured e-commerce admin dashboard that provides comprehensive analytics, inventory management, and customer insights. The application features real-time data updates, responsive design, and an intuitive user interface that makes complex data easy to understand and act upon.",
    image: "/projects/ecommerce-dashboard.jpg",
    technologies: ["React", "TypeScript", "Chakra UI", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team coordination features.",
    longDescription:
      "Developed a modern task management application that enables teams to collaborate effectively. Features include drag-and-drop task organization, real-time notifications, file attachments, and comprehensive project tracking. Built with accessibility in mind, following WCAG guidelines.",
    image: "/projects/task-manager.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Firebase",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Analytics Platform",
    description:
      "A data visualization platform for weather patterns and climate analysis.",
    longDescription:
      "Created an interactive weather analytics platform that visualizes complex meteorological data through engaging charts and maps. The platform integrates multiple weather APIs and provides insights for both casual users and meteorology professionals.",
    image: "/projects/weather-platform.jpg",
    technologies: ["React", "D3.js", "TypeScript", "Python", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/weather-platform",
    status: "in-progress",
    category: "frontend",
    featured: false,
  },
  {
    id: "4",
    title: "Personal Finance Tracker",
    description:
      "A secure personal finance application with budget tracking and expense categorization.",
    longDescription:
      "Built a comprehensive personal finance tracking application that helps users manage their budgets, track expenses, and achieve financial goals. Features secure authentication, data encryption, and detailed financial reporting with interactive charts.",
    image: "/projects/finance-tracker.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/finance-tracker",
    liveUrl: "https://finance-tracker-demo.com",
    status: "completed",
    category: "fullstack",
    featured: true,
  },
  {
    id: "5",
    title: "Learning Management System",
    description:
      "An educational platform for online course delivery and student progress tracking.",
    longDescription:
      "Developed a comprehensive learning management system that enables educators to create and deliver online courses. Features include video streaming, interactive quizzes, progress tracking, and student-teacher communication tools.",
    image: "/projects/lms-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    githubUrl: "https://github.com/yourusername/lms-platform",
    status: "planning",
    category: "fullstack",
    featured: false,
  },
];

// Technology icon mapping
export const techIcons: Record<string, React.ElementType> = {
  React: FaReact,
  TypeScript: SiTypescript,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Chakra UI": SiChakraui,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: FaDatabase,
  Firebase: SiFirebase,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  Python: FaPython,
  "D3.js": FaJs, // D3.js can use a generic JS icon
  Prisma: FaDatabase, // Prisma can use a generic database icon
  "Socket.io": FaNodeJs, // Socket.io can use a generic Node.js icon
  AWS: FaDatabase, // AWS can use a generic database icon
  Stripe: FaJs, // Stripe integration might use JS icon
};