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
// const questions = document.querySelectorAll('.question')

// questions.forEach(question => {
//     question.addEventListener('click', function () {
//         const itsActive = question.classList.contains('active')
//         questions.forEach(question => {
//             question.classList.remove('active')
//         })
//         if (!itsActive) {
//             question.classList.add('active')
//         } else {
//             question.classList.remove('active')
//         }
//     })
// })