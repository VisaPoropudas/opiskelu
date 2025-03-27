import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AlertProvider } from './context/alertContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AlertProvider>
            <App />
        </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const menuItems = [
  { name: "Home", path: "/", image: "" },
  { name: "About", path: "/about", image: "" },
  { name: "Menu", path: "/menu", image: "" },
  { name: "Reservations", path: "/reservation", image: "" },
  { name: "Order Online", path: "/order", image: "" },
  { name: "Login", path: "/login", image: "" }
]

export const reviews = [
  { name: "Maria", rating: 5, comment: "Excellent food and great service", imgUrl: "/images/maria.jpg"},
  { name: "Karla", rating: 4.5, comment: "Awesome experience", imgUrl: "/images/karla.jpg"},
  { name: "Jack", rating: 4, comment: "Tasty food, nice atmosphere", imgUrl: "/images/jack.jpg"},
  { name: "Steve", rating: 5, comment: "The best bruchetta in town!", imgUrl: "/images/steve.jpg"}
]

export const specials = [
  { name: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers olives and our imported Extra Virgine olive oil", imgUrl: "/images/greek-salad-small.jpg"},
  { name: "Grilled Fish", price: "$15.99", description: "Our delicious grilled fish straight from the sea", imgUrl: "/images/fish-small.jpg"},
  { name: "Bruchetta", price: "$7.99", description: "Our Bruchetta is made from grilled bread that has been soaked in olive oil and filled with fresh vegetables and garlic", imgUrl: "/images/bruchetta-small.jpg"}
/*  { name: "Little Lemon's Special", price: "$15.99", description: "Our delicious special", imgUrl: "/images/special-small-rect.jpg"},*/
]

export const menu = [
  { name: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers olives and our imported Extra Virgine olive oil", imgUrl: "/images/greek-salad-small.jpg"},
  { name: "Grilled Fish", price: "$15.99", description: "Our delicious grilled fish straight from the sea", imgUrl: "/images/fish-small.jpg"},
  { name: "Bruchetta", price: "$7.99", description: "Our Bruchetta is made from grilled bread that has been soaked in olive oil and filled with fresh vegetables and garlic", imgUrl: "/images/bruchetta-small.jpg"},
  { name: "Little Lemon's Special", price: "$15.99", description: "Our delicious special", imgUrl: "/images/special-small-rect.jpg"}
]

export function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
