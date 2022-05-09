import { HashRouter, Route} from "react-router-dom";

import Admin from './Admin.js';
import Firmwares from './Firmwares.js';
import Instructions from './Instructions.js';
import Home from './Home.js';
import BurgerMenu from './BurgerMenu.js';
import InstructionSinglePage from './InstructionSinglePage.js';

function Main(){
    return(
        <HashRouter>
                       
                    <Route path="/" element={<Home />} />           
                    <Route path="/ustp3.github.io/admin" element={<Admin />} />
                    <Route path="/ustp3.github.io/firmwares" element={<Firmwares />} />    
                    <Route path="/ustp3.github.io/instructions" element={<Instructions />} />   
                    <Route path="/ustp3.github.io/instructions/:instructionId" element={<InstructionSinglePage />} />   
                    <Route path="/ustp3.github.io/burger-menu" element={<BurgerMenu />} />  
                
              
        </HashRouter>  
       

    );
}

export default Main;