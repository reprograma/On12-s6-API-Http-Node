# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
O HTTP tem alguns métodos que são similares ao CRUD (create, read, update e delete) para construir suas aplicações.
 Por exemplo o POST pode corresponder a um CREATE, criando algo através da url passada.

GET
O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

PUT
O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
s
DELETE
O método DELETE remove um recurso específico.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
Os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

  Em matemática e ciência da computação, a idempotência é a propriedade que algumas operações têm de poderem ser aplicadas ...
 Tem-se idempotência quando se chama a mesma funcionalidade com o mesmo valor
 e o resultado é exatamente o mesmo 
     Um API pode ser idempotente se o serviço altera o estado (por exemplo 
 escrevendo no banco de dados), então ele não é idempotente.
    
5) Cite alguns diferentes padrões de projetos de software.
Os dois principais padrões para implementação de controle de criação de objetos são: FactoryMethod, Singleton.

Os Padrões Estruturais estão diretamente ligados à composição de uma classe, ou seja, como é formada a sua estrutura.
Os três principais padrões relacionados à esta categoria são:Adapter, Decorator, Facade.

Os Padrões Comportamentais:
 Como o próprio nome diz, têm o objetivo de lidar com a forma com que um objeto se comunica com outro(s), sem que eles precisem conhecer muito uns dos outros. A interação entre objetos é um dos pontos principais de um bom projeto de software.

 O padrão Mediator:
  Tem o objetivo de definir um objeto que encapsula toda a forma como um conjunto de objetos interage e atua como um mediador entre relacionamentos de objetos muitos-para-muitos, evitando referências explícitas aos objetos, promovendo o baixo acoplamento.

  Outro padrão comportamental amplamente utilizado é o Observer: Cujo objetivo principal é definir uma dependência um-para-muitos entre objetos. Quando um objeto mudar de estado, todos os dependentes são notificados e atualizados automaticamente e, para isso, o padrão Observer mantém uma lista com seus dependentes.