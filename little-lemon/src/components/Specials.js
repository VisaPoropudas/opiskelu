import { Link } from "react-router-dom"
import { specials } from "../index"
import SpecialsCard from "./SpecialsCard"


export default function Specials() {
    return (
        <div className="specials">
            <div className="row">
                <div style={{ flex: 1 }}>
                <h2 className="section-title">Specials</h2>
                </div>
                <div>
                    <button><Link to="menu">Menu</Link></button>
                </div>
        </div>
        <div className="row offers-container">
            {
            specials.map((item, index) => {
                return (
                    <SpecialsCard key={index} name={item.name} price={item.price} description={item.description} imageUrl={item.imgUrl}/>
                )
            })
            }
        </div>
        </div>
    )
}