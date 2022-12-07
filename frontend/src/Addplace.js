import { useState } from "react";
const Addplace = () => {
  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [desc, setDesc] = useState([]);
  const [review, setReview] = useState([]);
  const [error, setError] = useState([]);
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
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addplace;
