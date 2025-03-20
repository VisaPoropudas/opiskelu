import { Link } from "react-router-dom";

export default function SpecialsCard(props) {
    const { name, price, description, imageUrl } = props;
    return (
        <div className="special-offer">
            <div className="specials-image" 
                style={{ backgroundImage : 'url('+imageUrl+')', 
                height: 200, 
                width: '100%', 
                backgroundPositionX: 'center', 
                backgroundPositionY: 'center',
                backgroundRepeat: 'no-repeat',
                }}></div>
            <div className="special-offer-content">
            <h3 className="card-title">{name}</h3><span>{price}</span>
            <p>{description}</p>
            <Link to="#" onClick={() => {}}>Learn more</Link>
            </div>
        </div>
    )
}