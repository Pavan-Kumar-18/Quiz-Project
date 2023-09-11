console.log("connected")

const Questions = document.getElementById("Question")
const Choice = document.getElementById("choice")
const Nextbutton = document.getElementById("Next")

const questions = [
    {
      question: "What is the capital of France?",
      answers :[{text:"London", correct:false},
   {text:"Berlin", correct:false},
      {text:"Paris", correct:true},
      {text:"Madrid", correct:false},
       
    ]
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers :[{text:"Venus", correct:false},
      {text:"Mars", correct:true},
         {text:"Jupiter", correct:false},
         {text:"Saturn", correct:false},
          
       ],
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers :[{text:"Charles Dickens", correct:false},
      {text:" William Shakespeare", correct:true},
         {text:" Jane Austen", correct:false},
         {text:"Mark Twain", correct:false},
          
       ],
    },
    {
      question: "What is the largest mammal in the world?",
      answers :[{text:"Elephant", correct:false},
      {text:"Blue Whale", correct:true},
         {text:"  Giraffe", correct:false},
         {text:"Hippopotamus", correct:false},
          
       ],
    },
    
    {
      question: "Which element has the chemical symbol 'H'?",
      answers :[{text:"Hydrogen", correct:true},
      {text:"Helium", correct:false},
         {text:"Oxygen", correct:false},
         {text:"Carbon", correct:false},
          
       ],
    }
  ];

  let position = 0;
  let Score = 0;

  function Startquiz(){
    position=0;
    Score=0;
    Nextbutton.innerHTML="Next";
    showquestions()
  }

  function showquestions(){
    resetState()
    const Currentquestion = questions[position]
    const questionNo = position + 1;
    Questions.innerHTML = questionNo+"."+Currentquestion.question
    

   Currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
  button.innerHTML = answer.text
  button.classList.add("btn")
  Choice.appendChild(button)
  if(answer.correct){
    button.dataset.correct = answer.correct
  }
button.addEventListener("click",Selectanswer)
   })

    

  }

  showquestions()

  function Selectanswer(e){
    const selectbtn = e.target
    const iscorrect = selectbtn.dataset.correct ==="true"
    if(iscorrect){
        selectbtn.classList.add("correct")
        Score++
    }else{
        selectbtn.classList.add("incorrect")
    }
   Array.from(Choice.children).forEach(button =>{
    if (button.dataset.correct==="true"){
        button.classList.add("correct")
    }
    button.disabled =true
   })
   Nextbutton.style.display ="block"

  }

function showScore(){
    resetState();
    Questions.innerHTML =`Your Score is ${Score} out of ${questions.length}!`
    Nextbutton.innerHTML ="play Again"
    Nextbutton.style.display = "block"
}

  function handelnextbutton(){
    position++
    if(position < questions.length){
        showquestions()
    }else{
        showScore()
    }
  }

  Nextbutton.addEventListener("click",()=>{
    if(position < questions.length){
        handelnextbutton()
    }else{
        Startquiz()
    }

  })
 function resetState(){
    Nextbutton.style.display="none"
    while(Choice.firstChild){
        Choice.removeChild(Choice.firstChild)
    }
 }





















//   

  
 