export default function fakeLogin(usuario) {

  if (!usuario) {
    window.alert(`Usuário deslogado!`);
  } else {
    window.alert(`Usuário ${usuario} logado!`);
  }

};