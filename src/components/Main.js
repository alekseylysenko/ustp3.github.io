import { HashRouter, Route, Routes} from "react-router-dom";
import {useState} from 'react';
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


    const handleSubmit = () => {
        axios.post('https://firmwarertk.herokuapp.com/auth/jwt/create/', {
            username: login,
            password: password
          })
          .then((response) => {

            localStorage.setItem('my-token', response.data.access);
            localStorage.setItem('isAuth', 'true');
            setAuth( localStorage.getItem('isAuth') === 'true')         
            console.log(auth)
          },(error) => {
            setError(error)     
            }
        );
    }
  
    return(
        <HashRouter  basename="/" >
                <Routes>       
                    <Route path="/ustp3.github.io" element={<Home auth={auth} setAuth={setAuth}/> } />
                    {
                        (localStorage.getItem('isAuth') === 'true')
                        ?<Route path="/profile" element={<Profile auth={auth} setAuth={setAuth}/> } />
                        :<Route path="/logout" element={<Logout auth={auth} setAuth={setAuth}/>} />
                    }   
                    <Route path="/logout" element={<Logout auth={auth} setAuth={setAuth}/>} />
                    <Route path="/registration" element={<Registration auth={auth} setAuth={setAuth}/>} />    
                    <Route path="/firmwares" element={<Firmwares auth={auth} setAuth={setAuth}/>} />    
                    <Route path="/instructions" element={<Instructions auth={auth} setAuth={setAuth}/>} />   
                    <Route path="/instructions/:instructionId/" element={<InstructionSinglePage auth={auth} setAuth={setAuth}/>} />    
                    <Route path="/login" element={<LoginPage handleSubmit={handleSubmit} login={login} password={password} setLogin={setLogin} setPassword={setPassword} auth={auth}/>} />  
                    <Route path="*" element={<Home auth={auth} setAuth={setAuth}/>} />        
                </Routes>
        </HashRouter>  
       

    );
}

export default Main;