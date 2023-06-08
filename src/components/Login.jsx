import React from "react";
import "./Login.css";

const Login = () => {

    return (
        <>
            <div className="container">
                <form className='form-control  border border-2 border-primary w-25 p-3 shadow ml-40'>
                    <h2>USER LOGIN</h2>
                    <dl>
                        <dt>USER NAME</dt>
                        <dd><input type="text" className='form-control mb-4' /></dd>
                        <dt>PASSWORD</dt>
                        <dd><input type="password" className='form-control mb-4' /></dd>
                        <dt>EMAIL</dt>
                        <dd><input type="email" className='form-control mb-4' /></dd>
                    </dl>
                    <button className='btn btn-primary w-100'>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export { Login }