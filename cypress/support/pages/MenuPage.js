import { menuElements } from "../elements/MenuElements";

class MenuPage {
  abrirMenu() {
    cy.get(menuElements.btnMenu()).click();
  }

  fecharMenu() {
    cy.get(menuElements.btnFecharMenu()).click();
  }

  validarMenuAberto() {
    cy.get(menuElements.menuContainer()).should('have.attr', 'aria-hidden', 'false');
  }

  validarMenuFechado() {
    cy.get(menuElements.menuContainer()).should('have.attr', 'aria-hidden', 'true');
  }

  clicarOpcaoMenu(opcao) {
    switch (opcao) {
      case 'All Items':
        cy.get(menuElements.linkAllItems()).click();
        break;
      case 'Logout':
        cy.get(menuElements.linkLogout()).click();
        break;
      case 'Reset App State':
        cy.get(menuElements.linkResetApp()).click();
        break;
      case 'About':
        cy.get(menuElements.linkAbout()).click();
        break;
    }
  }

  validarPaginaLogin() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
  }
}

export const menuPage = new MenuPage();
