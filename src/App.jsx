import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/HomeComponent/Home.jsx";
import Navbar from "./Components/NavbarComponent/Navbar.jsx";
import Explore from "./Components/ExploreComponent/Explore.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Pass searchTerm and setSearchTerm into Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        {/* Pass searchTerm into Home */}
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
