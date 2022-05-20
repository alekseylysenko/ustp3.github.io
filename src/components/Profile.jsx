import NavBarMain from './NavBarMain';

function Profile(props){
    return(
        <div>
            <NavBarMain auth={props.auth} setAuth={props.setAuth}/>
            <div className='container mt-4 is-fluid'>
                <div className='box'>
                    Профиль
                </div>
            </div>
        </div>
    );
}

export default Profile;