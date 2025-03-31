import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu"; 
import Starters from "./components/Starters";// Import your Menu component
import Navbar from "./components/Navbar";
import Maincourse from "./components/Maincourse";

function App() {
  return (
    <Router>  {/* ✅ Wrap everything inside BrowserRouter */}
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/starters" element={<Starters />} />
          <Route path="/menu/main-course" element={<Maincourse />} />
          <Route path="/menu/desserts" element={<Maincourse />} />
          <Route path="/menu/snacks" element={<Maincourse />} />
          <Route path="/menu/beverages" element={<Maincourse />} />
          <Route path="/menu/dips" element={<Maincourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
