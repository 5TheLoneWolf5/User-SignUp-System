import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginContext } from "../contexts/LoginContext";
import { useState, useEffect, useContext } from "react";
import fakeLogin from "../utils/fakeLogin";

const stackStyle = {
  position: "fixed",
  bottom: "0",
  // left: "50%",
  width: "100%",
  // transform: "translateY(-50%, -50%)",
  margin: "2px",
  padding: "6px",
  borderRadius: "3px",
  backgroundColor: "#F7F7F7",
  zIndex: "1",
};

export default function Navbar(props) {

  const { userLogged, setUserLogged } = useContext(LoginContext);
  const [active, setActive] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {

    if (active) {
      active.classList.remove("active");
    }
    
    const navChildren = Array.from(document.querySelectorAll("#stackNav")[0].children);
    
    for (let i = 0; i < navChildren.length; i++) {

      if (window.location.href === navChildren[i].href) {
        navChildren[i].classList.add("active");
        setActive(navChildren[i]);
      }
      
    }
    
  }, [userLogged]);

  const handleClick = (e) => {

    handleActive(e);
    
    if (userLogged) {

      // console.log("LOGOUT");
      fakeLogin(null);
      setUserLogged(null);
      
    }
    
  };

  const handleActive = (e) => {

    if (active && (e.target.nodeName === "A" || e.target.parentElement.nodeName === "A" || e.target.parentElement.parentElement.nodeName === "A")) {
        // console.log(active);
        active.classList.remove("active");
      }

    if (e.target.nodeName === "A") {

      e.target.classList.add("active");
      setActive(e.target);

    } else if (e.target.parentElement.nodeName === "A") {

        // console.log(e.target.nodeName);
        e.target.parentElement.classList.add("active");
        setActive(e.target.parentElement);

    } else if (e.target.parentElement.parentElement.nodeName === "A") {

        // console.log(e.target.nodeName);
        e.target.parentElement.parentElement.classList.add("active");
        setActive(e.target.parentElement.parentElement);

    }
    
    // console.log(e.target, e.target.parentElement);
    // // e.preventDefault();
    // if (active && (e.target.nodeName === "A" || e.target.parentElement.nodeName === "A")) {
    //   active.classList.remove("active");
    // }
    
    // if (e.target.nodeName === "A") {
      
    //   e.target.classList.add("active");
    //   setActive(e.target);
      
    // } else if (e.target.parentElement.nodeName === "A") {

    //     console.log(e.target.parentElement.nodeName);
    //     e.target.parentElement.classList.add("active");
    //     setActive(e.target.parentElement);
      
    // }
    
  };

  // const handlePropagation = (e) => {

  //   e.stopPropagation();
  //   e.preventDefault();
    
  // };
  
  return (
    <Stack id="stackNav" onClick={handleActive} style={stackStyle} direction="row" justifyContent="space-around" spacing={1}>
      <Link className="navLink" to="/"><HomeIcon />Home</Link>
      <Link className="navLink" to="/form"><AppRegistrationIcon />Form</Link>
      <Link className="navLink" to="/list"><ViewListIcon />List</Link>
      <Link onClick={handleClick} className="navLink" to="/login"> 
        {/* onClick={"handleClick(); handleActive();"} */}
        {userLogged ? <><LogoutIcon />Deslogar</> : <><LoginIcon />Logar</>}
      </Link>
    </Stack>
  );
}