# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1. Qual a relação entre os métodos HTTP e o CRUD?

    ▶ O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são referenciados como Verbos HTTP. Cada um dele implementa uma semântica diferente. Os verbos são GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE  e PATCH.

    CRUD é um acrônimo para Create, read, Update and Delete. É um conjunto de operações básicas(POST, GET, PUT e DELETE) para um executar um banco de dados respectivamente).  

    As definições citadas encontrei através de pesquisas na internet nos sites abaixo, e pude compreender que o CRUD tem parte dos verbos do protocolo HTTP. É isso que os dois tem em comum.

    fonte1: https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD

    fonte2: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods

2. Comente, com exemplos, a diferença entre o PUT e o PATCH.

​      ▶ Agora vou explicar da forma que entendi 😎

​          PUT substitui todos os dados atuais do banco conforme você requisita, já o PATCH é        destinado para fazer atualizações parciais conforme a requisição.

 

3. Assim como na aula, apresente os dados dos JSONs no console 

- No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
- No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
- No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4. Defina o conceito de idempotência e como uma API pode ser idempotente

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.
 Fonte: MDN


5. Cite alguns diferentes padrões de projetos de software

Padrões de criação

Padrões estruturais

Padrões comportamentais