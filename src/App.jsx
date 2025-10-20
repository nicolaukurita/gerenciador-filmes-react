import { MainBody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import './global.css';

function App() {
  return (
    <>
      <Topbar />
      <Topbanner/>
      <MainBody/>
    </>
  );
}

export default App;
