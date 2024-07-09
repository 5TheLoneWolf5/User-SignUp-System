import "./index.css";
import { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import { LoginContext } from "./contexts/LoginContext";

// UTILIZE O COMANDO "npm run start" NA SHELL PARA INICIAR A APLICAÇÃO WEB.

const App = (props) => {
  const [userLogged, setUserLogged] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <LoginContext.Provider value={{ userLogged, setUserLogged }}>
            <Navbar />
            <div className="main-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/list" element={<List />} />
              </Routes>
            </div>
          </LoginContext.Provider>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
