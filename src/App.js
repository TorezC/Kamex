import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './pages/home/Home';
import About from './pages/about/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
