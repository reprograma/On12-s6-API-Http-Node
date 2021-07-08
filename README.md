# On12-TodasEmTech-s6-Introducao-Node
Turma Online 12 | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
    
    RESPOSTA: 
    O HTTP é um protocolo de comunicação na camada de aplicação (navegadores e servidores web). Esse protocolo atua no modelo request e response. Esses pedidos são                   feitos ao servidor por meio de verbos (métodos) como: GET (solicitação), PUT (update), POST (inserir), PATCH e DELETE.
    O CRUD é um acrônimo para as 4 operações utilizadas em banco de dados relacionais. São elas: CREATE (criação), READ (consulta), UPDATE (atualização) e DELETE (excluir).
    A relação entre os métodos do CRUD e do HTTP são ambos executam as mesmas ações. O HTTP dá possibilidades para um CRUD. Por exemplo:
    - GET: pega informações no DB;
    - READ: lê informações solicitadas;
    - POST: cria uma nova instância do objeto do servidor;
    - CREATE: cria uma nova informação;
    - PUT/PATCH: atualizam a instância (PUT atualiza o objeto inteiro e o PATCH atualiza só uma instância);
    - DELETE: tanto no HTTP quanto no CRUD excluem o que é pedido.


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

    RESPOSTA: 
    PUT: atualiza ou modifica a instância do objeto inteiro (idempotente).
    PATCH: atualiza ou modifica de forma parcial as instâncias de um objeto (não idempotente).


3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
    
    RESPOSTA:
    Idempotência é uma característica que algumas operações têm de poderem ser executadas mais de uma vez sem que o valor da resposta à solicitação mude depois da primeira           resposta. Ou seja, se fizermos a mesma requisição inúmeras vezes o resultado será o mesmo.
    Uma API pode ser idempotente se executar uma mesma ação duas vezes ou mais e a mensagem dela retornar a mesma resposta como se tivesse sido feita apenas uma vez. Assim,         teremos uma API com alteração idempotente.


5) Cite alguns diferentes padrões de projetos de software
    
    RESPOSTA:
    Os padrões de projeto (design patterns) são divididos em 3 grupos: Padrões de criação, estruturais e comportamentais.
    O objetivo dos Padrões de Criação é evitar problemas e proporcionar maior controle na tarefa de criação de objetos, separando o processo de criação, conclusão e                 representação de um objeto. Exemplos: FactoryMethod e Singleton.
    Os Padrões Estruturais estão diretamente ligados à composição de uma classe, ou seja, como é formada a sua estrutura. Esse tipo de padrão define formas para criar               composições ou adicionar comportamentos à um determinado objeto, sem necessariamente precisar alterar o código-fonte da classe que o implementa. Exemplos: Adapter, Decorator      e facade.
    Os Padrões Comportamentais, como o próprio nome diz, têm o objetivo de lidar com a forma com que um objeto se comunica com outro(s), sem que eles precisem conhecer muito uns     dos outros. A interação entre objetos é um dos pontos principais de um bom projeto de software. Exemplo: Mediator.
