import NavBarMain from './NavBarMain.js';
import LoadSingleInstruction from './LoadSingleInstruction.js';

function InstructionSinglePage(props){

    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container mt-4 is-fluid'>
                <LoadSingleInstruction/>
            </div>
        </div>
    );
}
export default InstructionSinglePage;