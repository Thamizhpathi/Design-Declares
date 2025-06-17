import "./App.css";
import BreakDown from "./components/BreakDown";
import DonateComponent from "./components/DonateComponent";
import EmergencyComponent from "./components/EmergencyComponent";
import EmergencyFormComponent from "./components/EmergencyFormComponent";
import Footer from "./components/Footer";
import GlobalSupportersComponents from "./components/GlobalSupportersComponents";
import LandingComponents from "./components/LandingComponents";
import LatestNewsComponent from "./components/LatestNewsComponent";
import LoaderBar from "./components/loaderBar";
import MenuBarComponent from "./components/MenuBarComponent";
import NewsLetterComponent from "./components/NewsLetterComponent";
import SignatoriesComponent from "./components/SignatoriesComponent";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="containers">
          <LoaderBar />
          <LandingComponents />
          <BreakDown />
          <DonateComponent />
          <EmergencyComponent />
          <EmergencyFormComponent />
          <LatestNewsComponent />
          <NewsLetterComponent />
          <SignatoriesComponent />
          <GlobalSupportersComponents />
          <MenuBarComponent/>
        </div>
      </div>
     
        <Footer />
      
    </>
  );
}

export default App;
