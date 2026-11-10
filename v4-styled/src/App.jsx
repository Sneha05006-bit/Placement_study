import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Aptitude from "./pages/Aptitude.jsx";
import Topics from "./pages/Topics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import styled from "styled-components";
const S = {
  container: styled.main`
    max-width:960px;
    margin:0 auto;
    padding:24px 16px;
  `,
};
export default function App() {
  return (
    <>
      <Navbar />
      <S.container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </S.container>
      <Footer />
    </>
  );
}
