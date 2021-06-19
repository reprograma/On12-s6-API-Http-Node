# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

Os métodos **HTTP** são como blocos de construção. Os verbos como também são conhecidos, constroem as requisições que serão enviadas para um servidor, que por sua vez, devolve uma respota em um formato específico ou realiza uma ação de acordo com o que foi pedido.
Já o **CRUD** são as quatro operações básicas para a criação de uma tela de cadastro, falando de uma forma mais leviana,  (criação de um novo registro, consultar um registro, atualizar um registro e deletar um registro).

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

A principal diferença entre o **PUT** (SUBSTITUIR) e o **PATCH** (MODIFICAR) é que enquanto o PUT atualiza ou cria um recurso solicitado na URI fornecida, o PUTCH atualiza apenas parte do recurso e não ele por completo. 

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente 

* Alguns métodos HTTP podem ser chamados várias vezes sem que altere nada em seu servidor. Esse fenômeno é o que chamamos de metódos idempotentes. O Get, por exemplo, pode ser chamado diversas vezes sem nenhum problema já que quando utilizado não estamos alterando o servidor e sim consultando-o. Um outro exemplo de alteração idempotente é atualizar uma página da web. Não haverá alteração se essa ação for feita duas vezes seguidas. As informações continuam da mesma forma na página, como se a ação não tivesse sido feita.

5) Cite alguns diferentes padrões de projetos de software

* Padrões de criação: Cria objetos sob medida, sob demanda e sem se preocupar com as nuances da criação.    Objetiva abstrair a instanciação de objetos.

* Padrões Estruturais: Sua preocupação é a melhor organização das classes e os relacionamentos entre classes e objetos.

* Padrões Comportamentais: Atuam diretamente na delegação de responsabilidades, definindo como os objetos devem comportar e se comunicar.

Fontes:

<http://gabsferreira.com/os-metodos-http-e-a-diferenca-entre-eles/>
<https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT>
<https://qastack.com.br/programming/6203231/which-http-methods-match-up-to-which-crud-methods>
<https://devporai.com.br/o-que-e-crud-e-porque-voce-deveria-aprender-a-criar-um/>
<https://www.treinaweb.com.br/blog/padroes-de-projeto-o-que-sao-e-o-que-resolvem>
