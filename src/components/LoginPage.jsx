import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBarMain from './NavBarMain.js';

function LoginPage(){
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () =>{
        console.log(login);
    }
    return(
        <div>
            <NavBarMain/>
            <div className='container is-fluid mt-4'>
            <div className='box columns'>
                <div className='column is-one-third'></div>
                <div className='column is-one-third'>
                <form onSubmit={handleSubmit} className='form field'>
                    <label>
                        Логин:
                        <input type="text" value={login} className='input mt-2'  onChange={(e) => setLogin(e.target.value)} />
                    </label>
                    <label>
                        Пароль:
                        <input type="text" value={password} className='input mt-2' onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Войти" className='button is-info mt-3' />
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default LoginPage;