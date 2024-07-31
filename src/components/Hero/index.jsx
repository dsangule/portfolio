import Navbar from "../Navbar"

function Hero() {
  return (
    <div className="h-screen bg-[#6247AA] text-white">
      <Navbar />
      <div className="mx-auto w-[70vw] h-full font-anek font-light tracking-tighter text-center text-xl sm:text-3xl">
        <div className="absolute w-[70vw] top-1/2 -translate-y-1/2">
          Welcome to my digital portfolio! My name is <span className="font-semibold text-indigo-950">Devansh Sangule</span> and I am a third-year college student passionate about software development. Come and explore my journey in software development.
        </div>
      </div>
    </div>
  )
}

export default Hero