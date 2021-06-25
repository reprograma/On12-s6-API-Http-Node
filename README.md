
# On12-s6-API-Http-Node

Turma Online 12 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar

Abra o PullRequest Respondendo as seguintes questões:

1. Qual a relação entre os métodos HTTP e o CRUD?
### No HTTP
 **PUT** = atualizar ou alterar um recurso concreto com um URI concreto do recurso.  
 **POST** = crie um novo recurso na origem do URI fornecido.  
<p>Ou seja, edite uma postagem no blog:</p>

```
PUT: / blog / entrada / 1
 Crie um novo:
POST: / blog / entrada
 ```

**PUT** pode criar um recurso em algumas circunstâncias em que o URI do novo recurso é limpo antes da solicitação. O **POST** também pode ser usado para implementar vários outros casos de uso, que não são cobertos por outros (**GET, PUT, DELETE, HEAD, OPTIONS**)
O entendimento geral dos sistemas **CRUD é GET = request, POST = create, Put = update, DELETE = delete.**


2. Comente, com exemplos, a diferença entre o PUT e o PATCH.
Os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

```
Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}
```

O **PATCH** é usado para atualização parcial, quando você não quer mandar o payload completo.

```
Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}
```

3. Assim como na aula, apresente os dados dos JSONs no console

  - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

```
let cores = obj[0]

for (let resultado in cores) {
    console.log(`${resultado} - rgb (${cores[resultado]})`);
}

```

   - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidades, sem arrays aparentes no console

```
let estadosEcidades = data[0]
let estados = estadosEcidades.estados
estados.forEach(estado => {
  console.log(`Estado: ${estado.nome} ${estado.sigla}`)
  
  estado.cidades.forEach(cidade =>{
    console.log(cidade)
  })
  console.log('')
});
```

   - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

```
obj.forEach( obj => {
    console.log(`Título: ${obj.Title}`);
    console.log(`Plot: ${obj.Plot}`);
    console.log("Gênero: ", obj.Genre.split(","));
    console.log("Língua: ", obj.Language.split(","));
})
```

4. Defina o conceito de idempotência e como uma API pode ser idempotente

Um método **HTTP** é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Note que a idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.
Tem-se idempotência em uma **API** quando se chama a mesma funcionalidade com o mesmo valor e o resultado é exatamente o mesmo (essa é a definição matemática). Se o serviço altera o estado (por exemplo, escrevendo no banco de dados), então ele não é idempotente.


5. Cite alguns diferentes padrões de projetos de software

1- Padrões de Criação (Creational)

 - Abstract Factory - Um método Factory é um método que fabrica objetos de um tipo particular; Um objeto Factory é um objeto que encapsula  métodos Factory.
 - Builder - Separa a construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes representações.
 - Factory Method - É uma interface para instanciação de objetos que mantém isoladas as classes concretas usadas da requisição da criação destes objetos.
 - Prototype - O padrão Prototype fornece uma outra maneira de se construir objetos de tipos arbitrários.
 - Singleton. - Garante que para uma classe específica só possa existir uma única instância, a qual é acessível de forma global e uniforme.

2- Padrões de Estrutura (Structural)
- Adapter - Permite que dois objetos se comuniquem mesmo que tenham interfaces incompatíveis.
- Bridge - Desacopla a interface da implementação ; Ocultação de detalhes de implementação dos clientes.
- Composite - lida com uma estrutura de elementos agrupada hierarquicamente (não como meras coleções).
- Decorator - Atribui responsabilidade adicionais a um objeto dinamicamente. O Decorator fornece uma alternativa flexível a subclasses para a extensão da funcionalidade.
- Facade - Interface unificada para um subsistema ; Torna o subsistema mais fácil de usar.
- Flyweight - Usa compartilhamento para dar suporte a vários objetos de forma eficiente.
- Proxy - Fornece um objeto representante ou procurador de outro objeto para controlar o acesso ao mesmo.
     
    
3- Padrões de Comportamento (Behavioral)
- Chain of Responsability - Evita dependência do remetente(cliente) de uma requisição ao seu destinatário , dando a oportunidade de mais de objeto tratar a requisição.
- Command - Associa uma ação a diferentes objetos através de uma interface conhecida.
- Interpreter - Usado para ajudar uma aplicação a entender uma declaração de linguagem natural e executar a funcionalidade da declaração.
- Iterator - Provê uma forma de percorrermos os elementos de uma coleção sem violar o seu encapsulamento.
- Mediator - Cria um objeto que age como um  mediador controlando a interação entre um conjunto de objetos.
- Memento - Torna possível salvar o estado de um objeto de modo que o mesmo possa ser restaurado.
