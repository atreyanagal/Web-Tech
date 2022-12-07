import { useState } from "react";
const Deleteplace=()=>{

    const [place,setPlace]=useState([]);
    const [error,setError]=useState('');

    const handleSubmit=async (e)=>{
        e.preventDefalut();
        const responce=await fetch("/api/places/deleteoneplace/"+place,{
            method:'DELETE'
        })
    const json = await responce.json();
        
    if (!responce.ok) {
      setError(json.error);
    }
    if (responce.ok) {
      setPlace("");
    }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter name of the place to be deleted</label>
                <input
          type="text"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
        ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Deleteplace;