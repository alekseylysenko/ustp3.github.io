import {  useNavigate } from 'react-router-dom';

function Menu(props){
    let navigate =  useNavigate();
    const goInstructions = () => {
        navigate("/instructions");
      };
    const goFirmwares = () => {
        navigate("/firmwares");
        };
    const goAdmin= () => {
        navigate("/profile");
    }
    const goHome = () => {
        navigate("/ustp3.github.io");
        };
    return(
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
         {
             (props.auth === true)
             ?<a className="navbar-item" onClick={goAdmin} >
                Профиль
            </a> 
            : <></>
         }
            

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
    )
}
export default Menu;