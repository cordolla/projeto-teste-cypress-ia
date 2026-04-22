import { productElements } from "../elements/ProductElements";

class ProductPage {
  adicionarAoCarrinho() {
    cy.get(productElements.btnAddCart()).click();
  }

  validarProdutoNoCarrinho() {
    cy.get(productElements.cartBadge()).should('have.text', '1');
  }

  removerDoCarrinho() {
    cy.get(productElements.btnRemoveCart()).click();
  }

  validarProdutoRemovido() {
    cy.get(productElements.cartBadge()).should('not.exist');
  }

  verDetalhes() {
    cy.get(productElements.productTitleLink()).click();
  }

  validarDetalhesProduto() {
    cy.get(productElements.productDetailsContainer()).should('be.visible');
  }

  finalizarCompra() {
    // Como o botão "finalizar compra" é chamado em lugares diferentes 
    // no seu gherkin, identificamos onde estamos para clicar no botão certo
    cy.url().then((url) => {
      if (url.includes('cart.html')) {
        cy.get(productElements.btnCheckout()).click();
      } else if (url.includes('checkout-step-two.html')) {
        cy.get(productElements.btnFinish()).click();
      } else {
        // Se estiver na tela de produtos, abre o carrinho primeiro e clica em checkout
        cy.get(productElements.cartLink()).click();
        cy.get(productElements.btnCheckout()).click();
      }
    });
  }

  validarPaginaCheckout() {
    cy.url().should('include', '/checkout-step-one.html');
  }

  preencherCampoNome(nome) {
    cy.get(productElements.inputFirstName()).type(nome);
  }

  preencherCampoSobrenome(sobrenome) {
    cy.get(productElements.inputLastName()).type(sobrenome);
  }

  preencherCampoCep(cep) {
    cy.get(productElements.inputPostalCode()).type(cep);
  }

  clicarBotaoContinuar() {
    cy.get(productElements.btnContinue()).click();
  }

  validarPaginaResumo() {
    cy.url().should('include', '/checkout-step-two.html');
  }

  validarPaginaConfirmacao() {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(productElements.completeHeader()).should('have.text', 'Thank you for your order!');
  }

  clicarIconeCarrinho() {
    cy.get(productElements.cartLink()).click();
  }

  clicarContinuarComprando() {
    cy.get(productElements.btnContinueShopping()).click();
  }

  validarErroCheckout(mensagem) {
    cy.get(productElements.erroCheckout()).should('contain.text', mensagem);
  }
}

export const productPage = new ProductPage();
