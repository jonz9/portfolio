import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaUniversity,
} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import uwLogo from "../../public/static/images/uw.jpg";
import amiiLogo from "../../public/static/images/amii.jpg";
import uwargLogo from "../../public/static/images/warg.jpeg";
import futurevaultLogo from "../../public/static/images/futurevault.png";
import masivLogo from "../../public/static/images/masiv.png";
import biomechLogo from "../../public/static/images/biomech.jpeg";

export const About = {
  name: "John Zhang",
  email: "j444zhan@uwaterloo.ca",
  phone: "+1 (647) 581-6930",
  socials: [
    {
      name: "email",
      url: "mailto:j444zhan@uwaterloo.ca",
      icon: FaEnvelope,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/john-zhang-2665b9236/",
      icon: FaLinkedin,
    },
    {
      name: "github",
      url: "https://github.com/jonz9",
      icon: FaGithub,
    },
    {
      name: "insta",
      url: "https://www.instagram.com/zhanger_shots/",
      icon: FaInstagram,
    },
    {
      name: "devpost",
      url: "https://devpost.com/zhangjohn-ca?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      icon: SiDevpost,
    },
  ],
  bio: [
    {
      text: "NLP Research @ Alberta Machine Intelligence Institute (Amii)",
      itemIcon: "🔍",
    },
    { text: "Drone Autonomy @ UWARG", itemIcon: "🚁" },
    {
      text: "Building a voxel engine to render 3D objects in voxel space",
      itemIcon: "🎨",
    },
    { text: "Shooting RAWs at night", itemIcon: "🌌" },
    { text: "Running for a plate sometimes", itemIcon: "🏃‍♂️" },
    { text: "Computer Engineering @ University of Waterloo", itemIcon: "💻" },
  ],
};

export const Projects = [
  {
    name: "Voxel Engine",
    caption: "engine for voxel-based graphic generation",
    github: "https://github.com/jonz9/voxel-engine",
    date: "April 2025",
    tags: ["C++", "C", "OpenGL", "GLFW", "GLAD"],
    description: [],
  },
  {
    name: "Gesture Navigation",
    caption: "Gesture navigation for devices",
    github: "https://github.com/jonz9/gesture-navigator",
    date: "March 2025",
    tags: ["OpenCV", "Python", "TensorFlow", "Keras", "MediaPipe"],
    description: [],
  },
  {
    name: "State Management System",
    caption:
      "State management and code generation for game and app development",
    github: "https://github.com/jonz9/state-management-system",
    date: "March 2025",
    tags: [
      "Flask",
      "Gemini",
      "Monaco Editor",
      "Next.js",
      "React Flow",
      "TypeScript",
    ],
    collaborators: ["@peter-z-zhang"],
    description: [],
  },
  {
    name: "Image Summarizer",
    caption: "Constructive image summarization for photographic content",
    github: "https://github.com/jonz9/image-summarizer",
    date: "Feb 2025",
    tags: [
      "OpenCV",
      "Python",
      "LangChain",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
    ],
    description: [],
  },
  {
    name: "Stock Market Simulator",
    caption: "Stock market simulator for trading stocks",
    github: "https://github.com/maostar1010/stock-simulation",
    date: "Feb 2025",
    tags: [
      "Django",
      "Matplotlib",
      "ApexCharts",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Keras",
      "SqLite",
      "React.js",
      "TailwindCSS",
    ],
    collaborators: ["@maostar1010"],
    description: [],
  },
  {
    name: "Verity",
    caption: "Charity management platform for non-profits on the blockchain",
    github: "https://github.com/jonz9/verity",
    date: "May 2024",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "AstroKode",
      "Docker",
      "React.js",
      "TailwindCSS",
    ],
    collaborators: ["@max @joseph @danny @andy"],
    description: [],
  },
  {
    name: "MovieStore",
    caption: "Movie retail platform for renting and buying movies",
    github: "https://github.com/jonz9/MovieStore",
    date: "July 2023",
    tags: ["Firebase", "Vue.js", "CSS", "JavaScript"],
    description: [],
  },
];

export const Experiences = [
  {
    name: "Alberta Machine Intelligence Institute (Amii)",
    icon: amiiLogo,
    link: "https://amii.ca/",
    jobTitle: "NLP Research",
    date: "Jan 2025 - Present",
    description: "Conducting research in NLP and Computational Linguistics.",
  },
  {
    name: "UWARG",
    icon: uwargLogo,
    link: "https://uwarg.ca/",
    jobTitle: "Autonomy Software Developer",
    date: "May 2024 - Present",
    description: "Developing autonomy software for drones.",
  },
  {
    name: "Mercedes and Singh Innovative Venues",
    icon: masivLogo,
    link: "https://www.mercedesandsingh.com/",
    jobTitle: "Full Stack Developer",
    date: "Jan 2025 - Feb 2025",
    description: "Built 3D rendering software for digital fabrication.",
  },
  {
    name: "FutureVault",
    icon: futurevaultLogo,
    link: "https://futurevault.ca/",
    jobTitle: "UI/UX Design Intern",
    date: "May 2024 - Present",
    description:
      "Prototyped UI/UX and built wireframes for a digital vault software.",
  },
  {
    name: "UW BioMechatronics Design Team",
    icon: biomechLogo,
    link: "https://www.uwbio.ca/",
    jobTitle: "Embedded Software Developer",
    date: "Sept 2023 - Apr 2024",
    description:
      "Developed firmware and data collection for electromyography sleeve.",
  },
];

export const Education = {
  name: "University of Waterloo",
  icon: uwLogo,
  link: "https://uwaterloo.ca/",
  program: "Computer Engineering, BASc.",
  date: "2023 - 2028",
};

export const Publications = [];
