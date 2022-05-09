/* eslint-disable jsx-a11y/anchor-is-valid */

import {  useNavigate} from 'react-router-dom';


function NavBarMain(){
    let navigate =  useNavigate();
    const goInstructions = () => {
        navigate("/instructions");
      };
    const goFirmwares = () => {
    navigate("/firmwares");
    };
    const goBurgerMenu = () => {
        navigate("/burger-menu");
        };
    const goHome = () => {
        navigate("/");
        };
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={goHome}>
                <img src={require('./rtkg.png')} width="112" height="28" alt='logo'/>
                </a>
                <a  role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={goBurgerMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" onClick={goHome}>
                        Главная
                    </a>
                  
                    <a className="navbar-item" onClick={goFirmwares} >
                        Прошивки
                    </a>
                   
                    <a className="navbar-item" onClick={goInstructions} >
                    Инструкции
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" >
                        Ещё
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item" >
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item" >
                            Report an issue
                        </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-info" >
                                <strong>Регистрация</strong>
                            </a>
                         
                            <a className="button is-light">
                                Вход
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default NavBarMain;