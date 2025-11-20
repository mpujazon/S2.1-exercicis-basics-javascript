// Nivell 1
/*
    Exercici 1
    forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la
    consola: let noms = ['Anna', 'Bernat', 'Clara'];
*/
let names = ['Anna', 'Bernat', 'Clara'];
names.forEach(name => {console.log(name);
});

/*
    Exercici 2
    for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom
    a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
*/
for (const name of names){
    console.log(name);   
}

/*
    Exercici 3
    filter: Teniu una array de números. Utilitza filter per a crear una nova array que
    només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
*/
let numbers = [1, 2, 3, 4, 5, 6];
let filteredNumbers = numbers.filter(num => num%2===0);

// Nivell 2
/*
    Exercici 4
    for-in: Teniu un objecte amb parells clau-valor: 
    let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
    Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
*/
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
for(const property in obj){
    console.log(`${property}: ${obj[property]}`);   
}

/*
    Exercici 5
    for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la
    consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
*/
for(const number of numbers){
    console.log(number);
    if(number === 5) { break };   
}

/*
    Exercici 6
    for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva
    posició (index): let noms = ['Anna', 'Bernat', 'Clara'].
    */
let index = 0;
for(const name of names){
    console.log(`${index}: ${name}`);
    index++;
}