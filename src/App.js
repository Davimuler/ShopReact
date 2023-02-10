import { Route, Routes } from "react-router";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';
import ContentNav from "./Navigation/ContentNav/ContentNav";
import Login from "./LoginRegistration/Login/Login";
import Reg from "./LoginRegistration/Registration/Registration";
import MainContent from "./components/MainContent/MainContent";
import Basket from "./pages/Basket/Basket";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {MainContentContainer} from "./components/MainContent/MainContentContainer";


const App = () =>  {

    return (
        <div className="App">
            <div className="header">
              <HeaderContainer/>
            </div>
            <div className="content">
                <MainContentContainer/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>

        </div>
    );
}


export default App;

