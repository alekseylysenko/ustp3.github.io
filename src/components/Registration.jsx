import NavBarMain from './NavBarMain';
import { useState} from 'react';
function Registration(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () =>{

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