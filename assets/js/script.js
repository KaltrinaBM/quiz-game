
let submit = document.getElementById("submit");
let question = document.getElementById("question");
let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let time_element = document.getElementById("timer");
let current_question=0;
let score=0;
let time;
const total_time = 30;
let sec = total_time;



/**timer*/

function timer(){
    time_element.innerHTML = sec;
    sec--;
    if(sec==0){
        sec = total_time;
        clearInterval(time);
        checkIfScore();
        current_question++;
        showQuestion();
    }    
}

function checkIfScore(){
    let optionIdSelected = document.querySelector('button[type="submit"], button:not([type])');
            
    let option_correct = quizQuestions[current_question].correctAnswer;
    if(optionIdSelected!=null)
    {            
        if(optionIdSelected.id==option_correct){
            score++;        
        }
  
    }
}

/**
 * The function to show question and options on html page.
 */

function showQuestion(){
    sec = total_time; 
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);
   
    document.querySelectorAll('button[type="submit"], button:not([type])').forEach(option=> option.checked=false)
    
    if(current_question>=quizQuestions.length){
        showResult();
    }

    //set questions and options from array

    question.innerHTML = quizQuestions[current_question].question;
    options1.innerHTML = quizQuestions[current_question].options1;
    options2.innerHTML = quizQuestions[current_question].options2;
    options3.innerHTML= quizQuestions[current_question].options3;
    options4.innerHTML= quizQuestions[current_question].options4;
   


}

/**
 * Handling Event listner on button click
 */
submit.addEventListener('click',()=>{
   checkIfScore();
    current_question ++;
    if(current_question>=quizQuestions.length){
        
        showResult();
      

    }else{
        
        showQuestion();
    }
    
});

function showResult(){
    current_question = 0;
    document.getElementById("score", score);
    
}

/*fetch questions from api*/

let quizQuestions=[];
const URL = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10'
 async function getData(){
 const response = await fetch(URL);
 const data = await response.json();
 quizQuestions = data;
 console.log(quizQuestions);
 showQuestion();
}
getData();
