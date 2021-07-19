var btn = document.getElementById("btn")
var question1 = document.getElementById('question1')

function check1() {
    var answer1_1 = document.getElementById('correct1')
    if (answer1_1.checked == true) {
        question1.style.color = "rgb(124, 232, 92)"
    } else {
        question1.style.color = "rgb(232, 94, 92)"
    }
}

btn.addEventListener('click', check1)