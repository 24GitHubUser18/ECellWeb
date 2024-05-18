document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const timeDisplay = document.getElementById('time');
    const totalTime = 300; // Total time for the quiz in seconds
    let timeLeft = totalTime;
    let timer;

    const quizQuestions = [
        {
            question: "For which of the following disciplines is Nobel Prize awarded?",
            answers: {
                a: "Physics and Chemistry",
                b: "Physiology or Medicine",
                c: "Literature, Peace and Economics",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answers: {
                a: "Harper Lee",
                b: "J.K. Rowling",
                c: "Ernest Hemingway",
                d: "Mark Twain"
            },
            correctAnswer: "a"
        },
        {
            question: "Quartz crystals normally used in quartz clocks etc. is chemically",
            answers: {
                a: "silicon dioxide",
                b: "germanium oxide",
                c: "a mixture of germanium oxide and silicon dioxide",
                d: "sodium silicate"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is the father of Geometry?",
            answers: {
                a: "Aristotle",
                b: "Kepler",
                c: "Euclid",
                d: "Pythagoras"
            },
            correctAnswer: "c"
        },
        {
            question: "One kilometre is equal to how many miles?",
            answers: {
                a: "0.84",
                b: "0.5",
                c: "1.6",
                d: "0.62"
            },
            correctAnswer: "d"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
                // Highlight correct answer
                const correctOption = answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`);
                if (correctOption) {
                    correctOption.parentNode.style.color = 'green';
                }
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                showResults();
                submitButton.disabled = true;
            }
        }, 1000);
    }

    buildQuiz();
    startTimer();

    submitButton.addEventListener('click', () => {
        showResults();
        clearInterval(timer);
    });
});