import {  useNavigate } from 'react-router-dom';

function AuthNavBar(props){

    let navigate =  useNavigate();
    const goLogin = () => {
        navigate("/login",)
    }
    const goRegistration = () => {
        navigate("/registration");
    }
    const goLogout = () => {
        props.setAuth(false);
        localStorage.setItem('my-token', '');
        localStorage.setItem('isAuth', false);
        navigate("/logout"); 
    }
    return(
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
                 
             {   (props.auth === true)                                          
               ? <a className="button is-light" onClick={goLogout}>
                    Выход
                </a>
               : <><a className="button is-light" onClick={goLogin}>
                    Вход
                </a> 
                <a className="button is-info" onClick={goRegistration}>
                    <strong>Регистрация</strong>
                </a>  </>
                }
            </div>
        </div>
    </div>
    );
}
export default AuthNavBar;