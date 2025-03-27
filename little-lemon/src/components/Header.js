import { Link } from "react-router";
import logo from "../assets/logo-small.jpg"
export default function Header(props) {
    const { children } = props;
    return (
        <header>
            <div className="nav-bar">
                <div className="header-logo">
                <Link to="/"><img src={logo} width="200"/></Link>
                </div>
                {children}
                </div>
        </header>
    )
}