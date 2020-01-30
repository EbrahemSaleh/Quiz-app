export default class Quiz {
    constructor(config) {
        this.question = config.question;
        this.questionContainer = config.questionContainer;
        this.resContainer = config.resContainer
    }

    init() {
        this.resContainer.innerHTML = '';
        this.displayQuestion()
    }

    displayQuestion() {
        let output = "";

        this.question.forEach((question, questionNumber) => {
            output += `
                  <div class = "card border-secondary mb-3 my-2">
                      <div class = "card-header" > Q${questionNumber + 1}: ${question.title}?</div> 
                      <div class = "card-body" >
                      <div class = "form-group userAnswer" >
                      <span class ="badge badge-success hide"> True </span> 
                      <span class ="badge badge-danger hide"> False </span>
                    ${this.displayAnswer(question.answer , questionNumber)}
                   </div> 
                   </div> 
                   </div>`
        })

        this.questionContainer.innerHTML = output
    }
    displayAnswer(answer, questionNumber) {
        let output = "";

        for (let key in answer) {

            output += `  <div class = "custom-control custom-radio" >
                      <input type = "radio"
                  id = "q${questionNumber}${key}"
                  name = "q${questionNumber}"
                  class = "custom-control-input"
                  value="${key}"
                  >
                      <label class = "custom-control-label"
                  for = "q${questionNumber}${key}" >
                  ${answer[key]} </label>
                   </div> 
                `
        }

        return output

    }

    collUserAns() {
        const userAnswer = document.querySelectorAll('.userAnswer');
        let currentAnswer = '';
        let correctAnswer = 0;

        this.question.forEach((question, questionIndex) => {
            currentAnswer = userAnswer[questionIndex].querySelector('input[type=radio]:checked').value;
            if (currentAnswer === question.correctAnswer) {
                correctAnswer += 1;
                userAnswer[questionIndex].querySelector('.badge-success').classList.remove('hide')
            } else {
                userAnswer[questionIndex].querySelector('.badge-danger').classList.remove('hide')
            }
        })
        this.displayResult(correctAnswer)
    }

    displayResult(correctAnswer) {
        this.resContainer.innerHTML = `<h1> ${correctAnswer} /${this.question.length} </h1> `
    }
}