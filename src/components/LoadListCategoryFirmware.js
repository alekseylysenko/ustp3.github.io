import { useState, useEffect } from 'react';
import axios from 'axios';

function LoadListCategoryFirmware(props){
    const [itemId, setItemId] = useState(1);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {       
        setItemId(props.itemId);
        axios.get(`https://firmfare.herokuapp.com/api/category/?format=json`)
        .then(response => response.data)
        .then((result) =>{
            setItems(result);
            setIsLoaded(true);
        },
        (error) =>{
            setIsLoaded(true);
            setError(error);
        }
        )
     },[props.itemId]);
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div></div>;
    } else { 
        return(
            <div className='container is-fluid mt-4'>
                 <ul> 
                    {                      
                        items.map( tehnology => {
                            if(tehnology.technology === props.itemId){
                            return(
                                    <li class=""><a>{tehnology.title}</a></li>
                                )                           
                            }                  
                        }                       
                        )
                    }
                 </ul> 
            </div>
        );
    }

}
export default LoadListCategoryFirmware;