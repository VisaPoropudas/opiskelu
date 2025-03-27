import { Link } from "react-router"
import { specials } from "../index"
import SpecialsCard from "./SpecialsCard"


export default function Specials() {
    return (
        <div className="specials">
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div className="row" style={{display:"flex", flexDirection: "row", alignItems: "flex-start", width: "100%"}}>
                    <div  style={{alignContent: "center", width: "50%", flex: 1, textAlign: "left", paddingLeft : 50 }}>
                    <h2 className="section-title">Specials</h2>
                    </div>
                    <div style={{ width: "50%", flex : 1, textAlign: "right", paddingRight : 50}}>
                        <button style={{margin: 0}}><Link to="menu">Menu</Link></button>
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