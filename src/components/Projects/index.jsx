import Project from "./Project"

function Projects() {

  const projects = [
    {
      key: 1,
      title: "First Responders Alliance",
      desc: "A project made for hack genesis, an online hackathon conducted on Devfolio.",
      imgsrc: "/void-hack-genesis.png",
      link: "https://github.com/dsangule/void-hack-genesis",
    },
    {
      key: 2,
      title: "RoboWars",
      desc: "A First Person Shooter multiplayer game made using Unity engine for Student Mentorship Programme by Loop Club of School of Engineering, Jawaharlal Nehru University, Delhi.",
      imgsrc: "/RoboWarsCover.png",
      link: "https://github.com/dsangule/RoboWars",
    },
  ]

  return (
    <div className="bg-white min-h-[50vh] px-[5vw] py-[5vw]" id="projects">
      <p className="text-3xl sm:text-5xl font-akshar text-center">Projects</p><br />
      {projects.map((project)=>{
        return <div key={project.key}>
          <Project item={project} />
          <br />
        </div>
      })}
    </div>
  )
}

export default Projects