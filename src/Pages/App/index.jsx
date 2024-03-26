import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import IncidentAutomobile from "../IncidentAutomobile";
import IncidentMobileEquipment from "../IncidentMobileEquipment";
import MobileEquipment from "../MobileEquipment";
import StaffIncident from "../StaffIncident";
import DamageThird from "../DamageThird";
import Navbar from "../../Components/NavBar";
import Arrivals from "../Arrivals";
import Exits from "../Exits";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/incident-automobile" element={<IncidentAutomobile />} />
          <Route
            path="/incident-mobile-equipment"
            element={<IncidentMobileEquipment />}
          />
          <Route path="/mobile-equipment" element={<MobileEquipment />} />
          <Route path="/staff-incident" element={<StaffIncident />} />
          <Route path="/damage-third" element={<DamageThird />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/exits" element={<Exits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
