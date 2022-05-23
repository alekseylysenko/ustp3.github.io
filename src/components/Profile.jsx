import NavBarMain from './NavBarMain';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Profile(props){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        axios.get('https://firmwarertk.herokuapp.com/auth/users/me',
       { headers: { Authorization: `Bearer ${localStorage.getItem('my-token')}` }}
        )
        .then(response => response.data)
        .then((result) => {
            setUser(result.username);
            setEmail(result.email);
            console.log(user)
        })
    }, [user])
    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container mt-4 is-fluid'>
                <div className='box'>
                    Профиль {user}
                </div>
            </div>
        </div>
    );
}

export default Profile;