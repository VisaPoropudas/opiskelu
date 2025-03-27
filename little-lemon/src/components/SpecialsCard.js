import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import logo from '../assets/logo-small.jpg'

export default function SpecialsCard(props) {
    const { name, price, description, imageUrl } = props;
    const [ showModal, setShowModal ] = useState(false)
    function handleCloseModal() {
        setShowModal(false);
    }
    return (
        <>
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
            <Link to="#" onClick={() => {setShowModal(true)}}>Learn more</Link>
            </div>
        </div>
        { showModal && (
            <Modal handleCloseModal={handleCloseModal}>
                 <img src={logo} alt="Little Lemon" width={200}/>
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
            </div>
            </div>
            <button onClick={handleCloseModal}>Close</button>
            
        
            </Modal>
        )}
        </>
    )
}