var readlineSync = require('readline-sync');

console.log(" _____________________________________________");
console.log("|                                             |");
console.log("|                MARVEL QUIZ                  |");
console.log("|_____________________________________________|");

var quiz = [
  {question : "What is the name of Thor’s hammer? ",
  options : " A. Vanir\n B. Mjolnir\n C. Aesir\n D. Norn",answer : "B"},

  {question : "What is Captain America’s shield made of? ",
  options : " A. Adamantium\n B. Vibranium\n C. Promethium\n D. Carbonadium",
  answer : "B"},

  {question : "What is the real name of the Black Panther? ",
  options : " A. T'Challa\n B. M'baku\n C. N'Jadaka\n D. N'Jobu",
  answer : "A"},

  {question : "About which city do Hawkeye and Black Widow often reminisce? ",
  options : " A. Budapest\n B. Prague\n C. Istanbul\n D. Sokovia",
  answer : "A"},

  {question : "Who is Black Panther’s sister? ",
  options : " A. Shuri\n B. Nakia\n C. Ramonda\n D. Okoye",
  answer : "A"},

  {question : "What type of doctor is Stephen Strange? ",
  options : " A. Neurosurgeon\n B. Cardiothoracic Surgeon\n C. Trauma Surgeon\n D. Plastic Surgeon",
  answer : "A"},
];

var q_no = 0;
var score = 0;

function checkAnswer(question, options, answer){
  var userAnswer = readlineSync.question("\n" + question + "\n" + options + "\n ");

  if (userAnswer === answer){
    console.log("\nYay!, your answer is correct.");
    score++;
  }else{
    console.log("\nOops!, your answer is wrong. ");
  }
  console.log("Your Score is ", score);
}

var choice = readlineSync.question(" To exit quiz press 'e'. Pres any key to take part in quiz (followed by return): ");
while(choice != 'e'){
  currentQuestion = quiz[q_no];
  checkAnswer(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  var choice = readlineSync.question("\n To exit quiz press 'e'. Pres any key to take part in quiz (followed by return): ");
  q_no++;
  if(q_no === quiz.length){
    console.log("\nYou've reached to the end of the quiz.");
    break;
  }
  
}
console.log("\nYour Score is ", score);
console.log("\nThank you for playing.");