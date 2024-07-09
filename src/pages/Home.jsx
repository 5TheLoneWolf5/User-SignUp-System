import OwnAlert from "../components/Alert";
import OwnTypography from "../components/Typography";

export default function Home(props) {

  return (
    <>
      <OwnTypography variant="h4" gutterBottom>
        Bem vindo ao sistema de usuários feito em React para o AT Mobile-first!
      </OwnTypography>
      <OwnAlert severity="info">Utilize a barra de navegação para acessar as seções do site.</OwnAlert>
    </>
  );
  
};