import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faInstagramSquare, faYoutubeSquare, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo-small.jpg"
export default function Footer() {
    const iconSize = "2x";
    const iconMargin = 5
    const iconColor = "#333333"
    return (
        <footer>
            <div className="footer-grid">

                <div>
                    <img src={logo} alt="Little Lemon logo" width="200"/>
                </div>
                <div style={{textAlign: "left"}}>
                    <h4>Address</h4>
                    <p style={{ lineHeight: 1.5}}>
                        Street Address 1<br/>
                        Chicago 000000<br/>
                        Illinois
                    </p>
                    <p><FontAwesomeIcon icon={faPhone}/> 773-000-0000</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> info@littlelemon.com</p>
                </div>
                <div style={{textAlign: "left", alignSelf: "start"}}>
                    <h4>Links</h4>
                    <p style={{ lineHeight: 1.5}}>
                        Links here
                    </p>
                </div>
                <div style={{justifySelf: "right"}}>
                    <div className="lead-text" style={{ textAlign: "left", marginBottom: 10}}> Follow Us:</div> 
                    <div align="left">
                    <FontAwesomeIcon icon={faFacebook} color={iconColor} size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    <FontAwesomeIcon icon={faInstagramSquare} color={iconColor}  size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    <FontAwesomeIcon icon={faXTwitter} color={iconColor}  size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    <FontAwesomeIcon icon={faYoutubeSquare} color={iconColor}  size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    <FontAwesomeIcon icon={faLinkedin} color={iconColor}  size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    <FontAwesomeIcon icon={faTiktok} color={iconColor}  size={iconSize} style={{marginRight: iconMargin, marginLeft: iconMargin}}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}