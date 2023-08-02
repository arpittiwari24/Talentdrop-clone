import Hero from "./Hero"
import Navbar from "./Navbar"

const HomePage = () => {
  return (
    <div >
    <div>
      <Navbar />
    </div>
    <div className="pl-6">
      <Hero />
    </div>
  </div>
  )
}

export default HomePage