
# Semana 6 On12
---
1. ##  Qual a relação entre os métodos HTTP e o CRUD?

#### cada função CRUD vai utilizar um metodo HTTP diferente

---
2) ##  Comente, com exemplos, a diferença entre o PUT e o PATCH.

### PUT
#### Faz uma alteraçao completa

ex:
```JAVASCRIPT
 (/filme/4380)
```
result: 
```JAVASCRIPT
{'id': 4380, 'name': 'ESTRELAS ALEN DO TEMPO', 'categoria': 'DRAMA', 'duracao': '2H 7M'}
```


### PATCH
#### Faz uma alteração parcial

ex:
```JAVASCRIPT
 (/filme/4380)
```
result: 
```JAVASCRIPT
{'name': 'ESTRELAS ALEN DO TEMPO'}
```
---
3) ##  Assim como na aula, apresente os dados dos JSONs no console

    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"

        * Aprendi o `forIn`, que define os elementos dento do 'obj' como um grande `array` e depois decompõe ele em elementos menores buscando dentro de cada um deles o seu complemento (que esta dempois dos `:`).

        ```javascript
            for (let cor in obj[0]) {
                console.log(`${cor} - rgb (${obj[0][cor]})`);   
            }
        ```
    
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console

        * aprendi com `forEach` a decompor e buscar cada um dos elementos de um `array`.

    ```javascript

            let pais = data[0];
            let stds = pais.estados;
            stds.forEach(stds => {
                console.log(`${stds.nome} - ${stds.sigla} :`);
                stds.cidades.forEach(cidade => {
                    console.log(cidade);
                })
            })
    ```

    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
    
        * nesse codigo testei meu dominio do `for` e descobri que não da pra `interpolar` tudo.

        ![Alt Text](https://media.giphy.com/media/3cVrr8HGrMGVoAGXdd/giphy.gif)

    ```javascript
            let Genre = [];
            let Language = [];

            for (let i = 0; i < obj.length; i++){
            let filme = obj[i];
            let genero = [filme.Genre];
            let language = [filme.Language];   
            console.log(`Titulo: ${filme.Title}`);
            console.log(`Plot: ${filme.Plot}`);
            console.log(`Genero: `, genero);
            console.log(`Linguagem : `, language);
            }
    ```



---
4) ## Defina o conceito de idempotência e como uma API pode ser idempotente

    - É a capacidade de alterar vatias vezer algo sem que o valor inicial seja alterado.
        * 124 x 1 = 124 - qualquer numero vezes 1 é ele mesmo.
        * 124 x 0 = 0   - qualquer numero vezes 0 é 0.
        
    - como não escontrei um artigo sobre o assunto posso deduzis que  uma API pode ser idempotente fazendo uso de verbos indepotentes.

   
---
5) ## Cite alguns diferentes padrões de projetos de software

    - ### Padrões de Criação
        * Ajuda a tornar o projeto independente, abstraindo ou adiando a criaçao do objeto.

    - ### Padrões estruturais
        * Se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores, por ter a capacidade de mudar a composição em tempo de execução, torna a composição dos objetos flexivel.

    - ### Padrões de comportamento

        * Como se preocupa com os algotitimos e atribuições entre objetos, não descreve apenas padrões de objetos ou de classes, descreve tambem os padrõe de comunicação entre objetos.


---
