import { Link } from "react-router-dom"
import { specials } from "../index"
import SpecialsCard from "./SpecialsCard"


export default function Specials() {
    return (
        <div className="specials">
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div className="row" style={{display:"flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
                    <div  style={{justifySelf: "flex-start", width: "50%", flex: 1, textAlign: "left", paddingLeft : 50 }}>
                    <h2 className="section-title">Specials</h2>
                    </div>
                    <div style={{ width: "50%", flex : 1, textAlign: "right", paddingRight : 50}}>
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
        </div>
    )
}