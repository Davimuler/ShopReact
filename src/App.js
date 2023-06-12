import Footer from './components/Footer/Footer'
import './App.css';
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

