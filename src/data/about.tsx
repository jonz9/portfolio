import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export const About = {
  name: "John",
  email: "j444zhan@uwaterloo.ca",
  phone: "+1 (647) 581-6930",
  bio: [
    // {
    //   text: "NLP Research @ Alberta Machine Intelligence Institute (Amii)",
    // },
    // { text: "Drone Autonomy @ UWARG" },
    {
      text: "Running low on sleep",
    },
    { text: "Shooting RAWs at night" },
    { text: "Running for a plate sometimes" },
    { text: "Computer Engineering @ University of Waterloo" },
  ],
};

export const Socials = [
  {
    name: "email",
    url: "mailto:j444zhan@uwaterloo.ca",
    icon: Mail,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/john-zhang-2665b9236/",
    icon: Linkedin,
  },
  {
    name: "github",
    url: "https://github.com/jonz9",
    icon: Github,
  },
  {
    name: "insta",
    url: "https://www.instagram.com/zhanger_shots/",
    icon: Instagram,
  },
];
