
import { useState , useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
function LoadListInstructions(){
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
      
    useEffect(() => {  
      
        axios.get(`https://firmfare.herokuapp.com/api/posts/?format=json`)
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
                {items.map( (post) => (<div><Link to={`/ustp3.github.io/instructions/${post.id}`} key={post.id}>{post.title}</Link><hr/></div>) )}         
            </div>
        )
    }
}
export default LoadListInstructions