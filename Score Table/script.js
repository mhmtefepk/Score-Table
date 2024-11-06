const scoreButton1 = document.getElementById("score-button1")
scoreButton1.addEventListener("click" , function() {
    const score1 = document.getElementById("score-1")
    let scoreNumber = Number(score1.innerHTML)
    scoreNumber++
    score1.innerHTML = scoreNumber
    console.log("scoreNumber")

  
})
      


const scoreButton2 = document.getElementById("score-button2")
scoreButton2.addEventListener("click" , function() {
    const score1 = document.getElementById("score-1")
    let scoreNumber = Number(score1.innerHTML)
    scoreNumber--
    score1.innerHTML = scoreNumber
    console.log("scoreNumber")
})


const scoreButton3 = document.getElementById("score-button3")
scoreButton3.addEventListener("click" , function() {
    const score2 = document.getElementById("score-2")
    let scoreNumber = Number(score2.innerHTML)
    scoreNumber++
    score2.innerHTML = scoreNumber
    console.log("scoreNumber")

  
})

const scoreButton4 = document.getElementById("score-button4")
scoreButton4.addEventListener("click" , function() {
    const score2 = document.getElementById("score-2")
    let scoreNumber = Number(score2.innerHTML)
    scoreNumber--
    score2.innerHTML = scoreNumber
    console.log("scoreNumber")

  
})
 
      


