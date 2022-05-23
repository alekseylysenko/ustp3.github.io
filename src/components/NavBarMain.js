/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu.js';
import Menu from './NavBar/Menu.jsx';
import AuthNavBar from './NavBar/AuthNavBar.jsx';

function NavBarMain(props){
    let navigate =  useNavigate();
    const [auth, setAuth] = useState();
    
    useEffect(() => {
        setAuth(localStorage.getItem('isAuth') === 'true');

    },[])
    const[click, setClick] = useState(false);
    let burgerButton;
    
   
   
    const goHome = () => {
        navigate("/ustp3.github.io");
        };
        
    const divStyle = click === false ? {visibility: "hidden", position: "absolute"} : {visibility: "visible", position: "absolute", zIndex: 2,  width: '100%'};
      
    if(click === false) {       
             burgerButton = <a  role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setClick(true)}>  <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             </a> }              
        else{
            burgerButton =  <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={() => setClick(false)} >
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           </a>  }        
        
           
 
    
    return(
      
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={goHome}>
                <img src={require('./rtkg.png')} width="112" height="28" alt='logo'/>
                </a>
                {burgerButton}
                
               
              
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
            <Menu auth={auth}/>

            <AuthNavBar auth={auth} setAuth={setAuth}/>
            </div>
        </nav>
        <div style={divStyle}>
            <BurgerMenu auth={props.auth} setAuth={props.setAuth} />
        </div>
        </>
    );
}
export default NavBarMain;