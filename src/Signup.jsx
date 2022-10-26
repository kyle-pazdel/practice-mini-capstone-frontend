import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      {status ? <img src={`https://http.cat/${status}}`} /> : null}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div className="col-md-12">
          <label for="email" className="form-label">
            Email
          </label>
          <input type="text" id="email" name="email" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" min="0" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            min="0"
            className="form-control"
          ></input>
        </div>
        <div className="col-12">
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  );
}
