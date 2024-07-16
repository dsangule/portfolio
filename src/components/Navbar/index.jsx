"use client";

import Link from "next/link"

function Navbar() {

    return (
        <nav className="text-white text-sm sm:text-lg lg:text-xl font-oswald p-5 flex justify-end">
            <Link className="px-1 sm:px-2 lg:px-4 hover:text-[#C8B8DB]" href="#skills">Skills</Link>
            <Link className="px-1 sm:px-2 lg:px-4 hover:text-[#C8B8DB]" href="#about">About</Link>
            <Link className="px-1 sm:px-2 lg:px-4 hover:text-[#C8B8DB]" href="#projects">Projects</Link>
            <Link className="px-1 sm:px-2 lg:px-4 hover:text-[#C8B8DB]" href="#contact">Contact</Link>
        </nav>
    )
}

export default Navbar