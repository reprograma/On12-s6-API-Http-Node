# On11-TodasEmTech-s6-Introducao-Node

Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

Aluna: Dannyeli Cristina

## Para o lar

Abra o PullRequest Respondendo as seguintes questões:

### 1) Qual a relação entre os métodos HTTP e o CRUD?

> O `HTTP` é um protocolo que permite transmitir documentos. Se conecta com navegadores e servidores web,também podendo ser
> utilizado para outras finalidades.
> Para sua total fucionalidade o `HTTP` define um conjunto de métodos de requisição: `POST, GET, PUT, PATCH e DELETE`. Esses métodos correspondem às operações
> de: Creat (inserção), Read (consulta), Update (atualização) e Delete (exclusão), mais conhecidos como `"CRUD"`.

### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

> O `PUT` é utilizado com frequência para criar ou atualizar novos recursos de dados.

#### Exemplo 01, <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT">By MDN contributors</a>

#### Solicitação

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16
```

#### Resposta

Se o recurso de destino não tem uma representação atual e a requisição PUT foi criada com sucesso, então o servidor original deve informar o agente de usuário enviando uma resposta 201 (Created).

```
HTTP/1.1 201 Created
Content-Location: /new.html
```

Se o recurso de destino tem uma representação atual e essa representação é modificada com sucesso de acordo com o estado de representação em anexo, então o servidor original deve enviar também uma resposta 200 (OK) or a 204 (No Content) para indicar a conclusão da requisição.

```
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

> Diferente do `PUT`, a solicitação `PATCH` só contém as mudanças parciais no recurso, não nele por completo.

#### Exemplo 02, <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PATCH">By MDN contributors</a>

#### Requisição

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100
```

#### Resposta

Uma resposta sucedida é indicada pelo status de resposta 204, visto que a resposta não carrega um corpo de mensagem.

```
HTTP/1.1 204 No Content
Content-Location: /arquivo.txt
ETag: "e0023aa4f"
```

### 3) Assim como na aula, apresente os dados dos JSONs no console

> No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"`

```js
let color = obj[0];
for (const prop in color) {
  console.log(` ${prop} - rgb (${color[prop]})`);
}
```

> No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console

```js
let todosEstados = data[0];
let estados = todosEstados.estados;

estados.forEach((estado) => {
  console.log(`ESTADO: ${estado.nome}/${estado.sigla}`);
  estado.cidades.forEach((cidade) => {
    console.log(`Cidade - ${cidade}`);
  });
});
```

> No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

```js
for (i = 0; i < obj.length; i++) {
  let filme = obj[i];

  console.log(`Filme: ${filme.Title} - Descrição: ${filme.Plot}`);
  let genero = [filme.Genre];
  let idioma = [filme.Language];
  console.log("Gênero: ");
  console.log(genero);
  console.log("Idioma: ");
  console.log(idioma);
}
```

### 4) Defina o conceito de idempotência e como uma API pode ser idempotente

> Uma `API` é considerada idempotente quando se aplicada a uma operação uma vez ou por várias vezes, elas têm o mesmo resultado. De acordo com o site MDN Web Docs "Somente o estado atual do back-end de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um `DELETE` vai provavelmente retornar um `200`, enquanto as chamadas sucessivas vão provavelmente retornar `404`. Outra implicação do `DELETE` ser idempotente é de que os desenvolvedores não deveriam implementar `APIs RESTful` com a funcionalidade de deleção de última entrada usando o método DELETE."
> São métodos idempotentes, o `GET`, `HEAD`, `PUT` e `DELETE`.

### 5) Cite alguns diferentes padrões de projetos de software

> Os padrões de projetos auxiliam na solução de problemas encontrados durante o desenvolvimento de um software. Seu uso contribui para uma boa padronização no código do projeto, já que foram testados e utilizados anteriormente. Os conceitos dessa prática ficaram mais conhecidos depois que quatro engenheiros de software, escreveram o livro `“Design Patterns: Elements of Reusable Object-Oriented Software”`. São eles: Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides. Os autores do livro ficaram conhecidos como `Gang of Four` (Gangue dos quatro) ou `“GoF”`.

Os padrões GoF, foram estruturados em 24 tipo que pertencem a três classificações:

| `Criacional`     | `Estrutural`       | `Comportamental`        |
| ---------------- | ------------------ | ----------------------- |
| Abstract Factory | Private class data | Chain of Responsibility |
| Object pool      | Adapter            | Command                 |
| Builder          | Bridge             | Interpreter             |
| Factory Method   | Composite          | Iterator                |
| Prototype        | Decorator          | Mediator                |
| Singleton        | Façade (ou Facade) | Memento                 |
|                  | Business Delegate  | Observer                |
|                  | Flyweight          | State                   |
|                  | Proxy              | Strategy                |
|                  |                    | Template Method         |
|                  |                    | Visitor                 |

Também existem outros padrões como o `GRASP` (General responsibility assignment software patterns), que consiste em diretrizes para uma construção bem sucedida de sistemas orientados a objetos.
Atribui responsabilidade a classes e objetos.

### Referências

**Using HTTP Methods for RESTful Services**, disponível em: https://www.restapitutorial.com/lessons/httpmethods.html Acesso: 17 de junho de 2021.

**PATCH**, disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PATCH Acesso: 17 de junho de 2021.

**PUT**, disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT Acesso: 17 de junho de 2021.

**Quais métodos HTTP correspondem a quais métodos CRUD?**, disponível em: https://qastack.com.br/programming/6203231/which-http-methods-match-up-to-which-crud-methods Acesso: 17 de junho de 2021.

**Idempotente**, disponível em: https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent Acesso: 17 de junho de 2021.

**Desenvolvimento com qualidade com GRASP**, disponível em: https://www.devmedia.com.br/desenvolvimento-com-qualidade-com-grasp/28704 Acesso: 17 de junho de 2021.

**Introdução: Design Pattern**, disponível em: https://www.devmedia.com.br/introducao-design-pattern/18838 Acesso: 17 de junho de 2021.
