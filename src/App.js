import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './pages/home/Home';
import './App.css'
import About from './pages/about/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agriculture from "./pages/products/agriculture/Agriculture";
import Construction from "./pages/products/construction/Construction";
import Fisheries from "./pages/products/fisheries/Fisheries";
import Gold from "./pages/products/gold/Gold";
import Petroleum from "./pages/products/petroleum/Petroleum";
import Water from "./pages/products/water/Water";
import Contact from "./pages/contact/Contact";
import Logistics from "./pages/products/logistics/Logistics";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/fisheries" element={<Fisheries />} />
        <Route path="/mining" element={<Gold />} />
        <Route path="/oilandgas" element={<Petroleum />} />
        <Route path="/water" element={<Water />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logistics" element={<Logistics />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
