import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/user", {
        headers: { "Content-Type": "application/json" },
        mode: "cors", //クロスオリジンリクエストをするのでCORSモードにする
        credentials: "include", // 取得したcookieを含める
      });
      const content = await res.json();
      setName(content.name);
    })();
  });

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <header>
            <Nav name={name} setName={setName} />
          </header>
          <main className="form-signin w-100 m-auto">
            <Routes>
              <Route path="/" Component={() => <Home name={name} />}></Route>
              <Route
                path="/login"
                Component={() => <Login setName={setName} />}
              ></Route>
              <Route path="/register" Component={Register}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
