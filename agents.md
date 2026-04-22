# Regras para os Agentes IA de Automação

Este arquivo define o padrão comportamental para qualquer IA colaborando no desenvolvimento do projeto Cypress + Gherkin.

## Regras e Padrões de Projeto:

1. **Idioma Gherkin:**
   As funcionalidades (`features`) DEVERÃO ser sempre geradas em português (Dado, Quando, Então e E).
   A tag `# language: pt` DÊVE ser o topo obrigatório do arquivo `.feature`.

2. **JavaScript e ESModules:**
   O projeto é construído em Vanilla JavaScript puro. 
   Mantenha a simplicidade. Todas as importações devem respeitar o formato ESModule (`import ... from ...`).

3. **Arquitetura Page Object Model (POM):**
   - NUNCA coloque localizadores (`cy.get('.minha-div')`) no meio das `step_definitions`.
   - **Step Definitions (`.steps.ts`):** Devem ser "limpas" e servir apenas para acionar métodos numa Page Object class. As funções importadas das classes Page Objects é que farão a mágica.
   - **Pages (`Pages.ts`):** Onde agrupamos ações lógicas (`clicarBotaoSalvar()`, `preencherFormulario()`). Os métodos do Page não devem expor asserções se não precisarem, devem refletir fluxos de usuário.
   - **Elements (`Elements.ts`):** TODAS os seletores (CSS, XPath, id) deverão estar isolados neste arquivo, em fomato de funções arrow que retornam o seletor em *string*.

4. **Boas Práticas de Cypress (Imperativas):**
   - **NUNCA** utilize `cy.wait()` com um número explícito, a não ser como última opção (ex. `cy.wait(3000)`). Use intercept via `cy.intercept()` e espere pela chamada de rede com `cy.wait('@rotaMockada')`.
   - Utilize a configuração global de asserções assíncronas do Cypress para verificar componentes que demoram para renderizar: ex `cy.get('element').should('be.visible')`
   - Use comutação imperativa e encadeamento em blocos `cy... `.
   - O uso de `.then()` deve ser evitado se uma chained com `.should()` e `.invoke()` puder resolver.

5. **Organização:**
   - As importações `@badeball/cypress-cucumber-preprocessor` ditarão a estrutura:
     ```typescript
     import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
     ```

6. **Testes Enxutos e Objetivos (No DRY):**
   - As `features` devem ser sempre o mais limpas e concisas possível.
   - Utilize a tag `Contexto:` (`Background`) para isolar pré-condições que se repetem em todos os cenários (ex: Realizar login, acessar a home).
   - Utilize a tag `Esquema do Cenário:` (`Scenario Outline`) e `Exemplos:` sempre que for validar fluxos idênticos com massas de dados diferentes (como testes de erros de formulário).
   - Cenários devem ser atômicos. Evite "acumular" todos os cliques de testes anteriores apenas para testar um novo clique no final. O teste tem que ir direto ao ponto.
