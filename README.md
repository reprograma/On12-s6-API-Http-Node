# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O protocolo http define que haverá diversos tipos de requisições
que serão responsáveis por executar ações para determinada coisa.
Como por exemplo o método get ele recupera informações de acesso, 
que é feita através da URL, que estaria muito relacionado ao READ.
Como também o metódo http PUT, que se relaciona com o UPDATE.
o POST que se relaciona ao CREATE, ou até mesmo o DELETE (possuem o mesmo nome), e servem para delete.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O put e o patch são responsáveis por fazerem requisições de alteração de dados,
utlizando o PUT, será realizado uma alteração completa do dado.
Já o patch, é usado para atualização parcial, desse dado.


3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente.

idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes 
sem que o valor do resultado se altere após a aplicação inicial.

5) Cite alguns diferentes padrões de projetos de software



Padrões de criação: Cria objetos sob medida, sob demanda e sem se preocupar com as nuances da criação. Objetiva abstrair a instantaciação de objetos.
Padrões Estruturais: Sua preocupação é a melhor organização das classes e os relacionamentos entre classes e objetos.
Padrões Comportamentais: Atuam diretamente na delegação de responsabilidades, definindo como os objetos devem comportar e se comunicar.
