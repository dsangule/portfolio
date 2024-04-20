import StackIcon from "tech-stack-icons";

function Skills() {
  return (
    <div className="bg-white min-h-[50vh] px-32 py-12">
        <div>
            <StackIcon className="h-20 w-20 my-4 mx-12" name="html5" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="css3" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="js" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="tailwind" />
        </div>
        <div>
            <StackIcon className="h-20 w-20 my-4 mx-12" name="nodejs" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="reactjs" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="nextjs2" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="mysql" />
        </div>
        <div>
            <StackIcon className="h-20 w-20 my-4 mx-12" name="github" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="git" />
        </div>
        <div>
            <StackIcon className="h-20 w-20 my-4 mx-12" name="c++" />
            <StackIcon className="h-20 w-20 my-4 mx-12" name="python" />
        </div>
    </div>
  )
}

export default Skills