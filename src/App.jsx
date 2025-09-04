
import Home from "./Components/HomeComponent/Home.jsx"
import Navbar from "./Components/NavbarComponent/Navbar.jsx"
import Explore from "./Components/ExploreComponent/Explore.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        
      </Routes>
    </Router> 

  
    </>
  )
}

export default App
