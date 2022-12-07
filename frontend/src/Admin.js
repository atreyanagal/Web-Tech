import { useState } from "react";
import { Link } from "react-router-dom";
const Admin=()=>{
    
    return(
        <div>
            <form>
                <Link to='/Addplace'>Add a new place</Link>
                <Link to='/Deleteplace'>Delete a place</Link>
            </form>
        </div>
    )
}
export default Admin;