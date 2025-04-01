import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { About } from "@/data/index";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-5 mt-20 items-left">
      <h1 className="font-bold text-md">{About.name}</h1>
      <p className="text-md">
        I'm a computer engineering student at the University of Waterloo
      </p>
    </div>
  );
}
