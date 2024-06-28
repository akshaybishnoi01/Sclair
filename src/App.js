import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from './components/Herosection';
import Aboutsclair from './components/Aboutsclair';
import SmartContract from './components/SmartContract';
import Tokenomics from './components/Tokenomics';
import Audited from './components/Audited';
import Roadmap from './components/Roadmap';
import Questions from './components/Questions';
import Social from './components/Social';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: "ease-in-out",
    });

  }, [])
  return (
    <div className=' overflow-hidden'>
    <Herosection/>
    <Aboutsclair/>
    <SmartContract/>
    <Tokenomics/>
    <Audited/>
    <Roadmap/>
    <Questions/>
   <Social/>
   <FooterSection/>
   </div>
  );
}

export default App;
