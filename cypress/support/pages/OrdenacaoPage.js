import { ordenacaoElements } from "../elements/OrdenacaoElements";

class OrdenacaoPage {
  selecionarOrdenacao(opcao) {
    cy.get(ordenacaoElements.selectOrdenacao()).select(opcao);
  }

  validarOrdemAlfabeticaCrescente() {
    cy.get(ordenacaoElements.todosNomesProdutos()).then(($items) => {
      const nomes = [...$items].map((el) => el.innerText);
      const ordenado = [...nomes].sort((a, b) => a.localeCompare(b));
      expect(nomes).to.deep.equal(ordenado);
    });
  }

  validarOrdemAlfabeticaDecrescente() {
    cy.get(ordenacaoElements.todosNomesProdutos()).then(($items) => {
      const nomes = [...$items].map((el) => el.innerText);
      const ordenado = [...nomes].sort((a, b) => b.localeCompare(a));
      expect(nomes).to.deep.equal(ordenado);
    });
  }

  validarOrdemPrecoCrescente() {
    cy.get(ordenacaoElements.todosPrecosProdutos()).then(($items) => {
      const precos = [...$items].map((el) => parseFloat(el.innerText.replace('$', '')));
      const ordenado = [...precos].sort((a, b) => a - b);
      expect(precos).to.deep.equal(ordenado);
    });
  }

  validarOrdemPrecoDecrescente() {
    cy.get(ordenacaoElements.todosPrecosProdutos()).then(($items) => {
      const precos = [...$items].map((el) => parseFloat(el.innerText.replace('$', '')));
      const ordenado = [...precos].sort((a, b) => b - a);
      expect(precos).to.deep.equal(ordenado);
    });
  }
}

export const ordenacaoPage = new OrdenacaoPage();
