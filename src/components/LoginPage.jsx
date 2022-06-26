import axios from 'axios';
import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBarMain from './NavBarMain.js';

function LoginPage(props){
  
    const navigate = useNavigate();
    useEffect(() => {
      if(props.auth === true){
          navigate('/instructions');
      }
      
    },
    [navigate, props])

    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container is-fluid mt-4'>
            <div className='box columns'>
                <div className='column is-one-third'></div>
                <div className='column is-one-third'>
                <form onSubmit={props.handleSubmit} className='form field'>
                    <label>
                        Логин:
                        <input type="text" value={props.login} className='input mt-2'  onChange={(e) => props.setLogin(e.target.value)} />
                    </label>
                    <label>
                        Пароль:
                        <input type="password" value={props.password} className='input mt-2' onChange={(e) => props.setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Войти" className='button is-info mt-3'/>
                </form>
                <div>
                  {   (props.error.code === 'ERR_BAD_REQUEST')
                        ? <><p>Не верный логин или пароль!</p>
                            {() => props.setError(undefined)}
                         </>
                        : <p></p>
                        }
      
                </div>
                </div>
                
            </div>
          
            </div>
        </div>
    )
}
export default LoginPage;