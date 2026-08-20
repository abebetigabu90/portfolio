import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import AdminProjects from "./admin/AdminProjects";
// import CreateProject from "../components/Projects/createProject"

function Home(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <AdminProjects/>
        {/* <CreateProject/> */}
        </>
    )
}
export default Home