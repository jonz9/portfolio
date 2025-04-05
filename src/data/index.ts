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
    { text: "Shooting RAWs at night", itemIcon: "🌌" },
    { text: "Running for a plate sometimes", itemIcon: "🏃‍♂️" },
    { text: "Computer Engineering @ University of Waterloo", itemIcon: "💻" },
  ],
};

export const ProjectsList = [
  {
    name: "Voxel Engine",
    image: "",
    caption: "Engine for voxel-based graphic generation",
    github: "https://github.com/jonz9/voxel-engine",
    date: "April 2025",
    tags: ["C++", "C", "OpenGL", "GLFW", "GLAD"],
    description: [],
  },
  {
    name: "Gesture Navigation",
    image: "",
    caption: "Gesture navigation to control devices when AFK",
    github: "https://github.com/jonz9/gesture-navigator",
    date: "March 2025",
    tags: ["OpenCV", "Python", "TensorFlow", "Keras", "MediaPipe"],
    description: [],
  },
  {
    name: "State Management System",
    image: "/static/images/stateeditor.png",
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
    image: "/static/images/imagesummarizer.png",
    caption: "Constructive image summarization for photographic content",
    github: "https://github.com/jonz9/image-summarizer",
    date: "Feb 2025",
    tags: [
      "OpenCV",
      "PyTorch",
      "LangChain",
      "Python",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
    ],
    description: [],
  },
  {
    name: "Stock Market Simulator",
    image: "/static/images/stockmarketsim.png",
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
    image: "/static/images/verity.png",
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
    image: "/static/images/moviestore.png",
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
    icon: "/static/images/amii.jpg",
    link: "https://amii.ca/",
    jobTitle: "ML Research Assistant",
    date: "Jan 2025 - Present",
    description: "Conducting research in Computational Linguistics.",
  },
  {
    name: "UWARG",
    icon: "/static/images/warg.jpeg",
    link: "https://www.uwarg.com/",
    jobTitle: "Autonomy Software Developer",
    date: "May 2024 - Present",
    description: "Developing autonomy software for drones.",
  },
  {
    name: "H.O.M.E. AI",
    icon: "/static/images/masiv.png",
    link: "https://www.h-o-m-e.ai/",
    jobTitle: "Full Stack Developer",
    date: "Jan 2025 - Feb 2025",
    description: "Built 3D rendering software for digital fabrication.",
  },
  {
    name: "FutureVault",
    icon: "/static/images/futurevault.png",
    link: "https://www.futurevault.com/",
    jobTitle: "UI/UX Design Intern",
    date: "May 2024 - Present",
    description:
      "Prototyped UI/UX and built wireframes for a digital vault software.",
  },
  {
    name: "UW BioMechatronics Design Team",
    icon: "/static/images/biomech.jpeg",
    link: "https://www.linkedin.com/company/university-of-waterloo-biomechatronics-team/",
    jobTitle: "Embedded Software Developer",
    date: "Sept 2023 - Apr 2024",
    description:
      "Developed firmware and data collection for electromyography sleeve.",
  },
];

export const Education = {
  name: "University of Waterloo",
  icon: "/static/images/uw.jpg",
  link: "https://uwaterloo.ca/engineering/",
  program: "Computer Engineering, BASc.",
  date: "2023 - 2028",
};

export const Publications = [
  {
    title: "",
    link: "",
  },
];
