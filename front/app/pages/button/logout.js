import { useContext } from "react";
import { AuthContext } from "../authcontext";
import Router from "next/router";

function Logoutbutton() {
    const { logout } = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
        
    };

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logoutbutton;