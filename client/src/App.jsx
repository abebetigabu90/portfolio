import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AdminProjects from "./pages/admin/AdminProjects"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/adminDashboard"
import CreateSkill from "./pages/admin/CreateSkill"
import ManageSkills from "./pages/admin/ManageSkills" 
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
    </Routes>
    
  );
}
export default App