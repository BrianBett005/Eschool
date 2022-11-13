import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LandingPage from "./pages/LandingPage";

import EditSchool from "./pages/EditSchool";
import Teachers from "./pages/Teachers";

import AddSchoolDetails from "./pages/AddSchoolDetails";
import CreateEvent from "./pages/CreateEvent";
import Events from "./pages/Events";

import OverView from "./pages/OverView";
import Management from "./pages/Management";
import Logout from "./pages/Logout";
import SingleEvent from "./pages/SingleEvent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<AddSchoolDetails />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/landing_page" element={<LandingPage />} />
        <Route path="/" element={<OverView />} />
        <Route path="/edit_school" element={<EditSchool />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Teachers />} />
        <Route path="/management" element={<Management />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
