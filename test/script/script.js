var btn = document.getElementById("btn")
var btnAnswers = document.getElementById("btnAnswers")
var btnReset = document.getElementById("btnReset")

var answer1 = document.getElementById("input1")
var answer2 = document.getElementById("input2")
var answer3 = document.getElementById("input3")
var answer4 = document.getElementById("input4")
var answer5 = document.getElementById("input5")
var answer6 = document.getElementById("input6")

function buttonAble() {
    btnAnswers.disable = false;
    btnAnswers.style.cursor = "pointer"
    btnAnswers.style.backgroundColor = "#BF5D8A"
}

function reset() { 
    var answer1 = document.getElementById("input1")
    var answer2 = document.getElementById("input2")
    var answer3 = document.getElementById("input3")
    var answer4 = document.getElementById("input4")
    var answer5 = document.getElementById("input5")
    var answer6 = document.getElementById("input6")

    input1.style.backgroundColor = "white"
    input2.style.backgroundColor = "white"
    input3.style.backgroundColor = "white"
    input4.style.backgroundColor = "white"
    input5.style.backgroundColor = "white"
    input6.style.backgroundColor = "white"

    input1.placeholder = ""
    input2.placeholder = ""
    input3.placeholder = ""
    input4.placeholder = ""
    input5.placeholder = ""
    input6.placeholder = ""

    answer1.value = ''
    answer2.value = ''
    answer3.value = ''
    answer4.value = ''
    answer5.value = ''
    answer6.value = ''
}

function check1() {
    var answer1 = document.getElementById("input1").value.toLowerCase()

    /*     var answer1List = []
    for(i = 0; i < answer1.length; i++) {
        if (answer1[i] != ' '){
            answer1List.push(answer1[i])
        }
        answer1 = answer1List.join('')
    } */

    if (answer1 == "квадратична" || answer1 == "квадратична функція") {
        input1.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input1.style.backgroundColor = "rgb(232, 94, 92)"
    }
}

function answerGiving1() {
    if (input1.style.backgroundColor == "rgb(232, 94, 92)") {
        input1.style.backgroundColor = "white"
        input1.value = ""
        input1.placeholder = "Квадратична"
    }
}

function check2() {
    var answer2 = document.getElementById("input2").value.toLowerCase()

    if (answer2 == "пряма") {
        input2.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input2.style.backgroundColor = "rgb(232, 94, 92)"
    }
    
}

function answerGiving2() {
    if (input2.style.backgroundColor == "rgb(232, 94, 92)") {
        input2.style.backgroundColor = "white"
        input2.value = ""
        input2.placeholder = "Пряма"
    }
}

function check3() {
    var answer3 = document.getElementById("input3").value.toLowerCase()

    if (answer3 == "гіпербола") {
        input3.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input3.style.backgroundColor = "rgb(232, 94, 92)"
    }
    
}

function answerGiving3() {
    if (input3.style.backgroundColor == "rgb(232, 94, 92)") {
        input3.style.backgroundColor = "white"
        input3.value = ""
        input3.placeholder = "Гіпербола"
    }
}

function check4() {
    var answer4 = document.getElementById("input4").value.toLowerCase()

    if (answer4 == "парабола") {
        input4.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input4.style.backgroundColor = "rgb(232, 94, 92)"
    }
    
}

function answerGiving4() {
    if (input4.style.backgroundColor == "rgb(232, 94, 92)") {
        input4.style.backgroundColor = "white"
        input4.value = ""
        input4.placeholder = "Парабола"
    }
}

function check5() {
    var answer5 = document.getElementById("input5").value.toLowerCase()

    if (answer5 == "лінійна функція" || answer5 == "лінійна") {
        input5.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input5.style.backgroundColor = "rgb(232, 94, 92)"
    }
    
}

function answerGiving5() {
    if (input5.style.backgroundColor == "rgb(232, 94, 92)") {
        input5.style.backgroundColor = "white"
        input5.value = ""
        input5.placeholder = "Лінійна"
    }
}


function check6() {
    var answer6 = document.getElementById("input6").value.toLowerCase()

    if (answer6 == "вітка параболи") {
        input6.style.backgroundColor = "rgb(124, 232, 92)"
    } else {
        input6.style.backgroundColor = "rgb(232, 94, 92)"
    }
    
}

function answerGiving6() {
    if (input6.style.backgroundColor == "rgb(232, 94, 92)") {
        input6.style.backgroundColor = "white"
        input6.value = ""
        input6.placeholder = "Вітка параболи"
    }
}

btnAnswers.addEventListener("click", answerGiving1)
btnAnswers.addEventListener("click", answerGiving2)
btnAnswers.addEventListener("click", answerGiving3)
btnAnswers.addEventListener("click", answerGiving4)
btnAnswers.addEventListener("click", answerGiving5)
btnAnswers.addEventListener("click", answerGiving6)

btn.addEventListener("click", check1)
btn.addEventListener("click", check2)
btn.addEventListener("click", check3)
btn.addEventListener("click", check4)
btn.addEventListener("click", check5)
btn.addEventListener("click", check6)

btn.addEventListener("click", buttonAble)

btnReset.addEventListener("click", reset)
