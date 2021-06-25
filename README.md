# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O método HTTP é um método de requisição que indica a ação que vai ser executada para um recurso, esse protocolo é baseado em requisição e resposta entre cliente e servidor. Devemos sempre respeitas os verbos HTTP que são:
**GET, POST, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH**

Já o CRUD são as 4 operações básicas usadas em banco de dados relacionais fornecidas aos utilizadores do sistema:
**Create**	Criar ou adicionar novas entradas
**Read** Ler, recuperar ou ver entradas existentes
**Update** Atualizar ou editar entradas existentes
**Delete** Remover entradas existentes

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
**PUT** - Substitui todos os atuais dados do recurso de destino pelos dados passados na requisição.
**PATCH** - Aplica modificações parciais em um recurso (é possível modificar apenas uma parte do recurso).

```
obj.patch('/user/1', {
    telefone: '88 8888-8888'
})
```

```
obj.put('/user/1', {
    nome: 'Mariana Ferreira de Andrade',
    email: 'andrade.marianaferreira@gmail.com',
    telefone:'88 8888-8888'
})
```

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
Idenpotência é quando uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito, deixando o servidor no mesmo estado. Ou seja, não deveria possuir nenhum efeito colateral (exceto para manter estatísticas).

O GET, HEAD, PUT, e DELETE são métodos idempotentes,já o POST não é. Todos os métodos **seguros** também são idempotentes.

5) Cite alguns diferentes padrões de projetos de software
**Padrões de Criação** - Abstract Factory, Factory Method, Singleton, Builder e Prototype.
**Padrões Estruturais** - Proxy, Adapter, Facade, Decorator, Bridge, Composite e Flyweight.
**Padrões Comportamentais** - Strategy, Observer, Template Method, Visitor, Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento e State.
