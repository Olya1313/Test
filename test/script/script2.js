var btn = document.getElementById("btn")
var question1 = document.getElementById('question1')
var btnReset = document.getElementById("btnReset") 

function reset() {
    question1.style.color = 'black'
    question2.style.color = 'black'
    question3.style.color = 'black'
    question4.style.color = 'black'
    question5.style.color = 'black'
    question6.style.color = 'black'

    var answer1 = document.getElementById('correct1')
    answer1.checked = false
    var answer1_1 = document.getElementById('wrong1-1')
    var answer1_2 = document.getElementById('wrong1-2')
    var answer1_3 = document.getElementById('wrong1-3')
    answer1_1.checked = false
    answer1_2.checked = false
    answer1_3.checked = false
    var answer2 = document.getElementById('correct2')
    answer2.checked = false
    var answer2_1 = document.getElementById('wrong2-1')
    var answer2_2 = document.getElementById('wrong2-2')
    var answer2_3 = document.getElementById('wrong2-3')
    answer2_1.checked = false
    answer2_2.checked = false
    answer2_3.checked = false
    var answer3 = document.getElementById('correct3')
    answer3.checked = false
    var answer3_1 = document.getElementById('wrong3-1')
    var answer3_2 = document.getElementById('wrong3-2')
    var answer3_3 = document.getElementById('wrong3-3')
    answer3_1.checked = false
    answer3_2.checked = false
    answer3_3.checked = false
    var answer4 = document.getElementById('correct4')
    answer4.checked = false
    var answer4_1 = document.getElementById('wrong4-1')
    var answer4_2 = document.getElementById('wrong4-2')
    var answer4_3 = document.getElementById('wrong4-3')
    answer4_1.checked = false
    answer4_2.checked = false
    answer4_3.checked = false
    var answer5 = document.getElementById('correct5')
    answer5.checked = false
    var answer5_1 = document.getElementById('wrong5-1')
    var answer5_2 = document.getElementById('wrong5-2')
    var answer5_3 = document.getElementById('wrong5-3')
    answer5_1.checked = false
    answer5_2.checked = false
    answer5_3.checked = false
    var answer6 = document.getElementById('correct6')
    answer6.checked = false
    var answer6_1 = document.getElementById('wrong6-1')
    var answer6_2 = document.getElementById('wrong6-2')
    var answer6_3 = document.getElementById('wrong6-3')
    answer6_1.checked = false
    answer6_2.checked = false
    answer6_3.checked = false
} 

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

btnReset.addEventListener("click", reset) 

