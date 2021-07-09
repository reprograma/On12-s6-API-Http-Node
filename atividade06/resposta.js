/*  const obj = require('./para_casa/Data/colors-rgb')

for( let i = 0; i < obj.length ; i++ ){

    
    let result = obj[i]

    for (var key in result){
   
        console.log( key + " - rgb (" + result[key]+")" );

    }

} 
 */
//const obj = require("./para_casa/Data/filmes")

//dictionary = {0: {object}, 1:{object}, 2:{object}}
//https://qastack.com.br/programming/34913675/how-to-iterate-keys-values-in-javascript
//https://pt.stackoverflow.com/questions/173293/como-percorrer-um-objeto-em-javascript
    

/* const data = require('./para_casa/Data/estados-cidades.js')

let brasil = data[0]
let estados = brasil.estados
      
estados.forEach(estados => {
   console.log("Nome do estado:" + estado.nome + "Sigla:" + estado.sigla + "Cidades:")

estado.cidades.forEach(cidades => {
    console.log(cidades)

})
console.log(" ")
});

 */


/* Object.keys(data).forEach(function(){
    console.log(estados + " = " + data[estados]);
   }); */

   /* for(let property in data){
       console.log(property + "=" + data[property]);
   }
  */

   //const obj = require('./para_casa/Data/filmes.js')
   
  /*  let filmes = obj


   filmes.forEach(filme => {
   
   
       console.log(" Titulo : " + filme.Title + " Plot : " + filme.Plot )
       console.log("Gênero: ", filme.Genre.split(","));
       console.log("Língua: ", filme.Language.split(","),"\n");
 */




  /*  /*  let genre = []
   let language = []
  for(let i = 0; i < obj.length; i++){
      let film = obj[i]
      console.log('Title:', filme.Title)
      console.log('Plot:', filme.Plot) 
      let genero = [filme.Genre]
      let language = [filme.Language]
      console.log(genero)
      console.log(language)
  } */
 
  


  /* for(let i=0;i<data.length;i++){
    let brasil=data[i]
  
    
    let estados=brasil.estados
    for(let i=0;i<estados.length;i++){
        let type=estados[i]
  
        let cidades=type.cidades
        for(let i=0;i<cidades.length;i++){
            let city=cidades[i]
      
  
        console.log(`Sigla: ${type.sigla}, Nome do estado: ${type.nome}, Cidades: ${city} \n `)
        
       }
       
      }
  
    
    } */



/* const data = require('./para_casa/Data/estados-cidades.js')

let brasil = data[0]
let estados = brasil.estados
          
   estados.forEach(estado => {
  console.log(`Estado: ${estado.nome}, Sigla: ${estado.sigla}, Cidades:`);
  estado.cidades.forEach(cidade => {
    console.log(cidade);
  })
  console.log("")
})  */