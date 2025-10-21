import { Footer } from "./components/footer";
import { MainBody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import './global.css';
import { Home } from "./pages/home";
import { Films } from "./pages/films";
import { Routes, Route } from "react-router-dom";
import { Directors } from "./pages/directors";
import { Actors } from "./pages/actors";

function App() {
  return (
    <>
      <Topbar />
      <Topbanner />
      <MainBody>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/actors" element={<Actors />} />
        </Routes> 
      </MainBody>
      <Footer />
    </>
  );
}

export default App;
