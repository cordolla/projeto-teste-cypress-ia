# language: pt
@login
Funcionalidade: Login na página inicial
  Como um usuário do sistema
  A fim de acessar o sistema
  Eu quero poder realizar login

  Contexto: Acessar a página
    Dado que eu acesso a pagina inicial

  @smoke
  Cenário: Realizar login com sucesso
    Quando preencho o campo de login com "standard_user"
    E preencho o campo de senha com "secret_sauce"
    E clico no botão de entrar
    Então eu devo ver a página de inventário

  @regressao
  Esquema do Cenário: Tentativas de login inválidas e bloqueadas
    Quando preencho o campo de login com "<usuario>"
    E preencho o campo de senha com "<senha>"
    E clico no botão de entrar
    Então devo ver a mensagem de erro "<mensagem>"

    Exemplos:
      | usuario         | senha        | mensagem                                                                  |
      | standard_user   | incorreta    | Epic sadface: Username and password do not match any user in this service |
      | incorreto       | incorreta    | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |

  @regressao
  Cenário: Tentar login com campos vazios
    Quando clico no botão de entrar
    Então devo ver a mensagem de erro "Epic sadface: Username is required"

  @regressao
  Cenário: Tentar login apenas com usuário
    Quando preencho o campo de login com "standard_user"
    E clico no botão de entrar
    Então devo ver a mensagem de erro "Epic sadface: Password is required"
