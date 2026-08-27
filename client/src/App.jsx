import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AdminProjects from "./pages/admin/AdminProjects"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import CreateSkill from "./pages/admin/CreateSkill"
import ManageSkills from "./pages/admin/ManageSkills" 
import ManageContact from "./pages/admin/ManageContact"
function App(){

return (
    <Routes>
      {/* Public portfolio */}
      <Route path="/" element={<Home/>} />

      {/* Admin */}
      <Route path="/admin/projects" element={<AdminProjects />} />

       <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />}/> 
      <Route path="/admin/skills/new" element={<CreateSkill />}/> 
      <Route path="/admin/skills/manage" element={<ManageSkills />}/>
      <Route path="/admin/contact/manage" element={<ManageContact />}/>
    </Routes>
    
  );
}
export default App