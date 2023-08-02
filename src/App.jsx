import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Business from "./components/Business"
import Properties from "./components/Properties"
import Classic from "./components/Classic"

const App = () => {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/small-business-owners" element={<Business/>}></Route>
    <Route path="/properties" element={<Properties />}></Route>
    <Route path="/classic" element={<Classic />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
