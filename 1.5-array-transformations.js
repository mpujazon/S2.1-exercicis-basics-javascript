// Nivell 1
/*
    Exercici 1
    Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el
    quadrat de cada número.
*/
let numbersArray = [1,2,3,4];
let squareNumbersArray = numbersArray.map(number => {
    return Math.pow(number,2);
});

/*
    Exercici 2
    Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només
    contingui els números parells.
*/ 
let pairNumbers = numbersArray.filter(number=>{
    return number % 2 === 0;
});

/*
    Exercici 3
    Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a
    trobar el primer número que és major a 10.
*/
let numbersArray2 = [1,10,8,11];
let firstNumberOver10 = numbersArray2.find(number=>{
    return number > 10;
})

/*
    Exercici 4
    Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per
    a calcular la suma total dels números.
*/
let numbersArray3 = [13,7,8,21];
let sumNumbers = numbersArray3.reduce(
    (accumulator, currentValue) => currentValue + accumulator
);

//Nivell 2
/*
    Exercici 5
    Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una
    sola línia que faci el següent:
        - Filtra els nombres majors o iguals a 10.
        - Multiplica cada nombre filtrat per 2.
        - Calcula la suma dels nombres filtrats i multiplicats per 2.
        - La funció ha de retornar el resultat de la suma.
*/
let numbersArray4 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
const processNumbersArray = (array) => 
    array.filter((number)=>number>=10).map((number)=> number * 2).reduce((acc, cur)=>acc+cur);

console.log(processNumbersArray(numbersArray4));

// Nivell 3
/*
    Exercici 6
    Every / Some: Usa every i some per a determinar si tots o alguns dels elements de
    l'array [11, 12, 13, 14] són majors que 10, respectivament.
*/
let numbersArray5 = [11,12,13,14];
let allNumbersOver10 = numbersArray5.every((num)=>num>10);
let someNumberOver10 = numbersArray5.some((num)=> num > 10);
