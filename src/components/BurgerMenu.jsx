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
        navigate("/ustp3.github.io");
        };

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
                   <div className='column'><a href="">Войти</a></div>
                   <div className='column'><a href="">Регистрация</a></div>
               </div>
            </div>
            <hr/>
            </div>
        </div>
    );
}
export default BurgerMenu;