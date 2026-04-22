import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../pages/ProductPage";

When("clico no botão de adicionar ao carrinho", () => {
  productPage.adicionarAoCarrinho();
});

Then("eu devo ver o produto no carrinho", () => {
  productPage.validarProdutoNoCarrinho();
});

When("clico no botão de remover do carrinho", () => {
  productPage.removerDoCarrinho();
});

Then("eu devo ver o produto removido do carrinho", () => {
  productPage.validarProdutoRemovido();
});

When("clico no botão de ver detalhes", () => {
  productPage.verDetalhes();
});

Then("eu devo ver os detalhes do produto", () => {
  productPage.validarDetalhesProduto();
});

When("clico no botão de finalizar compra", () => {
  productPage.finalizarCompra();
});

Then("eu devo ver a página de checkout", () => {
  productPage.validarPaginaCheckout();
});

When("preencho o campo de nome com {string}", (nome) => {
  productPage.preencherCampoNome(nome);
});

When("preencho o campo de sobrenome com {string}", (sobrenome) => {
  productPage.preencherCampoSobrenome(sobrenome);
});

When("preencho o campo de CEP com {string}", (cep) => {
  productPage.preencherCampoCep(cep);
});

When("clico no botão de continuar", () => {
  productPage.clicarBotaoContinuar();
});

Then("eu devo ver a página de resumo", () => {
  productPage.validarPaginaResumo();
});

Then("eu devo ver a página de confirmação", () => {
  productPage.validarPaginaConfirmacao();
});

When("clico no ícone do carrinho", () => {
  productPage.clicarIconeCarrinho();
});

When("clico no botão de continuar comprando", () => {
  productPage.clicarContinuarComprando();
});
