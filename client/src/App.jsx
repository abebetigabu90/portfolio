import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AdminProjects from "./pages/admin/AdminProjects"
function App(){

return (
    <Routes>
      {/* Public portfolio */}
      <Route path="/" element={<Home/>} />

      {/* Admin */}
      <Route path="/admin/projects" element={<AdminProjects />} />
    </Routes>
  );
}
export default App