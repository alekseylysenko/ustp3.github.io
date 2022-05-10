import NavBarMain from './NavBarMain.js'
import LoadListTehnology from './LoadListTehnology.js'
import LoadListCategoryFirmware from './LoadListCategoryFirmware.js'
import { useState} from 'react';

function Firmwares(){
    const [itemId, setItemId] = useState(1);
    const updateId = (id) => {
        setItemId(id);
        console.log(itemId);
     }
    return(
        <div>
            <NavBarMain />
            <div className='container mt-4  is-fluid'>
                <div className='box'>
                    <LoadListTehnology  updateId={updateId}/>
                    <LoadListCategoryFirmware itemId={itemId}/>
                </div>
            </div>
        </div>
    )
}

export default Firmwares;