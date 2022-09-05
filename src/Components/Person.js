
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Person(props) {
    
    const [name,setName] = useState('hasan')
    const [age,setAge] = useState('25')
    const [gender,setgender] = useState('male')
    const [newName,setnewName] = useState(false)
    const { register, handleSubmit } = useForm();

    const handleRegistration = (data) => {
        setName(data.name)
        setAge(data.age)
        setgender(data.gender)
        fetchData(data)
    };

    const fetchData = (data)=>{

        axios.post(`https://expressserverhasan.herokuapp.com/person/?name=${data.name}&age=${data.age}&gender=${data.gender}`)
        .then(data=>setnewName(data.data) )
        .catch(err=>console.log(err))

    }

    return (
        <div>

                { 
                <>
                <h4 data-testid="name-element">Name : {name}</h4>
                <h4 data-testid="age-element">Age : {age}</h4>
                <h4 data-testid="gender-element">Gender : {gender}</h4>
                {
                    newName&&
                    <>
                    <h4 data-testid="newName-element">New Age after Adding +5 : {newName}</h4>
                    </>
                }
                </>
                }

                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <label>Name</label>
                            <input data-testid="nameinput" name="text" {...register('name')} placeholder='Enter ....' />
                        </div>
                        <div>
                            <label>Age</label>
                            <input data-testid="ageinput" type="number" name="age" {...register('age')} placeholder='Enter ....'  />
                        </div>
                        <div>
                            <label>Gender</label>
                            <input data-testid="genderinput" type="text" name="gender" {...register('gender')} placeholder='Enter ....' />
                        </div>
                        <button data-testid="lonlybtn-element">Update</button>
                    </form>







{/* 
                <form onSubmit={handleSubmit}>
                    Enter Your Name : <input type='text' value = {name} placeholder='Name ...' onChange={e => {
                        
                        setName(e.target.value)}
                        }/><br />
                    Enter Your Age : <input type='number' placeholder='Age ...'  onChange={e => setAge(e.target.value)}/> <br />
                    Enter Your Gender : <input type='text'  placeholder='Gender ...'  onChange={e => setgender(e.target.value)} /> <br />
                    <input type='submit' value='Update'/>
                </form> */}



        </div>
    );
}

    
export default Person;
