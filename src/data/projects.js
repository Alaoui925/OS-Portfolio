import woodoraImg from "@/assets/images/WoodoraProject.png";
import uniconnectImg from "@/assets/images/uniconnectProject.png";
import portfolioImg from "@/assets/images/portfolioProject.png";

const projects = [
  {
    id: 1,
    title: "Woodora",
    description:
      "A luxury furniture platform offering curated collections with a seamless browsing and shopping experience.",
    image: woodoraImg,
    technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/Alaoui925/woodora",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "UniConnect",
    description:
      "A student community platform enabling collaboration, resource sharing, and networking across universities.",
    image: uniconnectImg,
    technologies: ["React", "Laravel", "MySQL", "REST API"],
    github: "https://github.com/Alaoui925/uniconnect",
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS.",
    image: portfolioImg,
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/Alaoui925/My-Portfolio",
    live: null,
    featured: false,
  },
];

export default projects;
