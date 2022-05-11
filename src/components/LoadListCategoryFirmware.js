import { useState, useEffect } from 'react';
import axios from 'axios';

function LoadListCategoryFirmware(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {       

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
                 <p>Производитель </p>
                 <ul className="mt-2"> 
                    {                      
                        items.map( category => {
                            if(category.technology === props.itemId){
                            return(
                                    <li key={category.id}><a onClick={()=> props.categoryId(category.id)}>{category.title}</a></li>
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