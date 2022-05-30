import NavBarMain from './NavBarMain';
import { useState} from 'react';
import axios from 'axios';
function Registration(){
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () =>{
        axios.post('https://firmwarertk.herokuapp.com/auth/users/', {
            username: login,
            password: password,
            email: email,
        });
        
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
                        Email:
                        <input type="email" value={email} className='input mt-2'  onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Пароль:
                        <input type="password" value={password} className='input mt-2' onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Зарегистрироваться" className='button is-info mt-3'/>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Registration;