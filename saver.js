
var obj;
var i = 0;
var downloaded = false;
	var tempobj = {
  // "Question": Q.value(),
    "Answers" : [
    // A0().value(), 
      // A1().value(), 
      // A2().value(), 
      // A3().value(), 
    ]
  }
  
function setup() {
	frameRate(20);
  createCanvas(1,1);
  
  var inp0 = createInput('');
  inp0.position(10,10);
  var inp1 = createInput('');
  inp1.position(10,40);
  var inp2 = createInput('');
  inp2.position(10,70);
  var inp3 = createInput('');
  inp3.position(10,100);
  var inp4 = createInput('');
  inp4.position(10,130);
  inp0.input(Q);
  inp1.input(A0);
  inp2.input(A1);
  inp3.input(A2);
  inp4.input(A3);
	button = createButton('Submit Question');
  button.position(20, 160);
  button.mousePressed(saveQ);
	
	dbutton = createButton('Download');
	dbutton.position(20, 190);
	dbutton.mousePressed(download);
  
  obj = {"Name":"TestQuiz","Questions":[
  
  ]
        }
}

function saveQ(){

  obj.Questions[i] = tempobj;
  i++;
  // Q().value;
}


function Q() {
  // console.log('you are typing: ', this.value());
  tempobj.Question = this.value();
}
function A0() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[0] = this.value();
}
function A1() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[1] = this.value();
}
function A2() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[2] = this.value();
}
function A3() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[3] = this.value();
}

function draw() { 
  // framerate(20);
  background(220);
  // print(obj);
}

function download() {
  
  
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",     dataStr     );
dlAnchorElem.setAttribute("download", obj.Name + ".json");
dlAnchorElem.click();
  
//   var fs = require("fs");
// fs.writeFile("./object.json", JSON.stringify(obj), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File has been created");
// });
  
}