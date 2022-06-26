import axios from 'axios';
import {useState} from 'react';
function AddAvatar(props){
    const [avatar, setAvatar] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const postHandler = () => {
        var formData = new FormData();
        formData.append("avatar", avatar);
        axios.put(`https://firmwarertk.herokuapp.com/api/profiles/1`,  formData,{ 
            headers: {"Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem('my-token')}` ,}, 
         
           
        }, ).then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
    return(
        <div>
             <form onSubmit={postHandler} className='form field'>
                    <label>
                        Имя:
                        <input type="text" value={firstName} className='input mt-2'  onChange={(e) => setFirstName(e.target.value)} />
                    </label>                   
                    <label>
                        Фамилия:
                        <input type="text" value={lastName} className='input mt-2'  onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <label>
                        Аватарка:
                        <input type="file" className='button is-info input mt-2' onChange={(e) => setAvatar(e.target.files[0])}/>
                    </label>
                    <input type="submit" value="Изменить" className='button is-info mt-3'/>
                </form> 
        </div>
    )
}
export default AddAvatar;