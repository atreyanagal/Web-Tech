import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admin from './Admin'
const Addplace = () => {
  const navigate = useNavigate();
  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [desc, setDesc] = useState([]);
  const [review, setReview] = useState([]);
  const [error, setError] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username != "guru" || password != "test") {
      <h2>Wrong User name or password</h2>
      navigate("/");
    } else {
      navigate("/admin")
    }
  };
  return (
    <div>
      <h1>Add a new place</h1>
      <form onSubmit={handleSubmit}>
        <label>Entre username of Admin</label>
        <input required id="username_Adminspace"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <label>Enter Admin password</label>
        <input required id="password_Adminspace"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        {/* <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label>Enter location of the place</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        ></input>
        <labe>Enter description</labe>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <label>Time</label>
        <input
          type="text"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        ></input>
        <label>Entre review</label>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea> */}
        <button id="submit_Adminspace" type="submit">submit</button>
      </form>
    </div>
  );
};
export default Addplace;








/*const place = { name, location, time, desc, review };
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
    }*/