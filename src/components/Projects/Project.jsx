import Image from "next/image"
import Link from "next/link"
import StackIcon from "tech-stack-icons"

function Project({item}) {
  return (
    <div className="bg-black flex flex-col md:flex-row text-white rounded-md md:h-60">
      <Image src={item.imgsrc} height={500} width={300} className="w-[100%] md:max-w-96 md:min-w-96 mr-2 rounded-md" />
      <div className="p-4 pr-6 flex flex-col w-full">
        <p className="text-xl font-oswald mb-1 md:mb-2">
          {item.title}
        </p>
        <p className="font-akshar font-extralight flex-grow">
          {item.desc}
        </p>
        <div className="mt-4">
          <Link href={item.link} target="_blank" className="bg-white text-black text-xs p-0 flex w-fit pr-1 rounded-full gap-1">
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