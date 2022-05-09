import { useParams } from "react-router-dom";
import { useState , useEffect } from 'react';
import axios from 'axios';


function LoadSingleInstruction(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    let posts = useParams();
    useEffect(() => {  
      
        axios.get(`https://firmfare.herokuapp.com/api/posts/${posts.instructionId}/?format=json`)
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
    },)
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        
        return(
            <div >           
                <div className="box"> <div dangerouslySetInnerHTML={{ __html: items.html}} /></div>           
            </div>
        )
    }
}
export default LoadSingleInstruction;
