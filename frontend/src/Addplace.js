import { useState } from "react";
const Addplace = () => {
  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [desc, setDesc] = useState([]);
  const [review, setReview] = useState([]);
  const [error, setError] = useState([]);
  const [err,setErr]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const place = { name, location, time, desc, review };
    const responce = await fetch("/api/places/addplace", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await responce.json();

    if (!responce.ok) {
      setError(json.error);
    }
    if (responce.ok) {
      setName("");
      setLocation("");
      setTime("");
      setDesc("");
      setReview("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input required id="name_Addplace"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label>Enter location of the place</label>
        <input required id="location_Addplace"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        ></input>
        <label>Enter description</label>
        <textarea required id="desc_Addplace"
          onChange={(e) => {setDesc(e.target.value)
          e.target.value.length <15 ? setErr(true):setErr(false)
          }}
          value={desc}
        >
          
        </textarea>
        {
            err?<span>Enter atleast 15 characters of description</span>:""
          }
        <label>Time</label>
        <input required id="Time_Addplace"
          type="number"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        ></input>
        <label>Enter review</label>
        <textarea 
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
        <button  id="submit_Addplace" disabled={err} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addplace;
