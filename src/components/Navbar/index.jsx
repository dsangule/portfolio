import Link from "next/link"

function Navbar() {
    return (
        <nav className="text-white text-xl font-oswald p-5 flex justify-end">
            <Link className="px-4 hover:text-[#C8B8DB]" href="/">Skills</Link>
            <Link className="px-4 hover:text-[#C8B8DB]" href="/">Education</Link>
            <Link className="px-4 hover:text-[#C8B8DB]" href="/">Projects</Link>
            <Link className="px-4 hover:text-[#C8B8DB]" href="/">Contact</Link>
        </nav>
    )
}

export default Navbar