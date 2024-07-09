import { useContext } from "react";
import OwnButton from "../components/Button";
import OwnTypography from "../components/Typography";
import { LoginContext } from "../contexts/LoginContext";
import LoginIcon from '@mui/icons-material/Login';
import OwnCheckbox from "../components/Checkbox";
import OwnTextField from "../components/TextField";
import fakeLogin from "../utils/fakeLogin";
import { useNavigate } from "react-router-dom";
import { FormControlLabel } from "@mui/material";

export default function Login(props) {
  const navigate = useNavigate();
  const { userLogged, setUserLogged } = useContext(LoginContext);

  const handleClick = (e) => {

    // console.log("LOGIN");
    // console.log(document.getElementById("email").value);
    console.log(e.target.elements.email.value);

    const value = e.target.elements.email.value;
    
    e.preventDefault();
    fakeLogin(value);
    setUserLogged(value);
    navigate("/");

  };
  
  return (
    <>
      <OwnTypography variant="h4" gutterBottom>
        Login
      </OwnTypography>
      <form className="formLogin" onSubmit={handleClick}>
          <div>
            <label htmlFor="email">Email: </label>
            <OwnTextField id="email" name="email" type="email" placeholder="Email" required fullWidth></OwnTextField>
          </div>
          <div>
            <label htmlFor="senha">Senha: </label>
            <OwnTextField id="senha" name="senha" type="password" placeholder="Senha" required fullWidth></OwnTextField>
          </div>
          <div>
            <FormControlLabel
              value="logado"
              control={<OwnCheckbox />}
              label="Manter logado?"
              labelPlacement="start"
              />
          </div>
        <div>
          <OwnButton fullWidth type="submit" variant="contained">
            <LoginIcon />
            Logar
          </OwnButton>
        </div>
      </form>
    </>
  );
}
