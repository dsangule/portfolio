import Image from "next/image"
import Link from "next/link"
import StackIcon from "tech-stack-icons"

function Project() {
  return (
    <div className="bg-black flex flex-col md:flex-row text-white rounded-md">
      <Image src={"/void-hack-genesis.png"} height={500} width={500} className="w-[100%] md:w-[40%] mr-2 rounded-md" />
      <div className="p-4 flex flex-col w-full">
        <p className="text-xl font-oswald mb-2">
          First Responders Alliance
        </p>
        <p className="font-akshar font-extralight flex-grow">
            A project made for hack genesis, an online hackathon conducted on Devfolio.
        </p>
        <div>
          <Link href={"https://github.com/dsangule/void-hack-genesis"} target="_blank" className="bg-white text-black text-xs p-0 flex w-fit pr-1 rounded-full gap-1">
            <StackIcon name="github" className="w-6" />
            <p className="content-center h-6">
              Github Repository
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project