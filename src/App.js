import "./App.css";
import Demo from "./components/Demo/Demo";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/Header/HeroSection";
import OurSpecial from "./components/OurSpecial/OurSpecial";

function App() {
  return (
    <div>
      <HeaderBar />
      <HeroSection />
      <OurSpecial />
      <Demo />
    </div>
  );
}

export default App;
