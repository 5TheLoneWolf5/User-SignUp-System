import OwnAvatar from "../components/Avatar";
import OwnGrid from "../components/Grid";
import OwnFab from "../components/Fab";
import OwnTypography from "../components/Typography";
import OwnIconButton from "../components/IconButton";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { AddCircleOutline, Visibility, VisibilityOff, Assignment } from "@mui/icons-material";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import OwnTextField from "../components/TextField";
import fakeCreate from "../utils/fakeCreate";
import { useState } from "react";

const styleGridItems = {

  display: "flex", 
  justifyContent: "center", 
  alignItems: "center",
  
}

const handleClick = () => {

  fakeCreate();

};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

export default function Form(props) {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  return (
    <>
      <OwnTypography variant="h4" gutterBottom>
        Cadastro
      </OwnTypography>
      <OwnGrid id="signupGrid" spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <OwnTextField fullWidth label="Nome de Usuário"></OwnTextField>
        </Grid>
        <Grid item xs={1} style={styleGridItems}>
          <OwnAvatar variant="rounded" style={{width:"fit-content", height: "30px"}} >
            <Assignment />
          </OwnAvatar>
        </Grid>
        <Grid item xs={12}>
          <OwnTextField fullWidth label="Email"></OwnTextField>
        </Grid>
        <Grid item xs={12}>
          {/* <OwnTextField fullWidth placeholder="Senha"></OwnTextField> */}
          <OwnTextField fullWidth
            variant="outlined"
            InputProps={
              {endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            }
            type={showPassword ? "text" : "password"}
            label="Digite a senha"
          />
        </Grid>
        <Grid item xs={12}>
          <OwnTextField fullWidth
            variant="outlined"
            InputProps={
              {endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            }
            type={showPassword ? "text" : "password"}
            label="Confirme a senha"
          />
        </Grid>
        <Grid item xs={5} style={styleGridItems}>
          <OwnIconButton onClick={handleClick} aria-label="login" color="tertiary" style={{width: "56px", height: "56px", border: "1px solid"}}>
            {/* Registrar */}
            <AppRegistrationIcon />
          </OwnIconButton>
        </Grid>
        <Grid item xs={2}><p style={{textAlign: "center"}}>OU</p></Grid>
        <Grid item xs={5} style={styleGridItems}>
          <OwnFab onClick={handleClick} color="primary">
            <AddCircleOutline />
          </OwnFab>
        </Grid>
      </OwnGrid>
    </>
  );

};