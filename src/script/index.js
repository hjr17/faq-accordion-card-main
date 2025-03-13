const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', function () {
        removerAtivos()
        question.classList.add('active')
    })
})

function removerAtivos() {
    questions.forEach(question => {
        question.classList.remove('active')
    })
}
