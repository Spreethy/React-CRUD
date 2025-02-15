import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Student() {

    const [student,setStudent] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    },[])


    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/student/'+id)
            window.location.reload()

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className = 'd-flex vh-100 bg-secondary justify-content-center align-items-center '>
        <div className = 'w-50 bg-white rounded p-3'>
            <Link to = "/add" className = 'btn btn-success'>Add +</Link>
            <table className = 'table'>
                <thead>
                    <tr>
                    <th style={{ color: 'darkblue' }}>Name</th>
                    <th style={{ color: 'darkblue' }}>Email</th>
                    <th style={{ color: 'darkblue' }}>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                {
                Array.isArray(student) && student.length > 0 ? (
                        student.map((data, i) => (
                            <tr key={i}>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>
                                <Link to={`update/${data.ID}`} className="btn btn-primary"> Update </Link>
                                <button className="btn btn-danger ms-2"
                                onClick={() => handleDelete(data.ID)}
                                >
                                Delete
                                </button>
                            </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan="3">No students found.</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student