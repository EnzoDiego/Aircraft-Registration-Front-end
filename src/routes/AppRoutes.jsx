import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import EditAircraft from "../components/EditAircraft";


function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/edit/:id" element={<EditAircraft />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}