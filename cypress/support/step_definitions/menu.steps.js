import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { menuPage } from "../pages/MenuPage";

When("clico no botão do menu", () => {
  menuPage.abrirMenu();
});

Then("eu devo ver o menu lateral aberto", () => {
  menuPage.validarMenuAberto();
});

When("clico no botão de fechar o menu", () => {
  menuPage.fecharMenu();
});

Then("eu devo ver o menu lateral fechado", () => {
  menuPage.validarMenuFechado();
});

When("clico na opção {string}", (opcao) => {
  menuPage.clicarOpcaoMenu(opcao);
});

Then("eu devo ver a página de login", () => {
  menuPage.validarPaginaLogin();
});
