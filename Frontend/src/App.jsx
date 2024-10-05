import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLayout from "./components/Layout/Admin-Layout";
import AllUsers from "./pages/Admin-Users";

import AdminUpdate from "./pages/Admin-Updates";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AllUsers />} />
            <Route path="user/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
