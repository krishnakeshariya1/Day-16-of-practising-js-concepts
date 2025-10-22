// find the first number grater than 50 
let arr = [20,30,40,50,55,80,90];
let num = arr.find(val => val >50);

// find the first string with more than 5 characters 
let words = ["cat","dog","tiger","elephant","lion"];
let word = words.find(val => val.length > 5);
console.log(word);

// find the first even number in 
let numbers = [1,2,3,4,5,6,7];
let firstEvenNumber = numbers.find(val => val%2 === 0);
console.log(`the fist even number is :- ${firstEvenNumber}`); 