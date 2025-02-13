import React from "react";
import { FaJs, FaReact, FaCss3Alt, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

function Skill_Section({ language }) {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
    { name: "Github", icon: <FaGithub className="text-[#181717]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
  ];

  return (
    <section className="w-5/6 max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        {language ? "Habilidades técnicas" : "Technical Skills"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 blur-card rounded-lg 
                     hover:bg-white/10 transition-all duration-300 
                     transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill_Section;
