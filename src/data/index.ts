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
  //   {
  //     name: "Voxel Engine",
  //     image: "",
  //     caption: "Engine for voxel-based graphic generation",
  //     github: "https://github.com/jonz9/voxel-engine",
  //     date: "April 2025",
  //     tags: ["C++", "C", "OpenGL", "GLFW", "GLAD"],
  //     description: [],
  //   },
  //   {
  //     name: "Gesture Navigation",
  //     image: "",
  //     caption: "Gesture navigation to control devices when AFK",
  //     github: "https://github.com/jonz9/gesture-navigator",
  //     date: "March 2025",
  //     tags: ["OpenCV", "Python", "TensorFlow", "Keras", "MediaPipe"],
  //     description: [],
  //   },
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

export const CameraGear = [
  {
    name: "sony a7iv",
    link: "https://www.amazon.ca/Sony-Full-Frame-Mirrorless-Interchangeable-Camera/dp/B09JZT6YK5/ref=sr_1_1?crid=I424MCD38O0Y&dib=eyJ2IjoiMSJ9.WVdlYOe1Hx_VulhFUsy-0rzJO-T9CHjfQEDqpI0ARbCbw-hqqtStq_JjAnZWWhdW0NgKVV4N2IsU-b0sBVatIk6P33Y9m-aDfjaTdaAcgorChYmfxD3orGWMXjivQuy1ytDA0gYKeGEo0ntubRYDz5qWZE-jxNRBZhm6-hCxXwWoLNGdOqWhQBWQnR08of4_VhVYMBdX2dInptCjxAk5w3xsT4qKkFAcxB4dbX_-58yF-pvQkk3-4eE0wJs8QiGg4FJ9kk9BYCfdela9palEu-p4mmxxd7QX2YkNT58_ieU.xsDsl0kQqSH6Dy6JJTGvQq1oDpyQZ3bg8JN_BUTsnE8&dib_tag=se&keywords=sony+a7iv&qid=1743913497&sprefix=sony+a7i%2Caps%2C130&sr=8-1",
  },
  {
    name: "sony FE 85mm f/1.8",
    link: "https://www.amazon.ca/Sony-85mm-F1-8-SEL85F18-Black/dp/B07XF2HBKK/ref=sr_1_3?crid=6EPFNHE1SJG&dib=eyJ2IjoiMSJ9.nHTR82NN5u8NTwXeaG1lzOu7eB2Lx7svFw4-AlKcYFBJzyltXIvCEtGMKoa9bFjpYMBMTxfi43hDCzAmhdd-lH63obYj1J0HwBJYziGbgIV2wjNdVKPySziIy7UEd0D9udeb5y4vjV1TQR3GL_9nSdt1BcIQp0oiW8uzIUj36ep5Dxd40LgnKknNXe1hc4DW0qKop1oi-AM5wp_ghbqdPCoTpxI-herS4DqoPHZHh_Y9vyY13UNXrUlWHOHRnftYu8-jgtG-_bc1uPSDOCAXfSCqKR1fA36EYpz_9SA67S8.SMnbp0nn-CfqgV6pz2-Y_wNWuyE0kO_i8JneMwFy2Jg&dib_tag=se&keywords=sony+fe+85mm&qid=1743913475&sprefix=sony+fe+85mm%2Caps%2C126&sr=8-3&ufe=app_do%3Aamzn1.fos.a9cfdadb-853e-427d-a2b7-ed306eff4f60",
  },
  {
    name: "sigma 24-70mm f/2.8 DG DN | Art",
    link: "https://www.amazon.ca/Sigma-24-70mm-F2-8-Mount-578965/dp/B081L5HJBP/ref=sr_1_3?crid=1HXWL9ZOALATK&dib=eyJ2IjoiMSJ9.v3hH3VL0UkTxxVLlEAr-Uy1rtOortPP5aaTzse6kH5DZ115cEQ5VdNa1yd5KoFRYDE9S7j1d8HfKbnJuSVLx-gBe-aeP9okdwlwrU1wk5Xg_E43boGr8lyxxuUYxE8Kwlj5d96GzBQKg2qvIa22kzZxDlwz5UjdabWgt_W1mTBxQFycJ-GFrwqpbi1GVvoXFbBNqJxmiwdayHS1VrS4N88oEI0oV3y3t9N8EKUjpta375EdgDQPwhCcUqnhrw72QYN18w0L-avgT985wbWbFE2zQ4HfdHLrFOqjqOSSd-0g.ZzmjDuTcmAm-3RP-HzoGeiMr1jATSiQYOO9lm_VtKeY&dib_tag=se&keywords=sigma+24-70mm+f%2F2.8&qid=1743913429&sprefix=sigma+24-70mm+f%2F2+8%2Caps%2C157&sr=8-3",
  },
];
