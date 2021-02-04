const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreSpan = document.getElementById("score");
const progSpan = document.getElementById("progress");

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add("hide");
  questionContainer.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.innerText = 0;
  progSpan.innerText =
    currentQuestionIndex + 1 + " of " + shuffledQuestions.length;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  progSpan.innerText =
    currentQuestionIndex + 1 + " of " + shuffledQuestions.length;
}

function showQuestion(question) {
  //console.log(shuffledQuestions[currentQuestionIndex].question);

  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    //console.log(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hide");
    progSpan.innerText =
      currentQuestionIndex + 1 + " / " + shuffledQuestions.length;
    //alert("Test completed. You scored " + Number(score + 1) + " out of " + shuffledQuestions.length);
  }
  if (correct) {
    score++;
    scoreSpan.innerText = score + " / " + shuffledQuestions.length;;
    return;
  } else {
    score = score + 0;
    scoreSpan.innerText = score + " / " + shuffledQuestions.length;
  }
  nextBtn.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Who is the president of Nigeria",
    answers: [
      { text: "Muhammedu Buhari", correct: true },
      { text: "Dave Umahi", correct: false },
      { text: "Mark Angel", correct: false },
      { text: "Kenny Jones", correct: false },
    ],
  },
  {
    question: "Who is the best youtuber",
    answers: [
      { text: "Web dev simplified", correct: false },
      { text: "Traversy Media", correct: true },
      { text: "Clever programmer", correct: false },
      { text: "none of the above ", correct: false },
    ],
  },
  {
    question: "Who is Donald Trump?",
    answers: [
      { text: "England King", correct: false },
      { text: "US Ambassador", correct: false },
      { text: "Algeria Preident", correct: false },
      { text: "US President", correct: true },
    ],
  },
  {
    question: "Facebook is owned by who?",
    answers: [
      { text: "Bill Gates", correct: false },
      { text: "John Steven", correct: false },
      { text: "Mark Zuckerberg", correct: true },
      { text: "Ifeanyichukwu John", correct: false },
    ],
  },
  {
    question: "What is Corona Virus",
    answers: [
      { text: "Bacteria", correct: false },
      { text: " A deadly 2020 virus", correct: true },
      { text: "Fungi", correct: false },
      { text: "Satanic Virus", correct: false },
    ],
  },
];
