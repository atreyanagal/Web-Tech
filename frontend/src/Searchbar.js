import React, { useEffect, useState } from "react";
import {Places} from "./Places";
import Card from './Card'
import Addreview from "./Addreview";
import { Link } from "react-router-dom";
const Searchbar=()=>{
  const [search,setSearch]=useState([]);
  const [place,setPlace]=useState([]);
  const [error,setError]=useState('');
  const [err,boolErr]=useState(false)
  const handleSubmit=async(e)=>{

      e.preventDefault();
      
      const responce=await fetch('/api/places/getoneplace/'+search,{
          method:'GET'
      })

      const json=await responce.json()
      
      
      if(responce.status==200){
          setPlace(json);
          setSearch('');
          boolErr(false);
         
      }else{
        boolErr(true)
        setError("no places found")
      }

  }
       
  
  return(
  
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter place be searched</label>
        <input type="text" placeholder="place to search" onChange={(e)=>setSearch(e.target.value)} value={search}></input>
        <button type="submit">submit</button>
      </form>
      {/* <Card places={place}/> */}
      {
        <div>
        <h1>{place.Name}</h1>
        <h2>{place.Desc}</h2>
        {
          err?error:""
        }
     
        
      </div>
      }
    </div>
    
  )

  }

export default Searchbar;