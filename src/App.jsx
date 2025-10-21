import { Footer } from "./components/footer";
import { MainBody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import './global.css';
import { Home } from "./pages/home";
import { Films } from "./pages/films";

function App() {
  return (
    <>
      <Topbar />
      <Topbanner />
      <MainBody>
        <Menu />
        <Films />
      </MainBody>
      <Footer />
    </>
  );
}

export default App;
