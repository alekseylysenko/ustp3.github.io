import { useState, useEffect} from 'react';
import axios from 'axios';

function LoadListFirmwares(props){
    const [items, setItems] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        axios.get("https://firmfare.herokuapp.com/api/firmware/?format=json")
        .then(response => response.data)
        .then((result) => {
            setItems(result);
            setIsLoaded(true);
        }, (error) =>{
            setIsLoaded(true);
            setError(error);
        }
        );
    });
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div></div>;
    } else { 
    return(
        <div className="container is-fluid mt-4">
            <p> Файлы :</p>
            <ul className="mt-2"> 
                    {                      
                        items.map(firmware => {
                            if(firmware.category === props.categoryId){
                            return(
                                    <><li key={firmware.id} className="hero is-small"><a href={firmware.url}>{firmware.title}</a></li><hr/></>
                                );                          
                            }                  
                        }                       
                        )
                    }
                 </ul> 
        </div>
        );
    }
}
export default LoadListFirmwares;