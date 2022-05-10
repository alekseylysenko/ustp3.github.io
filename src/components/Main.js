import { BrowserRouter, Route, Routes} from "react-router-dom";

import Admin from './Admin.js';
import Firmwares from './Firmwares.js';
import Instructions from './Instructions.js';
import Home from './Home.js';
import BurgerMenu from './BurgerMenu.js';
import InstructionSinglePage from './InstructionSinglePage.js';

function Main(){
    return(
        <BrowserRouter  basename="/ustp3.github.io" >
                <Routes>       
                    <Route path="/ustp3.github.io" element={<Home />} />           
                    <Route path="/ustp3.github.io/admin" element={<Admin />} />
                    <Route path="/ustp3.github.io/firmwares" element={<Firmwares />} />    
                    <Route path="/ustp3.github.io/instructions" element={<Instructions />} />   
                    <Route path="/ustp3.github.io/instructions/:instructionId" element={<InstructionSinglePage />} />   
                    <Route path="/ustp3.github.io/burger-menu" element={<BurgerMenu />} />                     
                </Routes>
        </BrowserRouter>  
       

    );
}

export default Main;