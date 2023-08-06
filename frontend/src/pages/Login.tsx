import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      credentials: "include", // backendからcookieを取得するのに必要
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const content = await res.json();
    if (content?.message === "success") {
      props.setName(content.name);
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1
          className="h3 mb-3 fw-normal"
          id="generated-id-1691247782076-wmdt818gt"
        >
          Please sign in
        </h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default Login;
