const questions = [
    {
        question: "Richard, wo erreiche ich dich gerade?",
        answers: ["Zwischen den Beinen deiner Mama, Markus", "In der Kemenate, Markus", "Auf der Kamelwiese im Tierpark Berlin, Markus", "Auf dem Melkschemel bei Madame Elvira, Markus"],
        correct: [1]
    },
    {
        question: "Welche Foltermethode bannte die CIA aus ihrem Repertoire augrund ethischer Bedenken?",
        answers: ["Waterboarding", "Simulierte Hinrichtung", "Androhung sexueller Gewalt", "Dauerbeschallung mit \"Tau mich auf\", umgangssprachlich auch \"Zarti-Pause\" genannt"],
        correct: [3]
    },
    {
        question: "Wie solltest du deine freie Zeit am besten nutzen?",
        answers: ["Babies abtreiben", "Vorehelichen Geschlechtsverkehr haben", "Bibel lesen", "Einen anderen Mann küssen"],
        correct: [2]
    },
    {
        question: "Welches Körperteil lässt sich gleichermaßen mit der Hand und mit einem starken Wasserstrahl säubern?",
        answers: ["Poperze", "Arschfotze", "Schoko-Schlitz", "Analrosette"],
        correct: [0,1,2,3]
    },
    {
        question: "Was waren Charlie Kirk's letzte Worte?",
        answers: ["God shall smite me if I'm wrong about this!", "Counting or not counting gang violence?", "My arguments are absolutely bulletproof", "It’s worth to have a cost of, unfortunately, some gun deaths every single year so that we can have the Second Amendment to protect our other God given rights"],
        correct: [1]
    },
    {
        question: "Was ist die korrekte Entscheidung, wenn es zu Beginn einer Wanderung plötzlich in Strömen regnet?",
        answers: ["Sofort umkehren, den gesamten mitgenommenen Proviant verspeisen und anschließend Kaffe & Kuchen haben", "So lange im Schutze eine Hoteldachs stehen, bis der Regen aufhört", "Den Regen ignorieren und sich langsam, aber stetig auflösen", "Sich grunzend wie ein Wildschwein im Schlamm wälzen"],
        correct: [0]
    },
    {
        question: "Was sollte im Falle eine Katers morgens konsumiert werden?",
        answers: ["Tiefkühlpizza mit Monster Energy", "Rühreier und etwas Zitronensaft", "Ibuprofen, Zigarette, Rosinenbrötchen mit Leberwurst", "Elotrans und Avocadobrot"],
        correct: [2]
    },
    {
        question: "Was sind Probleme laut ✨Christian Lindner✨?",
        answers: ["Wie die Brüste einer Frau: Man muss sie anpacken", "Nur dornige Chancen", "In seinem Highperformer-Mindset-Vokabular nicht vorhanden", "Seit seinem Besuch der Turkish Hairlines Schnee von gestern"],
        correct: [1]
    },
    {
        question: "Wie bringt man ein Jupyter Notebook zum Laufen?",
        answers: ["Man öffnet es in VS Code und wählt einen Kernel aus", "Man ruft die Anwendung mit dem Pfad zum gewünschten Notebook im Terminal auf, um im Browser damit zu arbeiten ", "Man öffnet es in Google Colab", "Man entzündet ein Weihrauchfass und betet kontinuierlich schwenkend zum Omnissiah, bis es läuft"],
        correct: [3]
    },
    {
        question: "Was ist nach Schopenhauer die erstrebenswerteste Todesart?",
        answers: ["Friedliches Einschlafen im Beisein Angehöriger", "Durch den goldenen Schuss", "Im Dienste an der Waffe für das Vaterland", "Durch eine von den starken Oberschenkeln einer Muscle Mommy induzierte Schädelfraktur"],
        correct: [3]
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

    progressEl.textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;
}

function checkAnswer(index) {
    const correctAnswers = questions[currentQuestion].correct;

    if (correctAnswers.includes(index)) {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Ich bin nicht wütend, ich bin nur enttäuscht.\nDas kannst du besser, Christian.");
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    progressEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
}

loadQuestion();