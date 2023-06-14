import { NetflixHeader } from "./Netflix-header";
import "./Netflix-index.css";
import { NetflixMain } from "./Netflix-main";
import { NetflixRegister } from "./Netflix-register";

const NetflixIndex = () => {
    return (
    <>
        <div className="bg-image">
            <div className="bg-shade">
                <NetflixHeader />
                <NetflixMain />
            </div>
        </div>
    </>
    )
}

export { NetflixIndex }