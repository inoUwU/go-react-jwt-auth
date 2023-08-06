import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    // ページ更新を防ぐ
    e.preventDefault();

    await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  // 本来いるページと異なる場合はNavigateを返す
  if (redirect) return <Navigate replace to="/login" />;

  return (
    <>
      <form onSubmit={submit}>
        <h1
          className="h3 mb-3 fw-normal"
          id="generated-id-1691247782076-wmdt818gt"
        >
          Please register
        </h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>

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
          <label
            htmlFor="floatingPassword"
            id="generated-id-1691247782076-6couur3ls"
          >
            Password
          </label>
        </div>
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          id="generated-id-1691247782076-ab6zcg24i"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Register;
