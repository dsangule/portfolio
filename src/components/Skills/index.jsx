"use client";

import { motion, useScroll } from "motion/react"

function Skills() {

  const { scrollYProgress } = useScroll()

  return (
    <div className="bg-[#6247AA] text-white h-screen px-[5vw] py-[3vw]" id="skills">
      <p className="text-3xl sm:text-5xl font-akshar text-center mb-4">Skills</p><br />
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ scaleX: scrollYProgress }}
        className="bg-blue-500 rounded-lg p-4 w-fit"
      >
        Hello, Framer Motion in Next.js!
      </motion.div>
    </div>
  )
}

export default Skills