# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
CRUD são as quatro operações de criação, leitura, atualização e exclusão, e é possivel correlacionar um verbo HTTP específico para cada ação, sendo que GET se relaciona com leitura, POST com criação, PUT para atualização e DELETE para exclusão.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
Em poucas palavras, os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}
Em outras palavras, se fosse na esfera política, o PUT seria a revolução e o PATCH são as reformas.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

```
    const colors = require("colors-rgb.js")
    for (let color in colors[0] ){
    console.log(color + " - " + colors[0][color][0])
    
    }
    
    
```
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console


    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado, apresenta o mesmo resultado. API pode ser idempotente quando os métodos são criados de forma a sempre retornarem o mesmo resultado e comportamento para um mesmo conjunto de parÂmetro de entrada.


5) Cite alguns diferentes padrões de projetos de software
Abstract Factory, Factory Method, Singleton, Builder e Prototype, são padrões de criação que propõem soluções flexíveis para criação de objetos. 
Proxy, Adapter, Facade, Decorator, Bridge, Composite e Flyweight, são padrões de estrutura que propõem soluções flexíveis para composição de classes e objetos.
Strategy, Observer, Template Method, Visitor, Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento e State, são padrões de comportamento que propõem soluções flexíveis para interação e divisão de responsabilidades entre classes e objetos.
