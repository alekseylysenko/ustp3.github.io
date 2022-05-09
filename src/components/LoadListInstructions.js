
import { useState , useEffect } from 'react';
import {  useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
function LoadListInstructions(){
    let navigate =  useNavigate();
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
      
    useEffect(() => {  
      
        axios.get(`https://firmfare.herokuapp.com/api/posts/`)
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
                {items.map( (post) => (<div><Link to={`/instructions/${post.id}`} key={post.id}>{post.title}</Link><hr/></div>) )}         
            </div>
        )
    }
}
export default LoadListInstructions