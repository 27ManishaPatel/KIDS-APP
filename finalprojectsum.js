
//Addition
//Finding HTML elements by id
const ans1 = document.getElementById("answer1");
const ans2 = document.getElementById("answer2");
const ans3 = document.getElementById("answer3");
answer = 0;

function sum() {
  var  num1 = Math.floor(Math.random() * 11);         //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
  var  num2 = Math.floor(Math.random() * 11);         //Math.floor() can be used to return random integers means no decimals.
  var  noAnswer1 = Math.floor(Math.random() * 25);
  var  noAnswer2 = Math.floor(Math.random() * 25);
    answer = num1 + num2 ;       // Eqation of ADDITION.
document.getElementById("number1").innerHTML = num1;
document.getElementById("number2").innerHTML = num2;

const switchAnswer = [answer, noAnswer1, noAnswer2];  // Pick a three answers elements with arrays...
 for (i = switchAnswer.length - 1; i > 0; i--) {      // And swap it with each other.
 switchAnswer.sort(() => Math.random()-0.5)
 }
ans1.innerHTML = switchAnswer[0];                   //this code changes the content of its own element (using .innerHTML).
ans2.innerHTML = switchAnswer[1];    
ans3.innerHTML = switchAnswer[2];
}
//addEventListener() that fires when a user clicks a button:
ans1.addEventListener("click", function(){
    if(ans1.innerHTML == answer ) {                //if statement to specify a block of JavaScript code to be executed if a condition is true.
        sum();
    }else {                                        //else statement to specify a block of code to be executed if the condition is false.
        ans1.innerHTML = "X";
    }
});
ans2.addEventListener("click", function(){
    if(ans2.innerHTML == answer ) {
        sum();
   }else {
    ans2.innerHTML = "X";
    }
});
ans3.addEventListener("click", function(){
    if(ans3.innerHTML == answer ) { 
        sum();
    }else {
        ans3.innerHTML = "X"; 
    }
});
sum(); 


 

