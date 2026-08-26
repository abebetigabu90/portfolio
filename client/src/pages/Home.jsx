import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import AdminProjects from "./admin/AdminProjects";
import Skills from "../components/Skills/skills";
import Contact from "../components/Contact/Contact"
// import CreateProject from "../components/Projects/createProject"

function Home(){
    // return (
    //     <>
    //     <Navbar/>
    //     <Hero/>
    //     <About/>
    //     <Projects/>
    //     {/* <AdminProjects/> */}
    //     {/* <CreateProject/> */}
    //     </>
    // )

return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero/>
        <Skills/>
        <About />
        <Projects />
        <Contact/>
      </main>
    </div>
  );


}
export default Home
