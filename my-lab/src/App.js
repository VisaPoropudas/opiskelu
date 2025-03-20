import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useCallback, useEffect, useState } from "react";


function App() {
 
  function handleHideHeader() {
    document.getElementById('header').style.transform = 'translateY(-200px)';
    document.getElementById('header').style.transitionDuration = '1.5s';
  }
  function handleShowHeader() {
    document.getElementById('header').style.transform = 'translateY(0)';
    document.getElementById('header').style.transitionDuration = '1.5s';
  }

  // Enableto show/hide header with window scroll:

  function useWindowScroll() {
    const [windowPosition, setWindowPosition] = useState(0);

    const handleScroll = useCallback((e) => {
      setWindowPosition((prevPosition) => {
        if(window.scrollY < prevPosition) {
          handleHideHeader();
          
        }
        else if (window.scrollY > prevPosition) {
          handleShowHeader();
        }
        return window.scrollY;
      });
    }, []);
    return {windowPosition, handleScroll}
}
const { windowPosition, handleScroll } = useWindowScroll();

 // Enableto show/hide header with mouse movement:

  function useMouseMove() {
    const [mouseY, setMouseY] = useState(0);

    const onMouseMove = useCallback((e) => {
      setMouseY((prevMouseY) => {
          if(e.clientY > prevMouseY) {
            // mouse moving down 
            handleShowHeader();
          }
          else if (e.clientY < prevMouseY && (prevMouseY - e.clientY) >10) {
            // mouse moving up 
            handleHideHeader();
          }
          return e.clientY; // Update mouseY to the current clientY
      });
  }, []);

    return { mouseY, onMouseMove };
  }
  const { mouseY, onMouseMove } = useMouseMove();

// Enable to show/hide header with windowS scroll

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.addEventListener('scroll', handleScroll);
    }, [handleScroll]);


 // Enable to show/hide header with mouse movement:

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [onMouseMove]);

  
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
