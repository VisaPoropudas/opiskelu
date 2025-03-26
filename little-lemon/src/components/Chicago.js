import adrian from "../assets/adrian.png"
import mario from "../assets/mario.png"

export default function Chicago() {
    return (
        <div className="hero primary-green-bg">
            <div className="content">
                <h1 className="primary-yellow display-title">Little Lemon</h1>
                <h2 className="highlight-light sub-title">Chicago</h2>
                <p className="highlight-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div className="header-image" style={{height: '100%'}}>
                <img src={adrian} width={200} style={{position: 'absolute', marginTop: 50}} alt="Adrian"/>
                <img src={mario} width={200} style={{position: 'relative', marginLeft: 150, marginBottom: 70}} alt="Mario"/>
            </div>
        </div>
    )
}