import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction'
import SecondSubj from './components/SecondSubj'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import FirstSubject from './components/FirstSubj'
import BangunPagi from './components/BangunPagi'
import BerSekolah from './components/BerSekolah'
AOS.init();
AOS.refresh();

function App() {
  return (
    <div>

      <div className="myBG">
        <NavBar />
        <Introduction />
      </div>
      <div className="bgFirstSubj">
        <FirstSubject />
      </div>
      <div className="bgSubj">
        <SecondSubj />
      </div>
      <div className="bgBangun">
        <BangunPagi />
      </div>
      <div className="bgSekolah">
        <BerSekolah />
      </div>
    </div>
  );
}

export default App;
