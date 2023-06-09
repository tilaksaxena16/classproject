import React from 'react'

const Update = () => {
  return (
    <>
    <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" 
                    //onChange={(e) =>{setName(e.target.value)}}
                     />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" 
                    //onChange={(e) =>{setEmail(e.target.value)}}
                     />
                </div>
                <button type="submit" className="btn btn-primary" 
                //onClick={handlesubmit}
                >Update</button>
            </form>
    
    </>
  )
}

export { Update };