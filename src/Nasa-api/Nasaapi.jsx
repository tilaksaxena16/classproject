import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

const Nasaapi = () => {

    const [marsObject, setMarsObject] = useState([]);

    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
        .then(response=>{
            setMarsObject(response.data.photos);
        })
    },[]);

    return (
    <>
        <div className="container-fluid">
            <main className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                {
                    marsObject.map(item=>
                        <div key={item.id} className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={item.img_src} className="card-img-top" height="150px" />
                            <div className="card-header">
                                {item.id}
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera Name</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{item.rover.name}</dd>
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

export { Nasaapi };