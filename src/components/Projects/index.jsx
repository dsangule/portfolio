import Project from "./Project"

function Projects() {
  return (
    <div className="bg-white min-h-[50vh] px-[5vw] py-[5vw]" id="projects">
      <p className="text-5xl font-akshar text-center">Projects</p><br />
      <Project />
      <br/>
      <Project />
      <br/>
      <Project />
    </div>
  )
}

export default Projects