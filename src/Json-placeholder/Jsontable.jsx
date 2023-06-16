import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Jsontable = () => {
    const [table, setTable] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTable(response.data);
            })

    }, []);

    return (
        <>
            <div>
                {
                    table.map((data) =>
                    //     <table key={data.id}>
                    //         <tr>
                    //             <th>Id</th>
                    //             <th>Title</th>
                    //             <th>Status</th>
                    //         </tr>
                    //         <tr>
                    //             <td>{data.userId}</td>
                    //             <td>{data.title}</td>
                    //             <td>{data.completed}</td>
                    //         </tr>
                    //     </table>

                    <table key={data.id} className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.completed}</td>
                             
                            </tr>
                        </tbody>
                    </table>

                    )
                }

            </div>


        </>
    )
}

export { Jsontable };