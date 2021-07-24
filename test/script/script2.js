var btn = document.getElementById("btn")
var question1 = document.getElementById('question1')

function check1() {
    var answer1 = document.getElementById('correct1')
    if (answer1.checked == true) {
        question1.style.color = "rgb(124, 232, 92)"
    } else {
        question1.style.color = "rgb(232, 94, 92)"
    }
}

function check2() {
    var answer2 = document.getElementById('correct2')
    if (answer2.checked == true) {
        question2.style.color = "rgb(124, 232, 92)"
    } else {
        question2.style.color = "rgb(232, 94, 92)"
    }
}

function check3() {
    var answer3 = document.getElementById('correct3')
    if (answer3.checked == true) {
        question3.style.color = "rgb(124, 232, 92)"
    } else {
        question3.style.color = "rgb(232, 94, 92)"
    }
}
    
function check4() {
    var answer4 = document.getElementById('correct4')
    if (answer4.checked == true) {
        question4.style.color = "rgb(124, 232, 92)"
    } else {
        question4.style.color = "rgb(232, 94, 92)"
    }
}

function check5() {
    var answer5 = document.getElementById('correct5')
    if (answer5.checked == true) {
        question5.style.color = "rgb(124, 232, 92)"
    } else {
        question5.style.color = "rgb(232, 94, 92)"
    }
}

function check6() {
    var answer6 = document.getElementById('correct6')
    if (answer6.checked == true) {
        question6.style.color = "rgb(124, 232, 92)"
    } else {
        question6.style.color = "rgb(232, 94, 92)"
    }
}



btn.addEventListener('click', check1)
btn.addEventListener('click', check2)
btn.addEventListener('click', check3)
btn.addEventListener('click', check4)
btn.addEventListener('click', check5)
btn.addEventListener('click', check6)
