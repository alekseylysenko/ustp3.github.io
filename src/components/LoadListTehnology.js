
import { useState , useEffect} from 'react';
import axios from 'axios';
function LoadListTehnology(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {        
        axios.get(`https://firmfare.herokuapp.com/api/technology/?format=json`)
        .then(response => response.data)
        .then((result) => {
            setItems(result);
            setIsLoaded(true);            
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
    }, [])
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <div >
                {items.map( (tehnology) => (<div className=''>{tehnology.title}<hr/></div>) )}              
            </div>
        )
    }
}
export default LoadListTehnology