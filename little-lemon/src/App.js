import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Specials from './components/Specials';
import Homepage from './components/Homepage';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Routes>
    {/* redirects the user to a specific location, if no parameters are given 
         <Navigate to="/news"/>*/}
         <Route path="/" element={<Homepage/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="booking-confirmed" element={<ConfirmedBooking/>}/>
         <Route path="specials" element={<Specials/>}/>

         <Route path="*" element={<NotFoundPage/>}/>
     </Routes>
  );
}

export default App;