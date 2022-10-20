import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users", params)
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
      <h1>Sign Up</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" name="name" className="form-control"></input>
        </div>
        <div className="col-md-12">
          <label for="price" className="form-label">
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
