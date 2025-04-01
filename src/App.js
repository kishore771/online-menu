import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu"; 
import Starters from "./components/Starters";// Import your Menu component
import Navbar from "./components/Navbar";
import Maincourse from "./components/Maincourse";
import Beverages from "./components/Beverages";
import Snacks from "./components/Snacks";
import Deserts from "./components/Deserts";
import Dips from "./components/Dips";
import OffersandCoupons from "./components/OffersandCoupons";
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
          <Route path="/menu/desserts" element={<Deserts />} />
          <Route path="/menu/snacks" element={<Snacks />} />
          <Route path="/menu/beverages" element={<Beverages />} />
          <Route path="/menu/dips" element={<Dips />} />
          <Route path="/offersandcoupons" element={<OffersandCoupons/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
