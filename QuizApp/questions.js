const questions = [
    {
        question: "What is the name of this Football Player below?",
        image: "images/messi1.jpg",
        answer: [
            { text: "Messi", correct: true },
            { text: "Ronaldo", correct: false },
            { text: "Neymar", correct: false },
            { text: "Dybala", correct: false }
        ]
    },
    {
        question: "Which Jersey no. does Messi  wear first in FCB?",
        image: "images/messi3.jpg",
        answer: [
            { text: "7", correct: false },
            { text: "6", correct: false },
            { text: "3", correct: false },
            { text: "10", correct: true }
        ]
    },
    {
        question: "Which Football Club has won many UCL ?",
        answer: [
            { text: "FC Barcelona(FCB)", correct: false },
            { text: "Real Madrid", correct: true },
            { text: "Liverpool", correct: false },
            { text: "Manchester United", correct: false }
        ]
    },
    {
        question: "Who is the favourite footballer of all time?",
        image: "images/ronaldo1.jpg",
        answer: [
            { text: "Cristiano", correct: false },
            { text: "Ronaldo", correct: true },
            { text: "Neymar", correct: false },
            { text: "Pele", correct: false }
        ]
    },
    {
        question: "Who is the favourite Cricketer of all time?",
        image: "images/kohli.webp",
        answer: [
            { text: "Dhoni", correct: false },
            { text: "Kohli", correct: true },
            { text: "Sachin", correct: false },
            { text: "VSG", correct: false }
        ]
    }
];

export default questions;
