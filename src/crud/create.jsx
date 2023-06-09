import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin":"*"};

    const handlesubmit = (e) =>{
        e.preventDefault();

        console.log("clicked");
        axios.post(
            "https://6481b70929fa1c5c5031ecf2.mockapi.io/crud-practise",
            {   name:name,
                email:email,
                header,
            })
            .then(()=>{
                history("/read");

            })
    };

    return (
        <>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) =>{setName(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) =>{setEmail(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </form>
        </>

    )
}

export { Create }