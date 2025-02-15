import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate();


    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/add',{name,email})
        .then(res => {
            console.log(res);
            
            navigate('/');
        }).catch(err => console.log(err));
    
    }
  return (
    <div className = 'd-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className = 'w-50 bg-white rounded p-3'>
            <form onSubmit = {handleSubmit}>
                <h2  >Add Student</h2>
                <div className = 'mb-2'>
                    <label htmlFor="" style={{ color: 'darkblue' }}>Name</label>
                    <input type = "text" placeholder = 'Enter Name' className = 'form-control' onChange = {e => setName(e.target.value)}></input>
                </div>
                <div className = 'mb-2'>
                    <label htmlFor="" style={{ color: 'darkblue' }}>Email</label>
                    <input type = "email" placeholder = 'Enter email'  className = 'form-control' onChange = {e=>setEmail(e.target.value)}></input>
                </div>
                <button className='btn btn-success' >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddStudent