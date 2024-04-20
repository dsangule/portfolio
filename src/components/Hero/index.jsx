import Navbar from "../Navbar"

function Hero() {
  return (
    <div className="h-screen bg-[#6247AA] text-white">
      <Navbar />
      <div className="mx-auto mt-[25vh] w-[70vw] font-anek font-light tracking-tighter text-center text-xl lg:text-3xl">
        Welcome to my digital portfolio! My name is <b>Devansh Sangule</b> and I am a second-year college student passionate about software development. Come and explore my journey in software development.
      </div>
    </div>
  )
}

export default Hero