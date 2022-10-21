import axios from "axios";

export function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("handleLogin");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
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
