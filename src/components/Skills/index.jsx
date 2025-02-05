"use client";

import { motion } from "motion/react"
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPython, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiAdonisjs, SiCplusplus, SiUnity, SiArduino, 
  SiTailwindcss, SiFramer, SiGodotengine 
} from "react-icons/si";

const skills = [
  { id: 1, name: "React.js", icon: <FaReact className="text-blue-400" size={50} /> },
  { id: 2, name: "Next.js", icon: <SiNextdotjs className="text-black" size={50} /> },
  { id: 3, name: "Node.js", icon: <FaNodeJs className="text-green-500" size={50} /> },
  { id: 4, name: "AdonisJs", icon: <SiAdonisjs className="text-purple-500" size={50} /> },
  { id: 5, name: "C++", icon: <SiCplusplus className="text-blue-600" size={50} /> },
  { id: 6, name: "Python", icon: <FaPython className="text-yellow-500" size={50} /> },
  { id: 7, name: "Unity", icon: <SiUnity className="text-gray-700" size={50} /> },
  { id: 8, name: "Godot", icon: <SiGodotengine className="text-blue-500" size={50} /> },
  { id: 9, name: "Arduino", icon: <SiArduino className="text-green-600" size={50} /> },
  { id: 10, name: "Git", icon: <FaGitAlt className="text-orange-600" size={50} /> },
  { id: 11, name: "GitHub", icon: <FaGithub className="text-black" size={50} /> },
  { id: 12, name: "HTML", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { id: 13, name: "CSS", icon: <FaCss3 className="text-blue-500" size={50} /> },
  { id: 14, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={50} /> },
  { id: 15, name: "Framer Motion", icon: <SiFramer className="text-pink-500" size={50} /> },
  { id: 16, name: "JavaScript", icon: <FaJs className="text-yellow-400" size={50} /> }
];

function Skills() {

  var spacing = 150;
  const positions = [];
  let layer = 0, countInLayer = 0, maxInLayer = 1;

  for (let i = 0; i < skills.length; i++) {
    countInLayer++;
    if (countInLayer >= maxInLayer) {
      countInLayer = 0;
      layer++;
      maxInLayer = layer * 6;
    }
    const angle = (countInLayer / maxInLayer) * (2 * Math.PI);
    const x = Math.cos(angle) * layer * spacing;
    const y = Math.sin(angle) * layer * spacing;
    positions.push({ x, y });

  }

  return (
    <div className="bg-[#6247AA] text-white flex content-between justify-center items-center h-screen px-[5vw] py-[3vw]" id="skills">
      <p className="text-3xl sm:text-5xl font-akshar text-center mb-4">Skills</p><br />
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          className="absolute flex justify-center items-center"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          whileInView={{
            x: positions[index].x,
            y: positions[index].y,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.2,
            },
          }}
        >
          <motion.div
            className="flex justify-center items-center bg-white p-4 rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 1.2, transition: { duration: 0.1 } }}
          >
            {skill.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default Skills