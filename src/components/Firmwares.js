import NavBarMain from './NavBarMain.js'
import LoadListTehnology from './LoadListTehnology.js'
function Firmwares(){
    return(
        <div>
            <NavBarMain />
            <div className='container mt-4  is-fluid'>
                <div className='box'>
                    <LoadListTehnology />
                </div>
            </div>
        </div>
    );
}

export default Firmwares;