class Elements {
  inputUsuario = () => '#user-name';
  inputSenha = () => '#password';
  btnEntrar = () => '#login-button';
  mensagemErro = () => '[data-test="error"]';
}

const elements = new Elements();
export { elements };
