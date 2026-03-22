const questions = [
    {
        question: "What is my favorite game?",
        answers: ["Minecraft", "Everspace 2", "FIFA", "Mario Kart"],
        correct: 1
    },
    {
        question: "Where did we meet?",
        answers: ["School", "University", "Online", "Work"],
        correct: 0
    },
    {
        question: "What is my favorite food?",
        answers: ["Pizza", "Burger", "Pasta", "Sushi"],
        correct: 2
    }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });

    progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Wrong answer! Try again 😄");
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    progressEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
}

loadQuestion();