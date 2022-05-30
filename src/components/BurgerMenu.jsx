/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useNavigate} from 'react-router-dom';

function BurgerMenu(props){
    let navigate =  useNavigate();
    const goInstructions = () => {
        navigate("/instructions");
    }
    const goFirmwares = () => {
        navigate("/firmwares");
    }
    const goHome = () => {
        navigate("/ustp3.github.io");
    }
    const goLogin = () => {
        navigate("/login");
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
        <div>
            <div className='container box'>
            <div  className='is-flex is-justify-content-center '>
                <a onClick={goHome}>Главная</a>
            </div>
            <hr/>
            <div  className='is-flex is-justify-content-center'>
                <a onClick={goFirmwares}>Прошивки</a>
            </div>
            <hr/>
            <div  className='is-flex is-justify-content-center mt-2'>
                <a onClick={goInstructions}>Инструкции</a>
            </div>
            <hr/>
            <div  className='is-flex is-justify-content-center mt-2'>
               <div className='columns'>
                   { (props.auth === true)
                       ?   <div className='column is-flex is-justify-content-center'><a  className='button is-light' onClick={goLogout}>Выход</a></div>
                       :    <>
                            <div className='column is-flex is-justify-content-center'><a className='button is-light' onClick={goLogin}>Войти</a></div>
                            <div className='column is-flex is-justify-content-center'><a className='button is-info' onClick={goRegistration}>Регистрация</a></div>
                            </>
                    }                        
               </div>
            </div>
            <hr/>
            </div>
        </div>
    );
}
export default BurgerMenu;