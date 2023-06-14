
const NetflixRegister = () =>
{
    return(
        <div>
            <p className="text-white">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control" placeholder="Your email address"/>
                <button className="btn btn-danger ms-2">Get Started <span className="bi bi-chevron-right"></span> </button>
            </div>
        </div>
    )
}

export { NetflixRegister };