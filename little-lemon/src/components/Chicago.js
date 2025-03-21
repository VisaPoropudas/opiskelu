import adrian from "../assets/adrian.png"
import mario from "../assets/mario.png"

export default function Chicago() {
    return (
        <div className="hero primary-green-bg">
            <div className="content">
                <h1 className="primary-yellow display-title">Little Lemon</h1>
                <h2 className="highlight-light sub-title">Chicago</h2>
                <p className="highlight-light">
                    Lorem ipsum...
                </p>
            </div>
            <div className="header-image" style={{height: '100%'}}>
                <img src={adrian} width={200} style={{position: 'absolute', marginTop: 50}} alt="Adrian"/>
                <img src={mario} width={200} style={{position: 'relative', marginLeft: 150, marginBottom: 70}} alt="Mario"/>
            </div>
        </div>
    )
}