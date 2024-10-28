//Opgave 1
const fruits = ["Mango", "Banana", "Passionfruit", "Guava"];
console.log(fruits);

//Opgave 2
//Push er tilføjelse i arrayet.
fruits.push("Apple");
console.log(fruits);

//Opgave 3
//Pop er fjernelse i arrayet.
let removedfruit = fruits.pop("Guava");
console.log(removedfruit);

//Opgave 4
let numbers = [1,2,3,4,5];
console.log(numbers);

//Opgave 5
numbers[0] = 0;
console.log(numbers);

//Opgave 6
numbers.shift();
console.log(numbers);

//Opgave 7
const colors = ["blue", "yellow", "green", "red", "white", "grey", "black"];
//Dette er et for-each lykke.
for (const element of colors) {
    console.log(element);
}

//Opgave 8
let newnumbers = [4,3,5,1,2];
newnumbers.sort((a,b) => a-b);
console.log(newnumbers);

//Opgave 9
const countries = ["India", "Pakistan", "Bangladesh", "SriLanka", "Nepal", "Bhutan", "Afghanistan", "Maldives"]
countries[7] = "China";
console.log(countries);

//Opgave 10
countries[1] = "Maldives";
console.log(countries);

//Opgave 11
console.log(fruits.length);

//Opgave 12
const nytal = [10,11,12,13,14,15];
let sum = nytal.reduce((acc,current)=> acc+current,0);
nytal.push("Sum of array: " + sum);
console.log(nytal);

//Opgave 13
colors.reverse();
console.log(colors);

//Opgave 14
let blankArray = [];
blankArray.push(1);
blankArray.push(2);
blankArray.push(3);
blankArray.push(4);
blankArray.push(5);
console.log(blankArray);

//Opgave 15
let array = [1,2,3,4,5];
array.splice(2,1,10);
console.log(array);

//Opgave 16
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];
//Concat metoden har til hensigt om at samflette arrays.
let combinedArray = array1.concat(array2, array3);
console.log(combinedArray);

//Opgave 17
//Her ser vi, at indexOf fortæller om 3 er i indexen eller ej?
let index1 = numbers.indexOf(3);
console.log(index1);

let index2 = numbers.indexOf(6);
console.log(index2);
