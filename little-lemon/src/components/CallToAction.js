import { Link } from "react-router"
import headerImage from "../assets/special-small-rect.jpg"

export default function CallToAction() {
    return (
        <div className="hero primary-green-bg">
            <div className="content">
                <h1 className="primary-yellow display-title">Little Lemon</h1>
                <h2 className="highlight-light sub-title">Chicago</h2>
                <p className="highlight-light">
                Little lemon is a charming neighbourhood bistro that serves  simple food and classic coctails in  a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                </p>
                <Link to="reservation"><button>Reserve table</button></Link>
            </div>
            <div className="header-image">
                <img src={headerImage} className="header-image"/>
            </div>
        </div>
    )
}