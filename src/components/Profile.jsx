import NavBarMain from './NavBarMain';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AddAvatar from './Profile/AddAvatar';
function Profile(props){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        axios.get('https://firmwarertk.herokuapp.com/auth/users/me',
       { headers: { Authorization: `Bearer ${localStorage.getItem('my-token')}` }}
        )
        .then(response => response.data)
        .then((result) => {
            setUser(result.username);
            setEmail(result.email);
            setIsLoaded(true);  
            console.log(user)
        },(error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [user])
    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container mt-4 is-fluid'>
                <div className='box'>                   
                    <p>Профиль {user}</p>   
                </div>
                <AddAvatar name={user}/>
            </div>
        </div>
    );
}

export default Profile;