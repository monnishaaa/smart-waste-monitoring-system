import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Households from "./pages/Households";
import HouseholdDetails from "./pages/HouseholdDetails";
import Collection from "./pages/Collection";
import Reports from "./pages/Reports";
import Rewards from "./pages/Rewards";
import Officers from "./pages/Officers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/households" element={<Households />} />
      <Route path="/household/:id" element={<HouseholdDetails />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/officers" element={<Officers />} />
    </Routes>
  );
}

export default App;