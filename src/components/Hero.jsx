import { Link, Outlet } from "react-router-dom"
import Button from "./Button"
import "../index.css"

const Hero = () => {
  return (
      <div className=" flex flex-col max-sm:pt-20 md:py-10  md:flex-row justify-evenly">
        <div className="basis-1/2 pr-2"><h1 className="text-white max-sm:text-4xl md:text-6xl font-normal">Recruting, Evolved</h1>
        <p className="text-white max-sm:text-2xl md:text-3xl pt-8 font-normal">Combine the power of collaborative hiring with AI automation to find, screen, and hire the best candidates. Talentdrop works for...</p>
        <div className="pt-10 flex flex-col">
        <Link to="/small-business-owners" className="group relative  text-fuchsia-700 basis-1/3 text-xl  pb-6  md:text-2xl md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8 ">Small Business Owners <i className="fa-solid fa-arrow-right invisible group-hover:visible "></i></Link>
        <Link to="/properties" className="group relative text-fuchsia-700 basis-1/3 pb-6 text-xl  md:text-2xl md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8">Properties <i className="fa-solid fa-arrow-right invisible group-hover:visible "></i></Link>
        <Link to="/classic" className="group relative text-fuchsia-700 basis-1/3 text-xl  md:text-2xl pb-10 md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8">Individual Hiring Managers <i className="fa-solid fa-arrow-right invisible group-hover:visible "></i></Link>
        <Outlet />
        </div>
        <div className="flex flex-col max-sm:py-8  md:flex-row">
        <p className="basis-1/2 max-sm:text-sm"><Button /></p>
        <p className="basis-1/2 text-xl pt-2 text-fuchsia-700 font-semibold hover:underline">Or sign up</p>
        </div>
        </div>
        <div className="basis-1/2 py-8 max-sm:pr-2"><img src="hero-image.png" alt="" className="rounded-sm" /></div>
      </div>
  )
}

export default Hero
