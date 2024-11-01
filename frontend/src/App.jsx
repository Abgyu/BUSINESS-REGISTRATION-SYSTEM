import { Routes, Route, Navigate,BrowserRouter as Router, } from "react-router-dom";

import { Dashboard, Auth } from "@/layouts";
import CityForm from "./pages/cityForm";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/cityform/*" element={<CityForm />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );


}

export default App;
