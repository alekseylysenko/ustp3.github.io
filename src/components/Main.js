import { HashRouter, Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react';
import Profile from './Profile.jsx';
import Firmwares from './Firmwares.js';
import Instructions from './Instructions.js';
import Home from './Home.js';

import InstructionSinglePage from './InstructionSinglePage.js';
import LoginPage from './LoginPage';
import axios from 'axios';
import Logout from './Logout';
import Registration from './Registration';

function Main(){
    const [auth, setAuth] = useState('false');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [items, setItems] = useState();

    

    const handleSubmit = () => {
        axios.post('https://firmwarertk.herokuapp.com/auth/jwt/create/', {
            username: login,
            password: password
          })
          .then((response) => {

            localStorage.setItem('my-token', response.data.access);
            localStorage.setItem('isAuth', 'true');
            setAuth(true);         
     
          },(error) => {
            setError(error)     
            }
        );
    }
    useEffect(() => {
        axios.get('https://firmwarertk.herokuapp.com/auth/users/me',
        { headers: { Authorization: `Bearer ${localStorage.getItem('my-token')}` }}
        ) 
        .then(response => response.data)
        .then((result) => {
            setItems(result);
         
        },(error) => {
           if(error.response.status === 401){
            localStorage.setItem('isAuth', 'false');
            setAuth(false);
           }
        })
        
      
    },[auth, items, error]);

    return(
        <HashRouter  basename="/" >
                <Routes>       
                    <Route path="/ustp3.github.io" element={<Home auth={auth} setAuth={setAuth}/> } />
                    {
                        (localStorage.getItem('isAuth') === 'true')
                        ?<Route path="/profile" element={<Profile auth={auth} setAuth={setAuth}/> } />
                        :<Route path="/login" element={<LoginPage handleSubmit={handleSubmit} login={login} password={password} setLogin={setLogin} setPassword={setPassword} auth={auth}/>} />        
                    }                      
                    <Route path="/registration" element={<Registration auth={auth} setAuth={setAuth}/>} />    
                    <Route path="/firmwares" element={<Firmwares auth={auth} setAuth={setAuth}/>} />    
                    <Route path="/instructions" element={<Instructions auth={auth} setAuth={setAuth}/>} />   
                    <Route path="/instructions/:instructionId/" element={<InstructionSinglePage auth={auth} setAuth={setAuth}/>} />                       
                    <Route path="*" element={<Home auth={auth} setAuth={setAuth}/>} />        
                    if(localStorage.getItem('isAuth') === 'true')
                          <Route path="/logout" element={<Logout auth={auth} setAuth={setAuth}/>} />
                          <Route path="/registration" element={<Registration auth={auth} setAuth={setAuth}/>} />   

                </Routes>
        </HashRouter>  
       

    );
}

export default Main;