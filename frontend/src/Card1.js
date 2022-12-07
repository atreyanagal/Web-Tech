import { useState } from "react"
import Header from './Header';
import './Card1.css';
import Addreview from "./Addreview";
const CardDetails=()=>{

      const getItem = () => {
            return localStorage.getItem("place") ? JSON.parse(localStorage.getItem('place')) : null 
      }

      const [data, setData] = useState(getItem)

      return (
            <div className="card1"> 
                  <h1 className="name">{data.Name}</h1>
                  <br/>
                  <h2 className="desc">{data.Desc}</h2>
                  <br/><br/>
                  <h1>Reviews Given for this place are</h1>
                  <h2>{data.Review}</h2>

                  <Addreview/>
            </div>
            
      )
            
      
      
}
export default CardDetails;

