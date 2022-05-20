import NavBarMain from './NavBarMain.js';

function Home(props){
    

    return(
        <div>
              <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
              <div className='container is-fluid mt-4'>
                <div className='box'>
                  Главная
                </div>
             </div>
        </div>
    );
}
export default Home;