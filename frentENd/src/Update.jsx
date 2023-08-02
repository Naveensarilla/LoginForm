import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Update = () => {
    const [value, setValue] = useState({
        name: student.name,
        email: student.email
    })
    // const [student, setStudent] = useState([])

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:7007/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1>Update</h1>
        <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
            <div className="bg-white rounded p-3">
                <form >
                    <h2>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" onChange={e => setValue({...value, name: e.target.value})} value={value.name} className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input onChange={e => setValue({...value, email: e.target.value})} value={value.email} type="email" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}
