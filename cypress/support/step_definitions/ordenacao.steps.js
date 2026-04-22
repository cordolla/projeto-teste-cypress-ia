import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ordenacaoPage } from "../pages/OrdenacaoPage";

When("seleciono a ordenação {string}", (opcao) => {
  ordenacaoPage.selecionarOrdenacao(opcao);
});

Then("os produtos devem estar em ordem alfabética crescente", () => {
  ordenacaoPage.validarOrdemAlfabeticaCrescente();
});

Then("os produtos devem estar em ordem alfabética decrescente", () => {
  ordenacaoPage.validarOrdemAlfabeticaDecrescente();
});

Then("os produtos devem estar em ordem de preço crescente", () => {
  ordenacaoPage.validarOrdemPrecoCrescente();
});

Then("os produtos devem estar em ordem de preço decrescente", () => {
  ordenacaoPage.validarOrdemPrecoDecrescente();
});
