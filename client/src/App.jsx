import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AdminProjects from "./pages/admin/AdminProjects"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/adminDashboard"
function App(){

return (
    <Routes>
      {/* Public portfolio */}
      <Route path="/" element={<Home/>} />

      {/* Admin */}
      <Route path="/admin/projects" element={<AdminProjects />} />

       <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />}/> 
    </Routes>
    
  );
}
export default App