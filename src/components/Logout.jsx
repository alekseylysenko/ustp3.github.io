import NavBarMain from './NavBarMain';
import {useNavigate} from 'react-router-dom';
function Logout(){
    let navigate = useNavigate();

    const onLogin = () => {
        navigate('/login')
    }
    return(
        <div>
            <NavBarMain/>
            <div className='container is-fluid mt-4'>
              Нет авторизации на сайте! Нажмите <a onClick={() => onLogin()}>войти</a> 
            </div>
        </div>
    )
}
export default Logout;