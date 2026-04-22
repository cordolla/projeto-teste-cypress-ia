import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pages/LoginPage";

Given("que eu acesso a pagina inicial", () => {
  loginPage.acessarPaginaInicial();
});

When("preencho o campo de login com {string}", (usuario) => {
  loginPage.preencherCampoLogin(usuario);
});

When("preencho o campo de senha com {string}", (senha) => {
  loginPage.preencherCampoSenha(senha);
});

When("clico no botão de entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("eu devo ver a página de inventário", () => {
  loginPage.validarLogin();
});

Then("devo ver a mensagem de erro {string}", (mensagem) => {
  loginPage.validarMensagemErro(mensagem);
});
