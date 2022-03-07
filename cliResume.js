const inquirer = require('inquirer');
const cp = require('child_process')
function displayList(){
    inquirer
    .prompt([
      {
          type : "list",
          name : "Selection",
          choices : ["Introduction","About","Skills","Projects"],
    },
 
  ])
  .then(function(answer) {
      if(answer.selection=="Introduction"){
          console.log(`Hi!
          This is Garima Sharma`);
          displayNext()
      }
      else if(answer.selection=="About"){
        console.log(`I love exploring various technologies. I am upcoming tech intern at Wells Fargo (summers of 2022`);
        displayNext()
    }
      else if(answer.selection=="Skills"){
          console.log("Cyber Security, Machine Learning, Data Structure and Algorithms, Cloud Computing");
          displayNext()
      }
      else if(answer.selection=="Projects"){
          cp.execSync('start chrome https://github.com/GarimaSharma1402')
          displayNext()
      }   
     });
}
displayList()

function displayNext(){
    inquirer
    .prompt([
      {
          type : "list",
          name : 'Selection',
          choices : ["Go Back","Exit"],
    },
 
  ])
  .then(function(answer) {
      if(answer.selection=='Go Back'){
          displayList()
      }
      else if(answer.selection=='Exit'){
          console.log("Resume closed")
      }
      
     });

}
