import React from "react"
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar (){
    return (
        <nav className="navbar">
            <h1>GitHub Portfolio</h1>
            <div className="links">
                <Link to="/"><FaHouseUser/><i class="fa-solid fa-house-user"></i></Link>
                <Link to='/Profile'>Profile</Link>
                <Link to='/Github'>Repositories</Link>

            </div>

        </nav>
        
    );
}
export default Navbar