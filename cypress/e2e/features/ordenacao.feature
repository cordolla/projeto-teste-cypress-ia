# language: pt
@ordenacao
Funcionalidade: Ordenação de produtos
  Como um usuário autenticado
  A fim de encontrar produtos facilmente
  Eu quero ordenar a listagem de produtos

  Contexto: Usuário logado na página de inventário
    Dado que eu acesso a pagina inicial
    Quando preencho o campo de login com "standard_user"
    E preencho o campo de senha com "secret_sauce"
    E clico no botão de entrar

  @regressao
  Cenário: Ordenar produtos por nome de A a Z
    Quando seleciono a ordenação "Name (A to Z)"
    Então os produtos devem estar em ordem alfabética crescente

  @regressao
  Cenário: Ordenar produtos por nome de Z a A
    Quando seleciono a ordenação "Name (Z to A)"
    Então os produtos devem estar em ordem alfabética decrescente

  @regressao
  Cenário: Ordenar produtos por preço do menor para o maior
    Quando seleciono a ordenação "Price (low to high)"
    Então os produtos devem estar em ordem de preço crescente

  @regressao
  Cenário: Ordenar produtos por preço do maior para o menor
    Quando seleciono a ordenação "Price (high to low)"
    Então os produtos devem estar em ordem de preço decrescente
