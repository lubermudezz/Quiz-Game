const questions = [
    {
        id: 1,
        question: '¿Quién escribió la Odisea?',
        answers: [
            { answer: 'Gabriel García Marquez', isCorrect: false },
            { answer: 'Miguel de Cervantes', isCorrect: false },
            { answer: 'Homero', isCorrect: true },
            { answer: 'William Shakespeare', isCorrect: false }
        ]
    },
    {
        id: 2,
        question: '¿Cuál es la capital de Mongolia?',
        answers: [
            { answer: 'Kabul', isCorrect: false },
            { answer: "Ulán Bator", isCorrect: true },
            { answer: 'Tallin', isCorrect: false },
            { answer: 'Tarawa', isCorrect: false }
        ]
    },
    {
        id: 3,
        question: '¿Entre qué años ocurrió la Segunda Guerra Mundial?',
        answers: [
            { answer: '1940 - 1945', isCorrect: false },
            { answer: "1938 - 1945", isCorrect: false },
            { answer: '1939 - 1945', isCorrect: true },
            { answer: '1937 - 1945', isCorrect: false }
        ]
    },
    {
        id: 4,
        question: '¿Cuál ganó como mejor película en los Premios Oscar 2021?',
        answers: [
            { answer: 'Mank', isCorrect: false },
            { answer: 'Sound of Metal', isCorrect: false },
            { answer: 'Minari', isCorrect: false },
            { answer: 'Nomadland', isCorrect: true }
        ]
    },
    {
        id: 5,
        question: '¿Quién se consagró campeón del mundial de fútbol en el año 1966?',
        answers: [
            { answer: 'Argentina', isCorrect: false },
            { answer: 'Inglaterra', isCorrect: true },
            { answer: 'Brasil', isCorrect: false },
            { answer: 'Alemania', isCorrect: false }
        ]
    }
]
const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const question = document.querySelector('.questionTitle')
const answersContainer = document.querySelector('.answers')
const submit = document.querySelector('.submit')
const play = document.querySelector('.play')

let qIndex = 0
let correctAnswers = 0
let wrongAnswers = 0
let total = 0
let selectedAnswer;

const playAgain = () => {
    qIndex = 0
    correctAnswers = 0
    wrongAnswers = 0
    total = 0
    selectedAnswer;
    showQuestion(qIndex)
}

play.addEventListener("click", () => {
    resultScreen.style.display = "none"
    gameScreen.style.display = 'block'
    playAgain()
})


const showResults = () => {
    resultScreen.style.display = "block"
    gameScreen.style.display = 'none'

    resultScreen.querySelector(".correct").textContent = `Respuestas Correctas ${correctAnswers}`
    resultScreen.querySelector(".incorrect").textContent = `Respuestas Incorrectas ${wrongAnswers}`
    resultScreen.querySelector(".score").textContent = `Score ${correctAnswers * 15}`
}

const showQuestion = (questionNumber) => {
    if (qIndex === questions.length) return showResults()
    selectedAnswer = null;
    question.textContent = questions[questionNumber].question
    answersContainer.innerHTML = questions[questionNumber].answers.map((e, index) =>
        `<div class="answer">
        <input name="answer" type="radio" id=${index} value=${e.isCorrect}>
        <label for="answer1">${e.answer}</label>
        </div>`
    ).join("")

    selectAnswer()
}


const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === 'true' ? correctAnswers++ : wrongAnswers++
            qIndex++
            showQuestion(qIndex)
        } else {
            alert('Por favor ingrese una opción')
        }

    })
}

showQuestion(qIndex)
submitAnswer()

