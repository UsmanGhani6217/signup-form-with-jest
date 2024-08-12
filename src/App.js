import { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!validator.isEmail(state.email)) {
      return setError("The email you input is invalid.");
    } else if (state.password.length < 5) {
      return setError(
        "The password you entered should contain 5 or more characters."
      );
    } else if (state.password !== state.confirmPassword) {
      return setError("The passwords don't match. Try again")
    }else{
      return setError('')
    }
  };
  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
