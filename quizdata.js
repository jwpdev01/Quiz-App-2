const QUIZ = [{
    question: "Select the valid role for the HTML tag <code>&lt;header&gt; </code>.",
    answers: ['navigation', 'banner', 'main', 'region', 'header'],
    correctAnswer: 'banner',
    category: 'html'
},
{
    question: "Select the 2 letter code for english for the HTML language attribute <code>&lt;html lang=''&gt;</code>.",
    answers: ['us', 'en', 'am', 'uk'],
    correctAnswer: 'en',
    category: 'html'
},
{
    question: "What is a11y the abbreviation for",
    answers: ['align', 'ally', 'allliance', 'accessibility'],
    correctAnswer: 'accessibility',
    category: 'html'
},
{
    question: "Which is not a valid value for the CSS property <code>display</code>.",
    answers: ['<code>inline</code>', '<code>block</code>', '<code>block-inline</code>', '<code>inline-block</code>'],
    correctAnswer: '<code>block-inline</code>',
    category: 'css'
},
{
    question: "Which is not a valid values for the CSS property <code>position</code>.",
    answers: ['<code>static</code>', '<code>fluid</code>', '<code>absolute</code>', '<code>relative</code>'],
    correctAnswer: '<code>fluid</code>',
    category: 'css'
},
{
    question: "Select the part of the box model that separates the content from the border.",
    answers: ['border', 'margin', 'padding', 'space'],
    correctAnswer: 'padding',
    category: 'css'
},
{
    question: "Select the value the browser assigns to a variable when it is first created in memory.",
    answers: ['<code>null</code>', '<code>blank</code>', '<code>undefined</code>', '<code>string</code>'],
    correctAnswer: '<code>undefined</code>',
    category: 'javascript'

},
{
    question: "Which is not a valid data type in JavaScript?",
    answers: ['character', 'string', 'number', 'boolean'],
    correctAnswer: 'character',
    category: 'javascript'
},
{
    question: "<code>function myFunction() {}</code>' is an example of what type of function?",
    answers: ['anonymous function', 'function expression', 'function template', 'function declaration'],
    correctAnswer: 'function declaration',
    category: 'javascript'
},
{
    question: "<code>const myFunction = function() {}</code>' is an example of what type of function?",
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
    correctAnswerImage: "http://www.clker.com/cliparts/R/C/5/I/G/P/green-light-tick-mark-th.png" /*"https://media.giphy.com/media/P5VmnAcgCBs5y/giphy.gif"*/,
    incorrectAnswerImage: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg" /*"http://exchangedownloads.smarttech.com/public/content/80/80354240-3061-4563-9995-87ebd333c1b6/previews/medium/0005.png"*/, 
    dialogCorrectAnswer: [`<div id="dialog" title="Basic dialog"><p>Correct Answer!</p></div>`],
    dialoginCorrectAnswer: [`<div id="dialog" title="Basic dialog"><p>Sorry, incorrect answer!</p></div>`],
    startOver: [`<div class="row"><div class="col-12"><div class="start-screen"><h2>READY TO REVIEW YOUR HTML, CSS, AND JAVASCRIPT FOR THE MOCK INTERVIEW?</h2><button class='js-btn-start'>START QUIZ</button></div></div>`]
};

