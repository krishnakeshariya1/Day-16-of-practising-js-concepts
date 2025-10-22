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

// find the first object where age is grater than 20
const user = [
    {name: "rani" , age: 20 },
    {name: "kirti" , age: 19 },
    {name: "raj" , age: 21 },
    {name: "rahul" , age: 22 },
];
let age = user.find(val => val.age > 20);
console.log(`The person who has age greater than 20 is : ${JSON.stringify(age)}`);

// find the first number that is divisble by 2 and 3 both, i'm using the the above array (number).
let ans = numbers.find(val => val%2 === 0 && val%3 === 0);
console.log(ans);

// find the index of the first word containing "a" in the following array 
let type = ["sky", "flower","rain","forest"];
let wordWithA = type.find(val => val.includes("a"));
console.log(`The word that contain a is :- "${wordWithA}"`);

//find the first product with price less than 100 
const product = [
    {name:"pen" , price: 220},
    {name:"paper" , price: 70},
    {name:"Book", price: 900},
    {name:"pencil", price: 90},
];
let priceLessThan100 = product.find(val => val.price < 100);
console.log(priceLessThan100)

//  find the  index of first person with name length >4 , i use above array (user);
let length = user.findIndex( val => val.name.length > 4);

// find the first number which is perfect square
let nums = [3,8,9,12,13,16,20];
let perfectSquare = nums.find(val => Math.sqrt(val) % 1 === 0);
console.log(`the perfect square is ${perfectSquare}`);

// find the first string that start with B
const names = ["samarth","kirti","bhawna","krishna"];
const firstName = names.find(word => word.startsWith("b"));
console.log(firstName);

// find the index of the first number with is odd and greater than 30
let mixNum = [12,25,40,33,45];
let greaterOdd = mixNum.findIndex(val => val%2 !== 0 && val > 30);
console.log(greaterOdd);