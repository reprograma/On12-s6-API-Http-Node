# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles, como por exemplo, qualquer método de requisição pode ser do tipo safe, idempotent ou cacheable (en-US).

**GET** - O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
**HEAD** - O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.
**POST** - O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
**PUT** - O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
**DELETE** - O método DELETE remove um recurso específico.
**CONNECT** - O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.
**OPTIONS** - O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.
**TRACE** - O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.
**PATCH** - O método PATCH é utilizado para aplicar modificações parciais em um recurso.

CRUD (acrónimo do inglês Create, Read, Update and Delete) são as quatro operações básicas (criação, consulta, atualização e destruição de dados) utilizadas em bases de dados relacionais (RDBMS) fornecidas aos utilizadores do sistema.

**Create** - Criar ou adicionar novas entradas
**Read (Retrieve)** - Ler, recuperar ou ver entradas existentes
**Update** - Atualizar ou editar entradas existentes
**Delete (Destroy)** - Remover entradas existentes

A relação entre os dois é a capacidade de acessar informações, alterando, adicionando deletando, enquanto os métodos HTTP interagem com sistemas complexos e com mais possibilidades de ações o CRUD lida com sistemas de bases de dados, mas ambos possuem ações similares.

Create = PUT with a new URI // POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE

Fontes:
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

Ambos os métodos indicam uma requisição de alteração de dados.

PUT: em uma única requisição será substituído todos os dados do recurso e, caso não exista um recurso, é possível criá-lo através dessa requisição. Embora seja mais aconselhável utilizar o POST para criar novo recurso


PATCH: é uma atualização parcial, sendo possível alterar apenas alguns item do recurso, diferente do PUT, não é possível criar um novo recurso com esse método.

Exemplo: 

import example from 'example'

example.patch ('/users/1', {
    phone: '(81) 99863-0034'
})

example.put('/users/1, {
    name: 'Hélyda Cavalcanti'
    email: 'hellydac@gmail.com
    phone: '(81) 99863-0034'
})

Fonte: https://cursos.alura.com.br/forum/topico-diferenca-entre-put-e-patch-44669

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

let resultado = obj[0]
for (let prop in resultado) {
    console.log(prop + " - rgb " + "(" + resultado[prop] + ")")
}

    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console

    let brasil = data [0]
let estados = brasil.estados

estados.forEach(estado => {
  console.log("Nome do Estado: " + estado.nome + " Sigla: " + estado.sigla + " Cidades: ")

estado.cidades.forEach(cidade => {
    console.log(cidade)

})
console.log("")
})


    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

for(let i = 0; i < obj.length; i++){
    let movie = obj[i]
    console.log(`Título:  ${ movie.Title}`)
    console.log(`Plot:  ${movie.Plot}`)
    console.log("Gênero:  ", movie.Genre.split(","))
    console.log("Língua: ", movie.Language.split(","))
}

4) Defina o conceito de idempotência e como uma API pode ser idempotente

Para estudos matemáticos e de ciência da computação, a indepotência é a propriedade para algumas operações de manter o mesmo resultado, mesmo sendo aplicada várias vezes. Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas).
**GET, PUT, DELETE, HEAD e OPTIONS** são idempotentes.
**POST** não é idempotente.

- Post não é indepoente pois a sua característica é de criação de um novo recurso, então cada requisição realizada deve alterar o estado da aplicação. 

Fonte: https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent

5) Cite alguns diferentes padrões de projetos de software

Padrões de projetos (Design Patterns) são soluções para problemas comuns que encontramos no desenvolvimento ou manutenção de um software orientado a objetos. Devido ao histórico de repetição de erros, foi elaborado um padrão para solucionar os erros.

O conceito de padrões foi primeiramente descrito por Christopher Alexander em Uma Linguagem de Padrões. O livro descreve uma “linguagem” para o projeto de um ambiente urbano. A ideia foi seguida por quatro autores: Erich Gamma, John Vlissides, Ralph Johnson, e Richard Helm. Em 1994, eles publicaram Padrões de Projeto — Soluções Reutilizáveis de Software Orientado a Objetos, no qual eles aplicaram o conceito de padrões de projeto para programação. O livro mostrava 23 padrões que resolviam vários problemas de projeto orientado a objetos. Os autores e o livro causaram tanto impacto que começaram a ser chamados e reconhecidos por Gang of Four (GoF) (gangue dos quatro) e tais padrões começaram a ser intitulados de GoF Patterns (Padrões GoF).

**Padrões criacionais** fornecem mecanismos de criação de objetos que aumentam a flexibilidade e a reutilização de código. Ex: Prototype, singleton 

**Padrões estruturais** explicam como montar objetos e classes em estruturas maiores, enquanto ainda mantém as estruturas flexíveis e eficientes. Ex.: Proxy, adpter.

**Padrões comportamentais** cuidam da comunicação eficiente e da assinalação de responsabilidades entre objetos. Ex.: Command, mediator.

Fonte: https://refactoring.guru/pt-br/design-patterns

