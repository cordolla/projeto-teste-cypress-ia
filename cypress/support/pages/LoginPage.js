import { elements } from "../elements/Elements";

class LoginPage {
  acessarPaginaInicial() {
    cy.visit("https://www.saucedemo.com/");
  }

  preencherCampoLogin(usuario) {
    cy.get(elements.inputUsuario()).type(usuario);
  }

  preencherCampoSenha(senha) {
    cy.get(elements.inputSenha()).type(senha);
  }

  clicarBotaoEntrar() {
    cy.get(elements.btnEntrar()).click();
  }

  validarLogin() {
    cy.url().should('include', '/inventory.html');
  }

  validarMensagemErro(mensagem) {
    cy.get(elements.mensagemErro()).should('have.text', mensagem);
  }
}


const loginPage = new LoginPage();
export { loginPage };
