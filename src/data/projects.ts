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
const architectureFirmImage = new URL("../assects/architecture.png", import.meta.url).href;
const servicesHubImage = new URL("../assects/service.png", import.meta.url).href;
const portfolioImage = new URL("../assects/portfolio.png", import.meta.url).href;
const offlinePharmacyImage = new URL("../assects/pharmacy.png", import.meta.url).href;
const buildingStructureImage = new URL("../assects/building.png", import.meta.url).href;

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
    title: "Architecture Firm Website",
    description: "A visually engaging platform that presents architectural works, concepts, and inspirations, reflecting creativity, precision, and modern design trends.",
    image: architectureFirmImage,
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mkError420/Acier-Building-Tech",
    demo: "https://acier-building-technology.netlify.app/",
  },
  {
    title: "Services Hub",
    description: "A web-based services hub developed to streamline service discovery, booking, and management with a user-friendly interface.",
    image: servicesHubImage,
    tags: ["Next.js", "Tailwind CSS", "Firebase", "shadecn UI"],
    github: "https://github.com/mkError420/Service-website",
    demo: "https://services-hub-pro.netlify.app/",
  },
  {
    title: "Personal Portfolio",
    description: "A modern personal portfolio website showcasing projects, skills, and contact information, providing a comprehensive digital representation of a professional online presence.",
    image: portfolioImage,
    tags: ["Next.js", "Tailwind CSS", "Firebase", "shadecn UI"],
    github: "https://github.com/mkError420/Singer-portfolio-only-frontend",
    demo: "https://singer-portfolio-only-frontend.vercel.app/",
  },
  {
    title: "Offline Pharmacy POS",
    description: "An offline point-of-sale system for pharmacies, designed to manage sales, inventory, and customer data without requiring an internet connection.",
    image: offlinePharmacyImage,
    tags: ["Next.js", "Tailwind CSS", "Firebase", "shadecn UI","electron","nodejs","mongodb"],
    github: "#",
    demo: "https://new-pos-beige.vercel.app/",
  },
  {
    title: "Building Structure Services",
    description: "A web application for a building structure services company, showcasing their expertise in architectural design, engineering, and construction management, while providing an intuitive platform for clients to explore services and get in touch.",
    image: buildingStructureImage,
    tags: ["Wordpress", "custom theme", "elementor", "woocommerce","contact form 7"],
    github: "#",
    demo: "https://acierbuildingtech.nextgenfarmingbd.com/",
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
