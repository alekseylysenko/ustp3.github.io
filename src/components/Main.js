import { HashRouter, Route, Routes} from "react-router-dom";

import Admin from './Admin.js';
import Firmwares from './Firmwares.js';
import Instructions from './Instructions.js';
import Home from './Home.js';
import BurgerMenu from './BurgerMenu.js';
import InstructionSinglePage from './InstructionSinglePage.js';
import LoginPage from './LoginPage';

function Main(){
    return(
        <HashRouter  basename="/" >
                <Routes>       
                    <Route path="/ustp3.github.io/" element={<Home />} />           
                    <Route path="/admin/" element={<Admin />} />
                    <Route path="/firmwares/" element={<Firmwares />} />    
                    <Route path="/instructions/" element={<Instructions />} />   
                    <Route path="/instructions/:instructionId/" element={<InstructionSinglePage />} />   
                    <Route path="/burger-menu/" element={<BurgerMenu />} />    
                    <Route path="*" element={<Home />} />   
                    <Route path="/login" element={<LoginPage />} />       
                </Routes>
        </HashRouter>  
       

    );
}

export default Main;