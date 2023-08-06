import { Link } from "react-router-dom";

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  const logout = async () => {
    await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      credentials: "include", // backendからcookieを取得するのに必要
    });

    props.setName("");
  };

  let menu;

  if (props.name) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link
            to={"/login"}
            className="nav-link"
            id="login-link"
            onClick={logout}
          >
            Logout
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link" id="login-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link" id="register-link">
            Register
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link
            to={"/"}
            className="navbar-brand"
            id="generated-id-1691249683627-90as9r663"
          >
            Home
          </Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            {menu}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
