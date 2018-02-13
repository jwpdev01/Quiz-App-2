//start ui
//data reside quizdata.js
function initializeQuiz() {
    $('div.start-screen').html(QUIZSTATE.startScreen);
}

//remove opening screen and incrment question counter
//display first question for user
function startQuiz() {
    $('.js-btn-start').on('click', function (event) {
        $('div.start-screen').remove();
        $('.js-question-number').text(QUIZSTATE.getQuestionNumber());
        //display question on the page
        renderQuestions();
    });
}

function renderQuestions() {
    //rent question and answer text to the screen
    $('.js-quiz').html(renderQuestionAndAnswerText());

    //build and display the dialogbox
    displayDiaglogBox(); 
}

function displayDiaglogBox() {
    $('.js-check-answer').click(function (event) {
        event.preventDefault();
        
        let answerStatus = checkAnswer($("input:radio[name ='answer']:checked").val());

        //set dialog text for correct or incorrect answer
        setDialogText(answerStatus);

        //update the number of correct answers and what question the user is on
        updateQuizCountAndCorrectAnswerCount(answerStatus)

        //load correct graphic for correct or incorrect answer
        $('#dialog').append(loadDialogGraphics(answerStatus));

        //dialog that displays correct and incorrect and navigates to the next step in the workflow.
        $("#dialog").dialog({
            resizable: false,
            height: 600,
            width: 600,
            position: {
                my: "center",
                at: "center",
                of: '.js-dialog'
            },
            buttons: {
                "Next Question": function () {
                    $(this).dialog("close");

                    if (QUIZSTATE.getQuestionNumber() < QUIZ.length) {
                        //display next question
                        renderQuestions();
                    } else {
                        //user has gone through all questions
                        //display results page
                        $('div.quiz').remove();
                        createResultPage();
                    }
                }
            }
        });
    });
}

//update correct number count and what question the user is on count
function updateQuizCountAndCorrectAnswerCount(answerStatus) {
    QUIZSTATE.setQuestionNumber();
    $('.js-question-number').text(QUIZSTATE.getQuestionNumber());

    QUIZSTATE.setCorrectCount(answerStatus);
    $('.js-question-score').text(QUIZSTATE.getCorrectCount());
}

function renderQuestionAndAnswerText() {
    //write the current question and answers to the UI.
    let currentQuestion = QUIZSTATE.getQuestionNumber();

    $('.js-quiz').html(`
        <form>
            <div class="quiz-question">
                <h2>${QUIZ[currentQuestion].question}</h2>
            </div>
            <div class="quiz-answers">
            
                <label class="answer-label">
                    <input type="radio" value="${QUIZ[currentQuestion].answers[0]}" name="answer" class="quiz-answer" required checked>
                    <span class="quiz-answer">${QUIZ[currentQuestion].answers[0]}</span>
                </label>
                
                <label>
                    <input type="radio" value="${QUIZ[currentQuestion].answers[1]}" name="answer" class="quiz-answer" required>
                    <span class="quiz-answer">${QUIZ[currentQuestion].answers[1]}</span>
                </label>
                
                <label>
                    <input type="radio" value="${QUIZ[currentQuestion].answers[2]}"  name="answer" class="quiz-answer" required>
                    <span class="quiz-answer" >${QUIZ[currentQuestion].answers[2]}</span>
                </label>
                
                <label>
                    <input type="radio" value="${QUIZ[currentQuestion].answers[3]}" name="answer" class="quiz-answer" required>
                    <span class="quiz-answer" >${QUIZ[currentQuestion].answers[3]}</span>
                </label>   
                             
            </div>
            <div>
                <button class='js-check-answer'>Submit Answer</button>
            </div>
        </form>
    `);
}

//load appropriate graphic based on correct or incorrect answer.
function loadDialogGraphics(answerStatus) {
    if (answerStatus === true) {
        return `<div class='centerImage'><img src="${QUIZSTATE.correctAnswerImage}"/></div>`;
    } else {
        return `<div class='centerImage'><img src="${QUIZSTATE.incorrectAnswerImage}"/></div>`;
    }
}


//display final score
function createResultPage() {
    $('.js-quiz-final').html(
        `<form>
        <span><h2>Your final SCORE is: </h2>
        <span class='final-score red-text'>${(QUIZSTATE.getCorrectCount() / QUIZSTATE.getQuestionNumber()) * 100}%</span>
        <div>
            <button class='start-over'>Restart Quiz</button>
        </div>
    </form>
  `);
}

//restart the quiz
function startOver() {
    $('.js-start-over').click(function (event) {
        $('js-main-screen').html(QUIZSTATE.startOver);
    });
}

function checkAnswer(value) {
    return (value === QUIZ[QUIZSTATE.getQuestionNumber()].correctAnswer ? true : false);
}

//dialog text based on correct or incorrect answer
function setDialogText(answer) {
    let dialogText = '';
    if (answer === true) {
        dialogText = 'Correct Answer!';
    } else {
        dialogText = [`Sorry, that was incorrect.  The correct answer is: "<span class='red-text'>${QUIZ[QUIZSTATE.getQuestionNumber()].correctAnswer}</span>"<br/>`];
    }

    $('.js-dialog').html(`
        <div id="dialog" title="Basic dialog">
            <p>${dialogText}</p>
        </div>`);

}

//initate and start the quiz
function initiateQuiz() {
    initializeQuiz();
    startQuiz();
}

$(initiateQuiz);