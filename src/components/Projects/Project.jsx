import Image from "next/image"

function Project() {
  return (
    <div className="bg-black flex text-white p-2">
        <Image src={"/void-hack-genesis.png"} height={500} width={500} className="w-[40%]" />
        <div className="p-2">
            <p className="text-xl font-oswald">
                First Responders Alliance
            </p>
            <p className="font-akshar font-extralight">
                A project made for hack genesis, an online hackathon conducted on Devfolio.
            </p>
        </div>
    </div>
  )
}

export default Project