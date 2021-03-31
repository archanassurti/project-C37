var database;
var contestant,quiz,question;
var gameState = 0;
var allContestentInfo;
var contestantCount = 0;

function setup(){
  createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    console.log("inside if ...")
    quiz.update(1);
    quiz.play();
  }
  if(gameState === 1){
    console.log("inside gameState 1 ...")
    clear();
    quiz.play();
}
  
}
