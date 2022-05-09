/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useNavigate} from 'react-router-dom';

function BurgerMenu(){
    let navigate =  useNavigate();
    const goInstructions = () => {
        navigate("/instructions");
      };
    const goFirmwares = () => {
        navigate("/firmwares");
    };
    const goHome = () => {
        navigate("/");
        };
    return(
        <div >
             <nav className="navbar" role="navigation" aria-label="main navigation">
             <div className="navbar-brand ">
                <a className="navbar-item" onClick={goHome}>
                <img src={require('./rtkg.png')} width="112" height="28" alt='logo'/>
                </a>
                <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={() => navigate(-1)} >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            </nav>
            <hr/>
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
                <a>Еще</a>
            </div>
            <hr/>
            </div>
        </div>
    );
}
export default BurgerMenu;