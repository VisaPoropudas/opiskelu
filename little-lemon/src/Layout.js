
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";


export default function Layout(props) {
    const { children } = props;
    return (

        <div className="App">
            <Header>
                <Nav/>
            </Header>
            <Main>
                { children }
            </Main>
            <Alert/>
            <Footer/>
        </div>

    )
}