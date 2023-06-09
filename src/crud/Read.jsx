import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://6481b70929fa1c5c5031ecf2.mockapi.io/crud-practise")
            .then((res) => {
                //console.log(res.data)
                setData(res.data);
            })
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
                                <tbody>
                                    <tr key={eachData.id}>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <button className='btn btn-success'>Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>

                                    </tr>
                                </tbody>
                            </>
                        )})
                }
            </table>

        </>
    )
}

export { Read };