import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function ReviewCard(props) {
    const { name, rating, comment, imageUrl } = props;
    return (
        <div className="customer-card">
            <h4 className="card-title">{name}</h4>
            <img src={imageUrl} alt={name} width="100"/>
            <p className="comment">"{comment}"</p>
            <div>
                <p>{rating}<span><FontAwesomeIcon icon={faStar} style={{color: '#F4CE14'}}/></span></p>
            </div>
        </div>
    )
}