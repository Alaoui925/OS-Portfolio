import {
  Monitor,
  Brain,
  Palette,
  Server,
  Smartphone,
  Search,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive, and performant web applications using React, Next.js, and cutting-edge technologies.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "AI & ML Solutions",
    description:
      "Developing intelligent systems, machine learning models, and data-driven solutions for real-world problems.",
    icon: Brain,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Creating elegant, user-centered interfaces with modern design principles and seamless user experiences.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Backend Development",
    description:
      "Building robust APIs, server architectures, and database systems with Node.js, Python, and MySQL.",
    icon: Server,
  },
  {
    id: 5,
    title: "Mobile Development",
    description:
      "Crafting cross-platform mobile applications with React Native for iOS and Android.",
    icon: Smartphone,
  },
  {
    id: 6,
    title: "SEO Optimization",
    description:
      "Improving website visibility and search rankings through technical SEO and performance optimization.",
    icon: Search,
  },
];

export default services;
