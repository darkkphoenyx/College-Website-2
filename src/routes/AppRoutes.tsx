import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import GuestLayout from "../layouts/GuestLayout";
import About from "../pages/About";
import OurTeam from "../pages/OurTeam";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Forgotpassword from "../pages/Forgotpassword";
import Resetpassword from "../pages/Resetpassword";
import OtpCode from "../pages/OtpCode";

export default function AppRoutes() {
  return (
    <GuestLayout>
      <Routes>
        <Route path="/" index={true} element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ourTeam" element={<OurTeam></OurTeam>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/forgotPassword"
          element={<Forgotpassword></Forgotpassword>}
        ></Route>
        <Route path="/otpcode" element={<OtpCode></OtpCode>}></Route>
        <Route
          path="/resetPassword"
          element={<Resetpassword></Resetpassword>}
        ></Route>
      </Routes>
    </GuestLayout>
  );
}
