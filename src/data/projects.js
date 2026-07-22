import woodoraImg from "@/assets/images/woodoraProject.png";
import uniconnectImg from "@/assets/images/uniconnectProject.png";
import portfolioImg from "@/assets/images/portfolioProject.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A luxury furniture platform offering curated collections with a seamless browsing and shopping experience.",
    image: portfolioImg,
    technologies: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
    github: "https://github.com/your-username/portfolio",
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
    github: "https://github.com/your-username/uniconnect",
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "Woodora",
    description:
      "A luxury furniture platform offering curated collections with a seamless browsing and shopping experience.",
    image: woodoraImg,
    technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/your-username/woodora",
    live: null,
    featured: false,
  },
];

export default projects;
