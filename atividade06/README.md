# On11-TodasEmTech-s6-Introducao-Node :rocket:
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar :see_no_evil:
Abra o PullRequest Respondendo as seguintes questões:

#### 1) Qual a relação entre os métodos HTTP e o CRUD?

 Quando estamos navegando na web, a todo momento o nosso navegador está enviando requisições para um servidor e o servidor, por sua vez, nos devolve uma resposta em um formato específico ou realiza uma ação de acordo com o que pedirmos para ele fazer. O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso , temos 9 verbos diferentes:

 **Get** : O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

 **Head**: O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

 **Post**: O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

 **Put**: O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

 **Delete**: O método DELETE remove um recurso específico.

 **Connect**: O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.

 **Options**: O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.

 **Trace**: O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.

 **Patch**: O método PATCH é utilizado para aplicar modificações parciais em um recurso.

 **Crud** é o acrônimo da expressão do idioma Inglês, Create (Criação), Read (Consulta), Update (Atualização) e Delete (Destruição). Este acrônimo é comumente utilizado para definir as quatro operações básicas usadas em Banco de Dados Relacionais. 




#### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O método HTTP PUT permite apenas substituições completas de um documento. Em contraste ao PUT, o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos. Todavia, é possível realizar requisições PATCH de modo a serem idempotentes.

Em poucas palavras, os métodos **HTTP** **PUT** e **PATCH** são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o **PUT**, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O **PATCH** é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}


#### 3) Assim como na aula, apresente os dados dos JSONs no console 
     
     -No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro  rgb(220, 220, 220, 1)"
     
    for( let i = 0; i < obj.length ; i++ ){
     let result = obj[i]
        for (var key in result){
          console.log( key + "  rgb (" + result[key]+")"  );
            
        } 
    } 
    
    
    
  -No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console

      const data = require('./para_casa/Data/estados-cidades.js')

      let brasil = data[0]
      let estados = brasil.estados
          
      estados.forEach(estado => {
        console.log(`Estado: ${estado.nome}, Sigla:    ${estado.sigla}, Cidades:`);
        estado.cidades.forEach(cidade => {
            console.log(cidade);
        })
        console.log("")
      }) 
   
     
  -No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
  
      const obj = require('./para_casa/Data/filmes.js')
   
      let filmes = obj


      filmes.forEach(filme => {
   
       console.log(" Titulo : " + filme.Title + " Plot : " + filme.Plot )
      console.log("Gênero: ", filme.Genre.split(","));
      console.log("Língua: ", filme.Language.split(","),"\n");
      })



#### 4) Defina o conceito de idempotência e como uma API pode ser idempotente

**Idempotencia**: Em matemática e ciência da computação, a idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. Idempotente significa que o endpoint pode ser chamado várias vezes sem resultados diferentes. Não importa se o método é chamado apenas uma ou dez vezes. O resultado deve sempre ser o mesmo. Isso se aplica apenas ao resultado, não ao próprio recurso.

**API Idempotente**: Quando falamos em idempotência em API’s REST, podemos concluir que os seguinte verbos:
**GET**, **PUT**, **DELETE**, **HEAD** e **OPTIONS** são idempotentes.
**POST** não é idempotente.
Citar sobre métodos seguros e não seguros, seguros são aqueles que não alteram o estado da aplicação e não seguros que podem alterar.

**Obs**: Quando disponibilizamos uma API REST, devemos nos preocupar com os serviços que irão consumir os endpoints. Muitos comentem erros e realizam chamadas duplicadas, assim podendo afetar o resultado esperado ou recebendo algum tipo de exception. Também a casos de chamadas intencionais, por exemplo, quando ocorre um timeout, muitos serviços fazem uma nova chamada para o endpoint. Com isso devemos utilizar idempotência, prevenindo alguns erros e também aplicando uma boa prática. 


#### 5) Cite alguns diferentes padrões de projetos de software

Padrões de projeto podem ser vistos como uma solução que já foi testada para um problema. Desta forma , um padrão de projeto geralmente descreve uma solução ou uma instância da solução que foi utilizada para resolver um problema específico. Padrões de projetos  são soluções para problemas que alguém um dia teve e resolveu aplicando um modelo que foi documentado e que você pode adaptar integralmente ou de acordo com necessidade de sua solução. 

Os principais tipos de padrões de projetos são :

1. Padrões de Criação (Creational)
2. Padrões de Estrutura (Structural)
3. Padrões de Comportamento (Behavioral)

Um padrão arquitetural é uma solução já estudada, testada e documentada de um problema recorrente. O modelo ajuda na tomada de decisões do projeto de software, como qual será sua utilidade e as funções e relacionamento de cada subsistema. É ele que define a estrutura fundamental do programa.

Os modelos arquiteturais foram descritos pela primeira vez por Christopher Alexander, no final da década de 1970. Em dois livros, o autor descreve um método de documentação de padrões, que, apesar de ter sido pensado para a arquitetura, foi adaptado para a área de software e se popularizou na década de 1990. Desde então, os padrões se tornaram indispensáveis no trabalho de arquitetos de software.

Os principais tipos de arquitetura de software são:

1. Layers (camadas)
2. Client-server (cliente-servidor)
3. Model-view-controller (MVC)
4. Microservices (microsserviços)
5. Pipes-and-filters (PF)
6. Peer-to-Peer (P2P)
7. Service-Oriented Architecture (SOA)
8. Publish-Subscribe (Pub/Sub)
 

### Referêcias:

[**Métodos de requisição HTTP**] disponível em: (https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods) Acessado em: 06 de julho de 2021.

[**método de requisição HTTP PATCH**] disponível em: (https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PATCH) Acessado em: 06 de julho de 2021.

[**Diferença entre PUT e PATCH**] disponível em: (https://cursos.alura.com.br/forum/topico-diferenca-entre-put-e-patch-44669) Acessado em: 06 de julho de 2021.

[**O que é idempotência e porque devemos utilizar**] disponível em: (https://medium.com/@lucasschwenke/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0) Acessado em: 06 de julho de 2021.

[**API RESTful - Boas práticas**] disponível em: (https://www.brunobrito.net.br/api-restful-boas-praticas/)Acessado em: 06 de julho de 2021.

[**API Rest e os verbos HTTP
Arquitetura, padrões e boas práticas**] disponível em: (https://blog.mbeck.com.br/api-rest-e-os-verbos-http-46e189085e21) Acessado em: 06 de julho de 2021.

[**Padrões de Projeto - Design Patterns**] disponível em: (http://www.macoratti.net/vb_pd1.htm) Acessado em: 06 de julho de 2021.

[**Quais são os tipos de arquitetura de software e como escolher o melhor para seu projeto**] disponível em: (https://posdigital.pucpr.br/blog/tipos-de-arquitetura-de-software) 
Acessado em: 06 de julho de 2021.

