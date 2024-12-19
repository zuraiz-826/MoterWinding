import AboutUs from "./components/AboutUs/AboutUs";
import CountSection from "./components/CountSection/CountSection";
import EquipmentRepairing from "./components/EquipmentRepairing/EquipmentRepairing";
import Herosection from "./components/HeroSection/Herosection";
import Location from "./components/Location/Location";
import Services from "./components/Services/Services";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topBar/Topbar";
import Footer from "./components/Footer/Footer";
import Industries from "./components/Industries/Industries";
import ChooseUs from "./components/ChooseUs/ChooseUs";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Herosection />
      <AboutUs />
      <EquipmentRepairing />
      <CountSection />
      <Services />
      <Industries />
      <ChooseUs />
      <Location />
      <Footer />
    </>
  );
};

export default App;
