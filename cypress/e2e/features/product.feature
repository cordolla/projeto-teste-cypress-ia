# language: pt
@product
Funcionalidade: Produto e Carrinho
  Como um usuário autenticado
  A fim de comprar itens
  Eu quero gerenciar os produtos no carrinho e finalizar a compra

  Contexto: Usuário logado
    Dado que eu acesso a pagina inicial
    Quando preencho o campo de login com "standard_user"
    E preencho o campo de senha com "secret_sauce"
    E clico no botão de entrar

  @regressao
  Cenário: Visualizar os detalhes de um produto na home
    Quando clico no botão de ver detalhes
    Então eu devo ver os detalhes do produto

  @smoke
  Cenário: Adicionar produto ao carrinho
    Quando clico no botão de adicionar ao carrinho
    Então eu devo ver o produto no carrinho

  @regressao
  Cenário: Adicionar e remover produto do carrinho
    Quando clico no botão de adicionar ao carrinho
    Então eu devo ver o produto no carrinho
    Quando clico no botão de remover do carrinho
    Então eu devo ver o produto removido do carrinho

  @smoke
  Cenário: Finalizar compra com sucesso até o fim
    Quando clico no botão de adicionar ao carrinho
    E clico no botão de finalizar compra
    Então eu devo ver a página de checkout
    Quando preencho o campo de nome com "Marcelo"
    E preencho o campo de sobrenome com "Silva"
    E preencho o campo de CEP com "12345678"
    E clico no botão de continuar
    Então eu devo ver a página de resumo
    Quando clico no botão de finalizar compra
    Então eu devo ver a página de confirmação

  @regressao
  Cenário: Tentar finalizar compra sem preencher dados
    Quando clico no botão de adicionar ao carrinho
    E clico no botão de finalizar compra
    Então eu devo ver a página de checkout
    Quando clico no botão de continuar
    Então devo ver a mensagem de erro "Error: First Name is required"

  @regressao
  Cenário: Continuar comprando a partir do carrinho
    Quando clico no botão de adicionar ao carrinho
    E clico no ícone do carrinho
    Quando clico no botão de continuar comprando
    Então eu devo ver a página de inventário
