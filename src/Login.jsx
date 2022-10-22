import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="row g-3" onSubmit={handleLogin}>
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
        <div className="col-12">
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  );
}
