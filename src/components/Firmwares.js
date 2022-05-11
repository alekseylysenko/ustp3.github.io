import NavBarMain from './NavBarMain.js';
import LoadListTehnology from './LoadListTehnology.js';
import LoadListCategoryFirmware from './LoadListCategoryFirmware.js';
import LoadListFirmwares from './LoadListFirmwares.js';
import { useState} from 'react';

function Firmwares(){
    const [itemId, setItemId] = useState(1);
    const [categoryId, setCategoryId] = useState();
    const updateId = (id) => {
        setItemId(id);
        setCategoryId(0);
     }
     const updateCategoryId = (catId) => {
        setCategoryId(catId);
     }
    return(
        <div>
            <NavBarMain />
            <div className='container mt-4  is-fluid'>
                <div className='box'>
                    <LoadListTehnology  updateId={updateId}/>
                    <div className="columns">
                        <div className="column is-two-fifths">
                        <LoadListCategoryFirmware itemId={itemId} categoryId={updateCategoryId}/>
                        </div>
                        <div className="column">
                        <LoadListFirmwares categoryId={categoryId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firmwares;