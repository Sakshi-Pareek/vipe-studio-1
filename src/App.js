import './App.css';
import { useEffect, useState } from 'react';
import Feature from './components/Feature';
import Integer from './components/Integer';
import Services from './components/Services';
import HeaderSection from './components/HeaderSection';
import LongTurm from './components/LongTurm';
import Agile from './components/Agile';
import TeamFullStar from './components/TeamFullStar';
import Success from './components/Success';
import Footer from './components/Footer';
import HaveYou from './components/HaveYou';
import PreLoader from './components/PreLoader';
import BackToTop from "./assets/images/webp/backtotop.webp"
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // ---------------------aos-------------------
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  });
  // -----------------preloader---------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSection />
            <Feature />
            <Integer />
            <Services />
            <LongTurm />
            <Agile />
            <TeamFullStar />
            <Success />
            <HaveYou />
            <Footer />
            <div>
              <img onClick={() => top()} src={BackToTop} alt="Arrow" className={`${backToTop ? "fixed right-[1%] bottom-[2%] z-30 !cursor-pointer !md:max-w-[64px] !max-w-[45px] " : "d-none"}`} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
