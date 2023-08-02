import Navbar from "./Navbar"
import Button from "./Button"
import "../index.css"

const Classic = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pl-14 ">
      <div className=" flex flex-col max-sm:pt-20 md:py-8  md:flex-row justify-evenly">
        <div className="basis-1/2 pr-2  md:pt-40"><h1 className="text-white max-sm:text-4xl md:text-6xl font-normal">Your personal hiring page</h1>
        <p className="text-fuchsia-700 max-sm:text-2xl md:text-3xl py-8 font-normal">Get recommendations from trusted connections to find exceptional people for your open roles</p>
        <div className="flex flex-col pt-10 max-sm:py-8  md:flex-row">
        <p className="basis-1/2 max-sm:text-sm"><Button /></p>
        <p className="basis-1/2 text-xl pt-2 text-fuchsia-700 font-semibold hover:underline">Or sign up</p>
        </div>
        </div>
        <div className="basis-1/2 pt-0 pb-10 max-sm:pr-2"><img src="hero2-image.png" alt="" className="rounded-sm" /></div>
      </div>
      </div>
    </div>
  )
}

export default Classic