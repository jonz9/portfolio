import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export type Command = {
  id: string;
  name: string;
  shortcut?: string[];
  action: () => void;
  section: string;
};

export const getCommands = (
  router: ReturnType<typeof useRouter>,
  theme: ReturnType<typeof useTheme>
) => {
  return [
    {
      id: "home",
      name: "Go to Home",
      shortcut: ["shift", "H"],
      action: () => router.push("/"),
      section: "Navigation",
    },
    {
      id: "projects",
      name: "View Projects",
      shortcut: ["shift", "P"],
      action: () => router.push("/projects"),
      section: "Navigation",
    },
    // {
    //   id: "writing",
    //   name: "View Writings",
    //   shortcut: ["shift", "W"],
    //   action: () => router.push("/writing"),
    //   section: "Navigation",
    // },
    {
      id: "photography",
      name: "View Photography",
      shortcut: ["shift", "F"],
      action: () => router.push("/photography"),
      section: "Navigation",
    },
    {
      id: "theme",
      name: "Toggle Theme",
      shortcut: ["shift", "T"],
      action: () => {
        theme.setTheme(theme.theme === "dark" ? "light" : "dark");
      },
      section: "Preferences",
    },
    {
      id: "resume",
      name: "Resume",
      shortcut: ["shift", "R"],
      action: () => {
        window.open("/static/files/JohnZhangResume.pdf", "_blank");
      },
      section: "Links",
    },
    {
      id: "email",
      name: "Email",
      shortcut: ["shift", "E"],
      action: () => {
        window.open("mailto:j444zhan@uwaterloo.ca", "_blank");
      },
      section: "Links",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["shift", "L"],
      action: () => {
        window.open(
          "https://www.linkedin.com/in/john-zhang-2665b9236/",
          "_blank"
        );
      },
      section: "Links",
    },
    {
      id: "instagram",
      name: "Instagram",
      shortcut: ["shift", "I"],
      action: () => {
        window.open("https://www.instagram.com/zhanger_shots/", "_blank");
      },
      section: "Links",
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["shift", "G"],
      action: () => {
        window.open("https://github.com/jonz9", "_blank");
      },
      section: "Links",
    },
    {
      id: "devpost",
      name: "Devpost",
      shortcut: ["shift", "D"],
      action: () => {
        window.open(
          "https://devpost.com/zhangjohn-ca?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
          "_blank"
        );
      },
      section: "Links",
    },
  ];
};
