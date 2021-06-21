# Workshop Back end - Reprograma

## Exercício: On12-TodasEmTech-s6-Introducao-Node

### Professora: Paula Allemand

### Aluna: Jezielle Cunha

Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
_Abra o PullRequest Respondendo as seguintes questões:_

_**1)** Qual a relação entre os métodos HTTP e o CRUD?_

​	Segundo publicação no site MDN Web Docs, O protocolo HTTP define um conjunto de **métodos de requisição** responsáveis por indicar a ação a ser executada para um dado recurso. Também chamados de Verbos HTTP, são: 

**Get**: Requisições que utilizam esse método retornam apenas dados.

**Head:** Este método solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

**Post:** Este método submete uma entidade a um recurso específico, causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

**Put:** Este verbo substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

**Delete:** Verbo que remove um recurso específico.

**Connect:** O método que estabelece um túnel para o servidor identificado pelo recurso de destino.

**Options:** Este verbo é usado para descrever as opções de comunicação com o recurso de destino.

**Trace:** Método que executa um teste de chamada *loop-back* junto com o caminho para o recurso de destino.

**Patch:** Este método é utilizado para aplicar modificações parciais em um recurso.

​	Enquanto o HTTP trafega ente o Frontend e o Backend, o CRUD trafega entre o Backend e o Banco de dados. CRUD é um acrónimo na língua inglesa (Create, Read, Updata, Delete), que são as quatro operações básicas relacionada a base de dados.

**Create** - Criação, relaciona-se ao método Post do HTTP;

**Read** - Consulta,  relaciona-se ao verbo Get do HTTP;

**Updata** - Atualização, relaciona-se aos verbos PUT e Patch do HTTP;

**Delete** - Destruição, relaciona-se ao método Delete do HTTP.



_**2)** Comente, com exemplos, a diferença entre o PUT e o PATCH._

Tanto o Put, quanto o Patch promovem atualização no conteúdo. Enquanto o Put substitui toda a informação do recurso pela informação da requisição, o Patch realiza a alteração parcial do recurso, atualiza apenas a modificação.



_**3)** Assim como na aula, apresente os dados dos JSONs no console._
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

    let cores = obj[0]

    for (var prop in cores) {

        console.log("Nomes da cor: " + prop + " - rgb " + "(" + cores[prop] + ")");
      }
    
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    
    estados.forEach(estado => {
      console.log(`Estado: ${estado.nome}, Sigla: ${estado.sigla}, Cidades:`);
      estado.cidades.forEach(cidade => {
        console.log(cidade);
      })
      console.log("")
    })
    
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
    
    obj.forEach( filme => {
        console.log(`Título: ${filme.Title}`);
        console.log(`Sinopse: ${filme.Plot}`);
        console.log("Gênero: ", filme.Genre.split(","));
        console.log("Língua: ", filme.Language.split(","),"\n");
        
    })




_**4)** Defina o conceito de idempotência e como uma API pode ser idempotente._

​	Tanto na matemática, quanto na ciência da computação, a idempotência acontece quando se chama a mesma função com o mesmo valor e o resultado é exatamente o mesmo, sendo executada uma ou inúmeras vezes. 

​	Quando se trata de idempotência em API's REST (Representational State Transfer - conjunto de princípios arquiteturais padronizados para a comunicação entre cliente e servidor.) incluí-se os seguintes verbos: **Get, Put, Delete, Head, Options**. O que eles têm em comum é o fato de retornarem a mesma resposta e o estado da aplicação não será alterado da primeira requisição a última requisição idêntica.

**obs.:** Quando há um falha numa requisição de verbo idempotente, não haverá problema em fazer uma nova requisição idêntica até que a operação seja bem sucedida, pois isso não irá alterar nada no servidor. Porém, quando o verbo da requisição não é idempotente, o Post por exemplo, ao fazer uma nova requisição, há o risco de duplicar o recurso exigindo que exista uma validação no backend para evitar o problema.

_"A idempotência é frequentemente uma propriedade útil na construção de sistemas robustos.  Por exemplo, se houver o risco de receber uma mensagem duplicada de terceiros, é útil que o manipulador de mensagens aja como uma operação idempotente para que o efeito da mensagem ocorra apenas uma vez.  O Idempotence facilita muito a construção de um serviço da Web resiliente a erros de comunicação. "_



_**5)** Cite alguns diferentes padrões de projetos de software._

​	Em Engenharia de Software, um padrão de desenho ou padrão de projeto (Design Pattern) é uma solução geral para um problema que ocorre com frequência dentro de um determinado contexto no projeto de software. São descrições prontas que dão soluções a problemas repetitivos encontrados no desenvolvimento ou manutenção de software. 

​	O livro **“Design Patterns: Elements of Reusable Object-Oriented Software”**, escrito por *Erich Gamma*, *Richard Helm*, *Ralph Johnson* e *John Vlissides* e lançado em 1994 abordou 23 padrões de projetos. Devido a relevância desta obra, os quatro autores passaram a ser chamados de Gang of Four (GoF) (gangue dos quatro) e os padrões que o livro trouxe, passaram a ser chamados de GoF Patterns (Padrões GoF) que foram divididos nas seguintes categorias: **Padrões de criação, Padrões estruturais, Padrões comportamentais**.

​	Padrões de projeto na perspectiva da arquitetura de software de um sistema consiste na definição dos 
componentes de software, suas propriedades externas, e seus relacionamentos com outros softwares. O termo também se refere à documentação da arquitetura de software do sistema e também pode ser chamado de padrões arquiteturais ou modelos arquiteturais. Os principais padrões arquiteturais são:

* Layers (Camadas);
* Client-server (Cliente-servidor);
* Model-view-controller (MVC);
* Microservices (Microsserviços);
* Pipes-and-filters (PF);
* Peer-to-Peer (P2P);
* Service-oriented architecture (SOA);
* Publish-Subscribe (Pub/Sub).









**REFERÊNCIAS**



**Métodos de requisição HTTP**, disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods  Acessado em: 14 de junho de 2021.

**O que é idempotência e porque devemos utilizar**, disponível em: https://medium.com/@lucasschwenke/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0 Acessado em: 14 de junho de 2021.

**O que é uma operação idempotente**, disponível em: https://www.docow.com/3941/o-que-e-uma-operacao-idempotente.html Acessado em: 14 de junho de 2021.

**Padrões de projeto: o que são e o que resolvem**, disponível em: https://www.treinaweb.com.br/blog/padroes-de-projeto-o-que-sao-e-o-que-resolvem  Acessado em: 15 de junho de 2021.

**Quais são os tipos de arquitetura de software e como escolher o melhor para o seu projeto**, disponível em: https://posdigital.pucpr.br/blog/tipos-de-arquitetura-de-software Acessado em: 15 de junho de 2021.



# O básico sobre objetos JavaScript -  https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics

# Trabalhando com objetos - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects





# Link aula 12-06-2021(6°semana):https://www.youtube.com/watch?v=xR21uOis-Gg   

# 2° parte da aula:<https://youtu.be/Be6s0SXsI80>



# Link aula 16-06-2021(6°semana):https://www.youtube.com/watch?v=WvH3Y6QEW8Q 