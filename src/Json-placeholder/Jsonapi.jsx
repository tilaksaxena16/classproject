import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Jsonapi = () => {

  const [jsondata, setJsondata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setJsondata(response.data);
      })
  }, []);
  return (
    <>
      <div className="container-fluid">
       
          {
            jsondata.map(item =>
              <div key={item.id} class="card" style={{width:"300px"}}>
                <img src={item.thumbnailUrl} class="card-img-top" alt={item.url} />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                </div>
              </div>
            )
          }
      
      </div>
    </>
  )
}

export { Jsonapi };