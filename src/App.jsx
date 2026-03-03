import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import Price from "./Price";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
