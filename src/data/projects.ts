export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

export type FeaturedProject = {
  title: string;
  category: string;
  image: string;
  link: string;
};

const ecommerceImage = new URL("../assects/e-commerce.png", import.meta.url).href;
const medicalCollegeImage = new URL("../assects/medicle.png", import.meta.url).href;
const schoolManagementImage = new URL("../assects/school.png", import.meta.url).href;

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: ecommerceImage,
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/mkError420/e-commerce-full-function",
    demo: "https://e-commerce-full-function-red.vercel.app/",
  },
  {
    title: "Medical_college",
    description: "A modern medical college website providing information about academic programs, admissions, faculty, and healthcare services, designed to support students, staff, and patients.",
    image: medicalCollegeImage,
    tags: ["Next.js", "Node.js", "Tailwind CSS", "ShadCN UI"],
    github: "https://github.com/mkError420/Medical_college",
    demo: "https://medical-college-nine.vercel.app/",
  },
  {
    title: "School Management",
    description: "A school management system that streamlines academic, administrative, and communication processes for students, teachers, and parents.",
    image: schoolManagementImage,
    tags: ["Next.js", "Node.js", "Tailwind CSS", "TensorFlow"],
    github: "https://github.com/mkError420/School-management",
    demo: "https://school-management-iota-mocha.vercel.app/admin",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, file sharing, and team communication features.",
    image: "https://picsum.photos/seed/task/800/600",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.",
    image: "https://picsum.photos/seed/fitness/800/600",
    tags: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
    github: "#",
    demo: "#",
  },
];

export const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: ecommerceImage,
    link: "/projects",
  },
  {
    title: "Medical_college",
    category: "Medical College",
    image: medicalCollegeImage,
    link: "/projects",
  },
];
