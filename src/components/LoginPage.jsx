import axios from 'axios';
import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBarMain from './NavBarMain.js';

function LoginPage(props){
  
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      if(props.auth === true){
          navigate('/instructions');
      }
   
    },)
    // const handleSubmit = () =>{
    //     axios.post('https://firmwarertk.herokuapp.com/auth/jwt/create/', {
    //         username: login,
    //         password: password
    //       })
    //       .then((response) => {
    //         localStorage.setItem('my-name', response.data.access);
    //         // localStorage.setItem('isAuth', 'true');
    //         navigate('/instructions');
    //       },(error) => {
    //         setError(error)     
    //         }
    //     );
    // }
    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container is-fluid mt-4'>
            <div className='box columns'>
                <div className='column is-one-third'></div>
                <div className='column is-one-third'>
                <form onSubmit={props.handleSubmit} className='form field'>
                    <label>
                        Логин:
                        <input type="text" value={props.login} className='input mt-2'  onChange={(e) => props.setLogin(e.target.value)} />
                    </label>
                    <label>
                        Пароль:
                        <input type="password" value={props.password} className='input mt-2' onChange={(e) => props.setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Войти" className='button is-info mt-3'/>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default LoginPage;