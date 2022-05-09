import NavBarMain from './NavBarMain.js';
import LoadSingleInstruction from './LoadSingleInstruction.js';

function InstructionSinglePage(){

    return(
        <div>
            <NavBarMain />
            <div className='container mt-4 is-fluid'>
                <LoadSingleInstruction/>
            </div>
        </div>
    );
}
export default InstructionSinglePage;