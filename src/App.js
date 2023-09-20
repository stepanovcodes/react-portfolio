import "./css/bootstrap.min.css";
import "./css/App.css";
import "./css/responsive.css";
import Lsb from "./components/Lsb";
import Rsidemenu from './components/Rsidemenu';
import Scrollnav from './components/Scrollnav';
import MainWrapper from "./components/MainWrapper";

function App() {
  return (
      <div className="App">
        <Lsb />  {/*Lsb for mobile device only*/}
        <Rsidemenu/>
        <Scrollnav/>
        <MainWrapper />
      </div>
  );
}

export default App;
