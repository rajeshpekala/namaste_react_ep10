import { LOGO_URL } from "../utils/constants";
import {useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnname,setBtnname] = useState("login");
const onlinestatus =useOnlineStatus();


// console.log("page rendered");
// useEffect(
//     () => {
//         console.log("useeffect render");
//     },[btnname]
// ); 

    return (
        <div className = "flex justify-between bg-green-200 shadow-md m-1">
            <div className = "logo-container">
            <img className = "w-24" src = {LOGO_URL} alt = "logo" />
            
            </div >
          
            <div className = "flex  items-center" >
                <ul className = "flex p-3 m-3">
                    <li className="px-4">OnlineStatus:{
                    onlinestatus?("✅"):("🚨") }</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className = "login"
                    onClick={ () => {
                        btnname === "login"?
                     setBtnname("logout"):
                     setBtnname("login");   
                    }}
                    >{btnname}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;