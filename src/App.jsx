import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./Home"; // optional, if you need it later
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* Default page is login */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard route */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Home route (if you still need it) */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
