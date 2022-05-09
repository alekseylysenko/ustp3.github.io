import NavBarMain from './NavBarMain.js'
import LoadListInstructions from './LoadListInstructions.js';

function Instructions(){
   
    return(
        <div>
            <NavBarMain />
            <div className='container mt-4  is-fluid'>
                <div className='box'>
                    <LoadListInstructions />
                </div>
            </div>
        </div>
    );
}

export default Instructions;