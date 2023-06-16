import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://6481b70929fa1c5c5031ecf2.mockapi.io/crud-practise")
            .then((res) => {
                //console.log(res.data)
                setData(res.data);
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://6481b70929fa1c5c5031ecf2.mockapi.io/crud-practise/${id}`
        ).then(() => {
            getData()
        })
    }

    const setToLocalStorage = (id,name,email) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

    }

    useEffect(() => {
        getData();

    }, [data]);



    return (
        <>
            <h2>Read Operations</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {

                        return (
                            <>
                                <tbody key={eachData.id}>
                                    <tr key={eachData.id}>
                                        <th scope="row" key={eachData.id}>{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button className='btn btn-success' onClick={() =>{setToLocalStorage(eachData.id,eachData.name,eachData.email)}}>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { handleDelete(eachData.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export { Read };