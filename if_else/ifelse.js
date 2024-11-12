//Opgave 1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

//Opgave 2
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}


//Opgave 3
function checkVowelConsonant(char){
    if(["a","e","i","o","u"].includes(char.toLocaleLowerCase())){
        console.log("Vowel");
    }else{
        console.log("Consonant");
    }
}

//Opgave 4
function classifyGrade(score){
    if (score>=90){
        console.log("A");
    }else if (score>=90){
        console.log("B");
    }else if (score>=70){
        console.log("C");
    }else if (score>=60){
        console.log("D");
    }else{
        console.log("F");
    }
}

//Opgave 5
function checkDivisibility(num){
    if (num % 5 === 0 && num % 10 === 0){
        console.log("Divisible by 5 and 10");
    }else{
        console.log("Not Divisible by 5 and 10");
    }
}

//Opgave 6
function checkTemperature(temp){
    if (temp > 30){
        console.log("Hot");
    }else if (temp >= 15){
        console.log("Warm");
    }else {
        console.log("Cold");
    }
}

//Opgave 7
function checkCase(char){
    if (char === char.toUpperCase()){
        console.log("Uppercase");
    }else{
        console.log("Lowercase");
    }
}

//Opgave 8
function checkLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        console.log("Leap Year");
    }else{
        console.log("Not a Leap Year");
    }
}

//Opgave 9
function checkTeenager(age){
    if (age>=13 && age<=19){
        console.log("Teenager");
    }else{
        console.log("Not a Teenager");
    }
}

//Opgave 10
function login(username, password){
    if(username === "admin" && password === "password123"){
        console.log("Access Granted");
    }else{
        console.log("Access Denied");
    }
}

checkEvenOdd(4);
checkNumber(-10);
checkVowelConsonant("a");
classifyGrade(85);
checkDivisibility(20);
checkTemperature(25);
checkCase("A");
checkLeapYear(2024);
checkTeenager(16);
login("admin","password123");