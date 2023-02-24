// alert('Добро пожаловать на сайт QA!!!')
// confirm ('Учите JS?') 
// prompt('Как зовут мужа?','Кто он?')



// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')

// const skillText = prompt("Какой язык изучаете?","JS?")
// const isLoveValue = confirm('Готовы ли увидеть этот сайт?')

// console.log(isLoveValue)

// skill.innerText = skillText
// isLove.innerText = isLoveValue




// const userName = prompt('Who you are?, anonim')

// if (userName === "admin") {
//     alert("Hello boss!")
// } else if (userName === "anonim" || !userName) {
//     alert("I don't know you...")
// } else{
//     alert(`Hi ${userName}`)
// }




// const counts = prompt ("До скольки вы хотите досчитать?")
// let i = 10
// while (i <= counts) {
//     consolelog (i++)
//  i++
// }



// do{
// consolelog (i++)
// } 
// while(i <= counts)
// console.log(i)

// const arr = []
// for (let i = 0; i<=50; ++i) {
//     arr.push(i)
// }
// console.log(i)




// const newArr = []
// for(elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr)




// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronej",
// }
//  for (key in obj) {
//     console.log(key, obj[key])
//  }




//FUNCTION

//declaration
// function scream (a,b) {
//     // const result = a * b
//     // return result
//     return a * b
// }
// console.log(scream(15,20))

// //exparession
// const wowScream = function() {
//     alert("WOOW")
// }

// //arrow
// const arrow = () => {
//     alert("arrow is in the sky")
// }




//Игра
// Нажав на кнопку начать, игра запускается, 
//генерируется задача, пользователь может ввести ответ, должна появится кнопка проверить
// Нажав кнопку проверить мы сравниваем ввод пользователя с ответом
//Вывести результат и правильное значение, сменить кнопку на начать заного


const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const randomNum1 = getRandomNumInRange(0, 100)
    const randomNum2 = getRandomNumInRange(0, 100)
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${randomNum1} ${symbol} ${randomNum2}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}


const startgamneFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        gameState.taskInProcess = true
    }
    else {
        // Cравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // Вывести результат
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        // Вывести поздравления
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        // Поменять кнопкуи состояние
        btnGame.innerText = "Начать заново!"
        gameState.taskInProcess = false
    }
}

btnGame.addEventListener("click", startgamneFunc)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startgamneFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})









//5-й урок
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
}
const changeCount = (value) => {
    choosedState.countElements += value
    counterEl.innerText = choosedState.countElements
}

const eventFunc = (e) => {
    // Выбрать элемент, выделить элемент с помощью класса
    // choosedEl[i].className = "choosed_element"
    // e.target.className = "choosed_element"
    // Запустить счетчик 
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        changeCount(1)
    } else {
        e.target.className = ""
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}

// choosedEl[2].removeEventListener("click", eventFunc)


//До рефакторинга
// for (let i = 0; i < choosedEl.length; i++) {
//     choosedEl[i].addEventListener("click",(e) => {
//     // Выбрать элемент, выделить элемент с помощью класса
//     // choosedEl[i].className = "choosed_element"
//     // e.target.className = "choosed_element"
//     // Запустить счетчик 
//            if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             changeCount(1)
//         } else {
//             e.target.className = ""
//             сhangeCount(-1)
//         }
//     }) 

// }






// 6 занятие

// const timeIsOver = () => {
//     alert("Время вышло")
// }
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)



// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Хотите ли вы спать?")
//     if (wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)


const postBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")




function addPost(tittle, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postBlock.append(postItem)
}

function getPosts () {fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())

.then(data => {
    for (el of data) {
        addPost(el.title, el.body)
    }
    // addPost(data[7].title, data[7].body)

})
.catch(err => console.log(err.massage))}

showPostsBTN.onclick = getPosts

// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//         .then(res => {
//             console.log(res)
//             return res.json()
//         })
//         .catch(err => console.log(err.massage))
// }

// createPost("title", "body", 15)









    // 4 занятие

// if (isPlus){
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// }
// else{
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// console.log(gameElements)


// let a = 7
// const b = 8

// //STRING
// const str1 ='I am ok'
// const str2 ="Text"
// const str3 = `I'am ok ${str1}`

//NUMBER
// const num1 = 75 +15
// const num2 = 79*9


//BIGINT
// const bigint = 1031441n

//BOOLEN
// const bool = 10>5
// console.log(bool)


//NULL
// let empty = null
// console.log(empty)

//UNDERFINED
// let box = underfined
// console.log(box,typeof box)

//SYMBOL
// const uniq =Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq ==uniq2)

//OBJECT
// const obj ={
//     name:"Sasha",
//     age: 19,
//     isHappy: true,
// }

// console.log(obj.name)
// console.log(obj['name'])

// obj.job = "Google"
// console.log(obj)

// const array = ["Аня", 18, false]
// array [3]="Facebook"
// console.log(array)


