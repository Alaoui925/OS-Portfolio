import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Alaoui925",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "#",
    icon: FaLinkedin,
  },
  {
    id: 3,
    name: "Twitter",
    url: "#",
    icon: FaTwitter,
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:elalaouioussama2002@gmail.com",
    icon: FaEnvelope,
  },
];

export const contactInfo = {
  email: "elalaouioussama2002@gmail.com",
  phone: "+212 6 96 15 92 51",
  location: "Morocco",
  formEndpoint: "https://formsubmit.co/ajax/elalaouioussama2002@gmail.com",
};

export default socialLinks;
