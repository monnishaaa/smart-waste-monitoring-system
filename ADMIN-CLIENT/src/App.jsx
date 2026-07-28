import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Households from "./pages/Households";
import Officers from "./pages/Officers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/households" element={<Households />} />
      <Route path="/officers" element={<Officers />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;