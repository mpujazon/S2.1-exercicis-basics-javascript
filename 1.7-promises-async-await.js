// Nivell 1
/*
    Exercici 1
    Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i
    que retorni la cadena de text 'Hola, món'.    
*/
const promise1 = new Promise(( resolve, reject )=>{
    setTimeout(()=>{
        resolve("Hola, món")
    }, 2000);
});
/*
    Exercici 2
    Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior.
    Crea un .then que imprimeixi el resultat a la consola.
*/
promise1.then((value)=>{
    console.log(value);
});
/*
    Exercici 3
    Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input
    és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
*/
let input = "Hola";
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        input === "Hola"? resolve("Success!") : reject("Rejected!");
    }, 2000);
});
/*
    Exercici 4
    Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar
    el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
*/
const asyncFunction = async () => {
    await promise1.then((value)=>{
        console.log(value);
    });
    console.log("Awaited successfully");
};

// Nivell 2
/*
    Exercici 5
    Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible
    error utilitzant un bloc try/catch.
*/
const modifiedAsyncFunction = async () => {
    try{
        const result = await promise1;
        console.log(result);
        console.log("Awaited successfully");
    }catch(error){
        console.error(error);
    }
};

// Nivell 3
/*
    Exercici 6
    Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza 
    Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
*/
const promise3 = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve("Resolved after 2 seconds.")
    },2000);
});

const promise4 = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve("Resolved after 3 seconds.")
    },3000);
});

Promise.all([promise3, promise4])
    .then((values)=>{console.log(values)});
