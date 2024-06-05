import About from "./components/About/About"
import HomePage from "./components/Home/HomePage"
import NavBar from "./components/Nav/NavBar"
import Service from "./components/Servicepage/Service"
import Contact from "./components/Contact/Contact"
import Progress from "./components/Skills/Progress"

function App() {
  

  return (
    <>
    <div className="sections">
    <NavBar/>
    <HomePage/>
    <About/>
    <Service/>
    <Progress/>
    {/* <MySkill/> */}
    <Contact/>
    </div>
    </>
  )
}

export default App
