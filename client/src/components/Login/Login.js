import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log(username, password);
      navigate("/cities");
      return;
    }

    console.log("Enter credentials");
  };
  return (
    <main>
      <div className="container">
        <section className="left"></section>
        <section className="right">
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <span className="form-heading">Login here</span>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" />
          </form>
          <section className="divider">
            <hr />
            <span>or</span>
            <hr />
          </section>
          <section className="oauth"></section>
        </section>
      </div>
    </main>
  );
};

export default Login;
