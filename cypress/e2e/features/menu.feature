# language: pt
@menu
Funcionalidade: Menu lateral
  Como um usuário autenticado
  A fim de navegar pelo sistema
  Eu quero utilizar o menu lateral

  Contexto: Usuário logado
    Dado que eu acesso a pagina inicial
    Quando preencho o campo de login com "standard_user"
    E preencho o campo de senha com "secret_sauce"
    E clico no botão de entrar

  @regressao
  Cenário: Abrir e fechar o menu lateral
    Quando clico no botão do menu
    Então eu devo ver o menu lateral aberto
    Quando clico no botão de fechar o menu
    Então eu devo ver o menu lateral fechado

  @regressao
  Cenário: Navegar para "All Items" pelo menu
    Quando clico no botão de ver detalhes
    E clico no botão do menu
    E clico na opção "All Items"
    Então eu devo ver a página de inventário

  @smoke
  Cenário: Realizar logout pelo menu
    Quando clico no botão do menu
    E clico na opção "Logout"
    Então eu devo ver a página de login

  @regressao
  Cenário: Resetar estado da aplicação pelo menu
    Quando clico no botão de adicionar ao carrinho
    Então eu devo ver o produto no carrinho
    Quando clico no botão do menu
    E clico na opção "Reset App State"
    Então eu devo ver o produto removido do carrinho
