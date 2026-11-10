import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Aptitude from "./pages/Aptitude.jsx";
import Topics from "./pages/Topics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[960px] mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
