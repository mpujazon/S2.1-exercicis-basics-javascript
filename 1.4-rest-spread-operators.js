// Nivell 1
/*
    Exercici 1
    Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador
    spread per a crear una tercera array que contingui tots els elements de array1 i array2.
*/
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [...array1, ...array2];

/*
    Exercici 2
    Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador
    rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
*/
const sum = (...number) =>{
    let sum = 0;
    number.forEach(number => {
        sum += number; 
    });
}

// Nivell 2
/*
    Exercici 3
    Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte,
    'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una
    propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
*/

let object1 = {
    name: "Miguel",
    surname: "Pujazón",
    age: 25
};
let object2 = {
    ...object1,
    surname: "Pujazón Cárdenas"
}
console.log(object1,object2);

/*
    Exercici 4
    Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i
    l'operador rest per a assignar els primers dos elements a variables, i després assignar
    la resta dels elements a una tercera variable.
*/
let array = ["Miguel", "Pujazón","IT Academy", "React", "GSAP"];
[name, surname, ...info] = array;

// Nivell 3
/*
    Exercici 5
    Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array
    amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
*/
const newFunc = (a, b, c) => {
    console.log(`a:${a}, b:${b}, c:${c}`)
}
let newArray = ["Hola", "Hello", "Ciao"];
newFunc(...newArray);

/*
    Exercici 6
    Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza
    l'operador spread per a fusionar aquests dos objectes en un de nou.
*/

let object3 = {
    name: "Miguel",
    surname: "Pujazón",
    age: 25
};

let object4 = {
    interestedIn: "React",
    favoriteLibrary: "GSAP",
    experience: "5 months"
};

let object5 = {...object3, ...object4};