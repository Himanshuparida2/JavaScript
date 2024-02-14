// A: 80-100
// B: 70-79
// C: 60-69
// D: 50-59
// F: 0-49
let grade=prompt("Enter Your Marks");
if(80<=grade && grade<=100){
    console.log("You got A grade!!");
}
else if(70<=grade && grade<=79){
    console.log("You got B grade!!");
}
else if(60<=grade && grade<=69){
    console.log("You got C grade!!");
}
else if(50<=grade && grade<=59){
    console.log("You got D grade!!");
}
else{
    console.log("You got F grade!!");
}