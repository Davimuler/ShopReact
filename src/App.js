import { Route, Routes } from "react-router";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';
import ContentNav from "./Navigation/ContentNav/ContentNav";
import Login from "./LoginRegistration/Login/Login";
import Reg from "./LoginRegistration/Registration/Registration";
import MainContent from "./components/MainContent/MainContent";
import Basket from "./pages/Basket/Basket";
import {useState} from "react";

const App = () =>  {
    const [basketActive,setBasketActive]=useState(true)
    return (
        <div className="App">
            <Basket active={basketActive} setActive={setBasketActive}/>
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

