import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

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
    { text: "Shoot RAWs at night", itemIcon: "🌌" },
    { text: "Run for a plate sometimes", itemIcon: "🏃‍♂️" },
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

export const Experiences = [];

export const Publications = [];
