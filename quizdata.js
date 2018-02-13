const QUIZ = [{
    question: "Which of the below answers is a valid role for the 'header' tag",
    answers: ['navigation', 'banner', 'main', 'region', 'header'],
    correctAnswer: 'banner',
    category: 'html'
},
{
    question: "What is the 2 letter code for english to be used with the HTML language attribute ie., <html lang=''>?",
    answers: ['us', 'en', 'am', 'uk'],
    correctAnswer: 'en',
    category: 'html'
},
{
    question: "Which HTML tag is not an examle of semantic HTML?",
    answers: ['header', 'section', 'footer', 'div'],
    correctAnswer: 'div',
    category: 'html'
},
{
    question: "Which of the below answers are valid values fo the CSS property `display`?",
    answers: ['inline, block, standard', 'inline, block, block-inline', 'inline, block, inline-block', 'static,absolute, relative, fixed'],
    correctAnswer: 'inline, block, inline-block',
    category: 'css'
},
{
    question: "Which of the below answers are valid values fo the CSS property `position`?",
    answers: ['static, absolute, relative, fixed', 'static, absolute, relative, fluid', 'static, absolute, float, fixed', 'inline, block, inline-block'],
    correctAnswer: 'static, absolute, relative, fixed',
    category: 'css'
},
{
    question: "What part of the box model separates the content from the border",
    answers: ['border', 'margin', 'padding', 'space'],
    correctAnswer: 'padding',
    category: 'css'
},
{
    question: "What is the value the browser assigns to a variable when it is first created in memory?",
    answers: ['null', 'blank', 'undefined', 'string'],
    correctAnswer: 'undefined',
    category: 'javascript'

},
{
    question: "In javascript if you want to represent the absence of a value, you use?",
    answers: ['null', 'double quotes', 'undefined', '0'],
    correctAnswer: 'null',
    category: 'javascript'
},
{
    question: "'function myFunction() {}' is an example of what type of function?",
    answers: ['anonymous function', 'function expression', 'function template', 'function declaration'],
    correctAnswer: 'function declaration',
    category: 'javascript'
},
{
    question: "'const myFunction = function() {}' is an example of what type of function?",
    answers: ['function constant', 'function expression', 'function template', 'function declaration'],
    correctAnswer: 'function expression',
    category: 'javascript'
}
];


const QUIZSTATE = {
    questionNumber: 0,
    correctCount: 0,

    getQuestionNumber: function () {
        return this.questionNumber;
    },
    setQuestionNumber: function () {
        this.questionNumber += 1;
        return this.questionNumber;
    },

    getCorrectCount: function () {
        return this.correctCount;
    },
    setCorrectCount: function (updateFlag) {
        if (updateFlag === true) {
            this.correctCount += 1;
        }
        return this.correctCount;
    },
    startScreen: "<h2>READY TO REVIEW YOUR HTML, CSS, AND JAVASCRIPT FOR THE MOCK INTERVIEW?</h2><button class='js-btn-start'>START QUIZ</button>",
    correctAnswerImage: "https://media.giphy.com/media/P5VmnAcgCBs5y/giphy.gif",
    incorrectAnswerImage: "http://exchangedownloads.smarttech.com/public/content/80/80354240-3061-4563-9995-87ebd333c1b6/previews/medium/0005.png",
    dialogCorrectAnswer: [`<div id="dialog" title="Basic dialog"><p>Correct Answer!</p></div>`],
    dialoginCorrectAnswer: [`<div id="dialog" title="Basic dialog"><p>Sorry, incorrect answer!</p></div>`],
    startOver: [`<div class="row"><div class="col-12"><div class="start-screen"><h2>READY TO REVIEW YOUR HTML, CSS, AND JAVASCRIPT FOR THE MOCK INTERVIEW?</h2><button class='js-btn-start'>START QUIZ</button></div></div>`]
};

