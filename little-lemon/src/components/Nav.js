import { Link } from "react-router-dom"
import { menuItems } from '../index';


export default function Nav() {

    return (

        <nav id="nav">
            {
            menuItems.map((item, index) => {
                return (
                    <li key={index}><Link to={item.path} key={index}>{item.name}</Link></li>
                )
            })
            }
        </nav>
    )
}