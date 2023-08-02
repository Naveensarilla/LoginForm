import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Create = () => {
    const [value, setValue] = useState({
        name: '',
        email: ''
    })

    const navigate =useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:7007/regData', value)
        .then(res => {
            console.log(res);
            navigate('/')
            
        })
        .catch(err => console.log(err))
    } 

  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
            <div className="bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" onChange={e => setValue({...value, name: e.target.value})} className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input onChange={e => setValue({...value, email: e.target.value})} type="email" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
