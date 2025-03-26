import './App.css';
import { Routes, Route } from "react-router";
import Specials from './components/Specials';
import Homepage from './components/Homepage';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';
import Menu from './components/Menu';
//import { useCallback, useState } from "react";
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {


/*  function handleHideHeader() {
    document.getElementById('nav').style.transform = 'translateY(-200px)';
    document.getElementById('nav').style.transitionDuration = '1.5s';
  }
  function handleShowHeader() {
    document.getElementById('nav').style.transform = 'translateY(0)';
    document.getElementById('nav').style.transitionDuration = '1.5s';
  }
*/
  // Enableto show/hide header with window scroll:
/*
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
*/
 // Enableto show/hide header with mouse movement:
/*
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
*/
// Enable to show/hide header with windowS scroll
/*
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.addEventListener('scroll', handleScroll);
    }, [handleScroll]);


 // Enable to show/hide header with mouse movement:

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [onMouseMove]);
*/  



  return (
    <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="reservation" element={<BookingPage/>}/>
         <Route path="menu" element={<Menu/>}/>
         <Route path="order" element={<OrderOnline/>}/>
         <Route path="booking-confirmed" element={<ConfirmedBooking/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="specials" element={<Specials/>}/>
         <Route path="*" element={<NotFoundPage/>}/>
     </Routes>
  );
}

export default App;