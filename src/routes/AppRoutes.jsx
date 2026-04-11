import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Navbar from "../components/Navbar";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  );
}