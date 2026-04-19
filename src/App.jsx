import { useEffect, useRef, useState, createContext } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hero from './components/Hero';
import ClickSpark from './components/ClickAround';
import AboutMe from './components/AboutMe';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme-provider';
import Contact from './components/Contact';
import Services from './components/Services';
import Works from './components/Works';
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = createContext(null);

function App() {
  const lenisRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (loading) {
      html.style.overflow = 'hidden';
      html.style.height = '100%';
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = '0';
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.height = '100%';
      lenisRef.current?.stop?.();
    } else {
      html.style.overflow = '';
      html.style.height = '';
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.height = '';
      lenisRef.current?.start?.();
    }
    return () => {
      html.style.overflow = '';
      html.style.height = '';
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.height = '';
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {/* your entire website */}
      <CustomCursor />
      <LenisContext.Provider value={lenisRef}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <Navbar />
            <Hero />
            <AboutMe />
            <Services />
            <Works />
            <Contact />
          </ClickSpark>
        </ThemeProvider>
      </LenisContext.Provider>
    </>
  );
}

export default App;

