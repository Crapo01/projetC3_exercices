main();
function main() {
alert("Exercice 1 - Calcul de la somme d'un tableau");

let array=[2,4,6,8,10];
let result = 0
function adding(num){
    array.forEach(element => {
        result+=element;        
    });
}
adding(array);

console.log(`La somme des elements est: ${result}`)

// TEST AVEC METHODE MAP ####################################
result = 0
array.map((num)=> result+=num);
console.log(`La somme des elements avec map est: ${result}`)
}