function loadQs() {
for (i = 0; i < questionsjson.Questions.length; i++) {
    
  questions[i] = Question; // instantiate the question
    
    questions[i].q = questionsjson.Questions[i].Question; //Set the question
    console.log(questions[i].q); //log that
    console.log(questionsjson.Questions[i].Answers[1]);
  console.log("hi");
    // for(j=0; j < questionsjson.Questions[i].Answers.length; j++) {
    //   console.log("hola");
    //   questions[i].a[j] = questionsjson.Questions[i].Answers[j];
    //   // console.log(questions[i].a[j]); //log that
    // }
    questions[i].a0 = questionsjson.Questions[i].Answers[0];
    questions[i].a1 = questionsjson.Questions[i].Answers[1];
    questions[i].a2 = questionsjson.Questions[i].Answers[2];
    questions[i].a3 = questionsjson.Questions[i].Answers[3];
    // questions[i].setQ();
    // console.log(questions[i].a[1]);
    
    
    
    // questions[i].q = questionsjson.Questions[i].Question;
    // questions[i].setQ(questionsjson.Questions[i].Question, questionsjson.Questions[i].Answers[0],questionsjson.Questions[i].Answers[1],questionsjson.Questions[i].Answers[2],questionsjson.Questions[i].Answers[3]               );
  console.log("hi");
}

} 