# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
    GET = Solicitação
    POST = Criação
    PUT = Envia todos os atributos alterados
    PATCH = Não envia todos os atributos alterados, só os alterados
    DELETE = Deleta

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
    PUT = Envia todos os atributos alterados. Ex.: Alterar o primeiro nome, envia: {"first": "Débora", "last": "Tavares"} 
    PATCH = Não envia todos os atributos alterados, só os alterados. Ex.: Alterar o primeiro nome: {"first": "Débora"} 

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
     Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada. O GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.

5) Cite alguns diferentes padrões de projetos de software
    Design pattern é uma solução geral para um problema que ocorre com frequência. Não é um projeto finalizado que pode ser diretamente transformado em código fonte ou de máquina, ele é uma descrição ou modelo (template) de como resolver um problema que pode ser usado em muitas situações diferentes.
    As características obrigatórias que devem ser atendidas por um padrão de projeto são nome, problema, solução e consequências.
    
    No livro sobre padrões de projeto, são propostos 23 padrões, divididos nas seguintes três categorias (os padrões que estudaremos neste capítulo estão em negrito, seguido do número da seção em que eles são apresentados):

        Criacionais: padrões que propõem soluções flexíveis para criação de objetos. São eles: Abstract Factory (6.2), Factory Method, Singleton (6.3), Builder (6.12) e Prototype.

        Estruturais: padrões que propõem soluções flexíveis para composição de classes e objetos. São eles: Proxy (6.4), Adapter (6.5), Facade (6.6), Decorator (6.7), Bridge, Composite e Flyweight.

        Comportamentais: padrões que propõem soluções flexíveis para interação e divisão de responsabilidades entre classes e objetos. São eles: Strategy (6.8), Observer (6.9), Template Method (6.10), Visitor (6.11), Chain of Responsibility, Command, Interpreter, Iterator (6.12), Mediator, Memento e State.