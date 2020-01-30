import '../css/bootstrap.min.css';
import '../css/style.css';

import Quiz from './Quiz';
import Question from './Questions';

const questionCls = new Question();

const quiz = new Quiz({
    question : questionCls.question,
    questionContainer: document.querySelector('.questionContainer'),
    resContainer: document.querySelector('.results')
});

const submitEl = document.querySelector('#submit');
const startEl = document.querySelector('#start')

startEl.addEventListener('click', (e) => {
quiz.init();
e.target.classList.add('hide');
submitEl.classList.remove('hide')
})




submitEl.addEventListener('click' , (e) => {
    quiz.collUserAns();
e.target.classList.add('hide');
startEl.classList.remove('hide')
})


