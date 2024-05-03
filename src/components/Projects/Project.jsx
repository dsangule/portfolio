import Image from "next/image"
import StackIcon from "tech-stack-icons"

function Project() {
  return (
    <div className="bg-black flex flex-col md:flex-row text-white rounded-md">
        <Image src={"/void-hack-genesis.png"} height={500} width={500} className="w-[100%] md:w-[40%] mr-2 rounded-md" />
        <div className="p-2">
            <p className="text-xl font-oswald">
                First Responders Alliance
            </p>
            <p className="font-akshar font-extralight">
                A project made for hack genesis, an online hackathon conducted on Devfolio.
            </p>
            <div className="bg-white text-black text-sm p-0 flex w-fit pr-1 rounded-full gap-1">
              <StackIcon name="github" className="w-6" />
              <p className="text-center h-fit">
                https://github.com/dsangule/void-hack-genesis
              </p>
            </div>
        </div>
    </div>
  )
}

export default Project