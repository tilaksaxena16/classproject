import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Earthapi = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY")
            .then(response => {
                setData(response.data);
            })

    }, []);
    return (
        <>
            <div className="container-fluid">
                <main className="d-flex flex-wrap overflow-auto" style={{ height: '500px' }}>
                    {
                        data.map(item =>
                            <div key={item.identifier} className="card m-2 p-2" style={{ width: '200px' }}>
                                <div className="card-header">
                                    {item.identifier}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Caption Name</dt>
                                        <dd>{item.caption}</dd>
                                    </dl>
                                </div>
                            </div>
                        )
                    }
                </main>
            </div>
        </>
    )
}

export { Earthapi };