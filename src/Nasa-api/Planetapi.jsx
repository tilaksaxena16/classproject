import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Planetapi = () => {

    const [apidata, setApidata] = useState({});

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                setApidata(response.data);
            })
    }, []);

    return (
        <>
            {/* <div className="container-fluid">
                <div key={apidata.service_version} className="card m-2 p-2" style={{ width: '200px' }}>
                    <img src={apidata.url} />
                    <div className="card-header">
                        {apidata.service_version}
                    </div>
                    <div className="card-body">
                        <dl>
                            <dt>title</dt>
                            <dd>{apidata.title}</dd>
                            <dt>Details</dt>
                            <dd>{apidata.explanation}</dd>
                        </dl>
                    </div>
                </div>
            </div> */}

            <div className="card">
                <img src={apidata.url} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{apidata.title}</h5>
                        <p className="card-text">{apidata.explanation}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>

    );
};

export { Planetapi };