import { Route, Routes } from "react-router";
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent'
import './App.css';
import ContentNav from "./Navigation/ContentNav/ContentNav";
import Login from "./LoginRegistration/Login/Login";
import Reg from "./LoginRegistration/Registration/Registration";

const App = () =>  {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <div className="content">
                <MainContent/>
            </div>
            {/*<div className="content">
                <MainContent/>
            </div>*/}
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    );
}


export default App;

