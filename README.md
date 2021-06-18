# On12-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS - Respostas do exercício- semana06
## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

**1)** Qual a relação entre os métodos HTTP e o CRUD?

Os termos são semelhantes, porém tem usos distintos, o HTTP interage com um sistema complexo, 
enquanto o CRUD manipula dados básicos em um repositório.

**2)** Comente, com exemplos, a diferença entre o PUT e o PATCH.

Suponha que tenhamos um recurso que contém o nome e o sobrenome de uma pessoa.
Se quisermos mudar o primeiro nome, enviaremos uma solicitação de atualização
{ "first": "Michael", "last": "Angelo" }
Aqui, embora estejamos apenas alterando o primeiro nome, com a solicitação PUT, 
temos que enviar os dois parâmetros, primeiro e último.
Em outras palavras, é obrigatório enviar todos os valores novamente, a carga útil completa.
Quando enviamos uma solicitação PATCH, no entanto, enviamos apenas os dados que queremos atualizar. 
Em outras palavras, enviamos apenas o primeiro nome para atualização, sem a necessidade de enviar o sobrenome.

**3)** Assim como na aula, apresente os dados dos JSONs no console 

    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

    ```
    let cores = obj[0]

    for (var prop in cores) {
        console.log("Nomes da cor: " + prop + " - rgb " + "(" + cores[prop] + ")");
      }
    ```

    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console

    ```
    let brasil = data[0]
    let estados = brasil.estados

    estados.forEach(estado => {
      console.log("Nome do estado: " + estado.nome + " Sigla: " +  estado.sigla + " Cidades: " )
  
    estado.cidades.forEach(cidade => {console.log(cidade)})
    console.log(" ")
    })
    ```

    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

    ```
    let filmes = obj

    filmes.forEach(filme => {
    console.log(" Titulo: " + filme.Title + " Plot: " + filme.Plot;
    console.log(" Genero: ", filme.Genre.split(","));
    console.log(" Lingua: ", filme.Language.split(","),"\n");
    });
    ```

**4)** Defina o conceito de idempotência e como uma API pode ser idempotente:

Um método HTTP idempotente é um método HTTP que pode ser chamado muitas vezes sem resultados diferentes. 
Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo. 
Essencialmente, significa que o resultado de uma solicitação executada com sucesso é 
independente do número de vezes que ela é executada. 

**5)** Cite alguns diferentes padrões de projetos de software:

Padrões de criação: FactoryMethod, Singleton, Abstract Factory, Builder e Prototype.
Padrões estruturais: Adapter, Decorator, Facade, Proxy e Composite.
Padrões Comportamentais: Mediator, Observer, Command, Strategy, TemplateMethod e Iterator.
