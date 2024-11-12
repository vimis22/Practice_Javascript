//Opgave 1
let input1 = prompt("Please write a number: ");
println("You have inserted the number: " + input);
input1 = Number(input1);

function numberDefinition(input1){
    if(input % 2 == 0){
        console.log("The Number: " + input1 + " is Even");
    }else{
        console.log("The Number: " + input1 + " is Odd");
    }
}
numberDefinition(input1);

//Opgave 2
let input2 = prompt("Please write a number: ");
println("You have inserted the number: " + input2);
input2 = Number(input2);

function numberCategory(input2){
    if(input2 => 0){
        console.log("The Number " + input2 + " is positive");
    }else if (input2 <= 0){
        console.log("The Number " + input2 + " is negative");
    }
}

numberCategory(input2);

