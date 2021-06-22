# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

_1_) Qual a relação entre os métodos HTTP e o CRUD?

O método HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. E são eles:

**GET** : solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
**HEAD**: solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.
**POST**: utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
**PUT**: substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
**DELETE**: remove um recurso específico.
**CONNECT**: estabelece um túnel para o servidor identificado pelo recurso de destino.
**OPTIONS**: é usado para descrever as opções de comunicação com o recurso de destino.
**TRACE**: executa um teste de chamada loop-back junto com o caminho para o recurso de destino.
**PATCH**: é utilizado para aplicar modificações parciais em um recurso.

CRUD significa C: create, R: read, U: update, D: delete e são 4 operações básicas usadas em banco de dados.

_2_) Comente, com exemplos, a diferença entre o PUT e o PATCH.
Put e Patch são utilizados quando necessitamos requisitar alguma alteração de um dado, porém ao utilizarmos o put fica legível que a alteração do dado será com referência a entidade completa.
Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

Já o Patch é usado para atualização parcial, quando você não quer mandar o payload completo.
Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}

_3_) Assim como na aula, apresente os dados dos JSONs no console:

    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

    let resultado = obj[0];
    for (let prop in resultado) {
        console.log("Nomes da cor: " + prop + " - rgb " + "(" + resultado[prop] + ")");
    }

    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console.
    
    estados.forEach(estado => { 
        console.log("Nome do estado: " + estado.nome + " Sigla: " +  estado.sigla + " Cidades: ") 
        estado.cidades.forEach(cidade => {
            console.log(cidade)
        })
        console.log(" ")
    });

    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

    obj.forEach(filme => {
        console.log(`Titulo: ${filme.Title}`)
        console.log(`Sinopse: ${filme.Plot}`)
        console.log("Gênero: ", filme.Genre.split(","));
        console.log("Língua: ", filme.Language.split(","),"\n");
    });


_4_) Defina o conceito de idempotência e como uma API pode ser idempotente.

Idempotência é a propriedade de certas operações em matemática e ciência da computação por meio das quais podem ser aplicadas várias vezes sem alterar o resultado além da aplicação inicial.
Como por exemplo: 5869 * 0 = 0 / 5869 * 1 = 5869

Através de alguns métodos de requisição como get, head, options que não alteram o estado do servidor(executando uma operação de leitura), pois eles retornam a mesma resposta e o estado da aplicação, por isso uma API pode ser idempotente.

__5_) Cite alguns diferentes padrões de projetos de software.

* Layers (Camadas);
* Decorador;
* Peer-to-Peer (P2P);


**Referências**
Métodos de requisição HTTP [Fonte: Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
Put e Patch [Fonte: Stackoverflow](https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch)
For...in [Fonte: Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)
O que é idempotência e o que é método idempotente no HTTP [Fonte: Youtube](https://www.youtube.com/watch?v=-50uDb_hExw)


