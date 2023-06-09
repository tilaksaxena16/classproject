import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");

    const Navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6481b70929fa1c5c5031ecf2.mockapi.io/crud-practise/${id}`,
        {
            name: name,
            email: email,
        }
        ).then(()=>{
            Navigate("/read");
        })
    };


    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={handleUpdate}
                >Update</button>
            </form>

        </>
    )
}

export { Update };