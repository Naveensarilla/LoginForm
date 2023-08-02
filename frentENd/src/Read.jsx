import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export const Read = () => {
    const {id} = useParams();
    const [student, setStudent] = useState([])

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
        <h2>{student.id}</h2>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>

<Link to='/' className="btn btn-primary">BAck</Link>
<Link to={`/edit/${student.id}`} className="btn btn-primary">Edit</Link>

    </div>
  )
}
