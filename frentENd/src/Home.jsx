import { useEffect, useState } from "react"
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



export const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7007/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    },[])
    return (
    <div className="d-flex vh-100  justify-content-center align-item-center"> 
    <div>
    <div className="d-flex justify-content-end">
       <Link to="create" className="btn btn-success">Create +</Link>
    </div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student, index) => {
                    return(
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/read/${student.id}`} className="btn btn-info">Read</Link>
                                <Link to={`/edit/${student.id}`} className="btn btn-primary">Edit</Link>
                                <button className="bg-danger">Delete</button> 
                            
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    </div>
  )
}
