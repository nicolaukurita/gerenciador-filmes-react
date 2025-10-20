import { Footer } from "./components/footer";
import { MainBody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import './global.css';

function App() {
  return (
    <>
      <Topbar />
      <Topbanner />
      <MainBody>
        <Menu />
      </MainBody>
      <Footer />
    </>
  );
}

export default App;
