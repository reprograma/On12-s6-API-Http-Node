# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

    * O método HTTP é um protocolo de comunicação utilizado para sistemas de informação de hipermídia, distribuídos e colaborativos e é constituído por alguns verbos: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE e CONNECT. O método CRUD (acrónimo do inglês Create, Read, Update e Delete) são as quatro operações básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema. Como a gente pôde ver, os verbos e ações usadas em ambos os métodos são parecidas, mas a diferença está em suas aplicações.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

    * O método PUT é usado ára a alteração de um dado completo, já o método PATCH é usado ára atualização parcial do dado.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

    * Podemos definir um método idempotente como um método que pode ser chamado muitas vezes sem resultados diferentes, ou seja, não apresentará nenhum efeito colateral no servidor. Os métodos idempotentes são GET, HEAD, PUT e DELETE.

5) Cite alguns diferentes padrões de projetos de software

    * Padrão de criação: São padrões que abstraem e ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independentemente de como seus objetos são criados, compostos e representados

    * Padrão de comportamento: Esses se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de 
    
    * Padrão de estrutura: Se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.



## Fontes

- http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT
- https://qastack.com.br/programming/6203231/which-http-methods-match-up-to-which-crud-methods
- https://devporai.com.br/o-que-e-crud-e-porque-voce-deveria-aprender-a-criar-um/
- https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent