import questions from './questions.js';

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image"); // Adding image element
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    nextButton.removeEventListener("click", startQuiz); // Remove event listener from previous game
    nextButton.addEventListener("click", handleNextButton);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    // Display image if available
    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block";
    } else {
        imageElement.style.display = "none";
    }

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    questionElement.style.background = "#fff";
    questionElement.style.padding = "0";
    imageElement.src = ""; // Reset the image source
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resetState();
    questionElement.innerHTML = `Congratulations! Your Score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Again ?";
    questionElement.style.background = "#fff";
    questionElement.style.padding = "3rem";
    nextButton.removeEventListener("click", handleNextButton); // Remove existing event listener
    nextButton.addEventListener("click", startQuiz); // Add event listener to start the quiz again
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
