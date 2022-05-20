import NavBarMain from './NavBarMain.js'
import LoadListInstructions from './LoadListInstructions.js';

function Instructions(props){
   
    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container mt-4  is-fluid'>
                <div className='box'>
                    <LoadListInstructions />
                </div>
            </div>
        </div>
    );
}

export default Instructions;