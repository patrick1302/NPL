O que é SCRUM?
É um framework ágil que auxilia a gestão e planejamentos de projetos de softwares. Os projetos são divididos em ciclos que são chamados Sprints que duram de 2-4 semanas.

Quais os princípios da programação front-end?
UI, UX, responsividade

Qual os principais pontos que definem UX e UI?
UI: Layout, cores e tipografia, design gráfico;
UX: Acessibilidade, Contexto, Hierarquia, Consistência;


Como os padrões MVP, MVC e MVVM se relacionam? Quando eles são apropriados?
Todos esses padrões de arquitetura possuem a camada M (Model - descreve as regras de negócios para dados sobre como eles podem ser manipulados) e a camada V (View - representa componentes da interface do usuário).  

Qual cenário é ideal para chamadas síncronas e assíncronas em Javascript?
Chamadas síncronas: Devem ser utilizadas quando a resposta dessa chamada forem essenciais para o funcionamento do restante do código.
Chamados assíncronas: Devem ser utilizadas quando a resposta dessa chamada não influenciar diretamento o restanto do código a ser executado.

Descreva os serviços necessários para uma arquitetura web que dê suporte a um sistema:
Protocolo HTTP, Banco de dados;

Qual a melhor forma de proteger os scripts no navegador, evitando que o "inspecionar elemento" exponha suas regras e métodos?
Não colocar os scripts direito na página do HTML e sim colocá-los em arquivos separados para então fazer a utilização desses scripts no HTML sem que exponha suas regras e métodos.
Para previnir de ataques XSS é bom usar bibliotecas anti-xss, fazer a validação de input que consiste em garantir que a aplicação está renderizando os dados corretamente e assim previnindo de dados maliciosos, utilizar o Content	Secury Policy que é um cabeçalho HTTP que fornece uma lista de recursos confiáveis no qual o navegador pode confiar.

O que é e em qual momento devemos utilizar o Gulp.js?
Gulp é um task runner, ou seja, ele automatiza tarefas repetivas como minificação e contatenação de arquivos, otimização de imagens, entre outras tarefas. Deve-se utilizar o Gulp quando se busca uma melhor performance.


Construa um exemplo de sessão logada (tela de login e autenticação de usuário gravando a sessão)

```bash
## Clone este repositório
$ git clone https://github.com/patrick1302/NPL.git

## Inicie o backend
$ cd npl/auth-login/api

## Instale as dependências
$ npm install

## Execute o server
node src/index.js

## Entre no repositório front end
$ cd npl/auth-login/client

## Instale as dependências
$ npm install

##Execute o projeto
npm start

```


Qual a melhor prática de utilização de um banco não relacional?
	Quando o formato dos dados podem evoluir ou mudar com frequência (adaptabilidade). Quando se busca escabilidade de forma horizontal.  Quando se busca performance e qualidade de consulta.

Atividade. Construa um layout simples (DataTable e Grid System do Bootstrap 3) para cadastro de clientes com a seguinte estrutura:

Nome
CPF ou CNPJ (utilizar máscara)
E-mail
Latitude e Longitude (seria muito legal utilizar API de Maps)


Requisitos
Utilizar um framework CSS (pré processadores se preferir)
As interações entre o Front e o Back-end (apenas simular o back-end retornando em JSON) devem ser feitas via AJAX utilizando JSON
Qualidade de código
Limpeza
Criatividade

Você deve enviar os arquivos (html,php,css,js,img) 

```bash
## Clone este repositório
$ git clone https://github.com/patrick1302/NPL.git

## Inicie o backend
$ cd npl/customer-registration/api

## Instale as dependências
$ npm install

## Execute o mongodb

## Execute o server
node src/index.js

## Entre no repositório front end
$ cd npl/customer-registration/client

## Instale as dependências
$ npm install

##Execute o projeto
npm start
```

Construa uma interface de chat com base no Instagram (Direct), versão web e responsiva. O chat não precisa se conectar necessariamente a um webSocket, apenas simular uma conversação, troca de mensagens e um formulário de nova conversa.
