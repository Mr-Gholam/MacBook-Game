const macbook = document.querySelector('.desktop')
const battery = document.querySelector('.green-bar')
const score = document.querySelector('.score')
const percentage = document.querySelector('.percentage')
const gameOver = document.querySelector('.game-over')
const gameOverScore =document.querySelector('.final-score')
const gameRole = [{
    cost:-10,
    url:'src/meg.png',
    score:20
},{
    cost:-5,
    url:'src/brian.png',
    score:50
},
{
    cost:10,
    url:'src/stewie.png',
    score:100
}]
const gameState = {
    running :true,
    batteryPercentage :100,
}

macbook.addEventListener('click',(e)=>{
    if(gameState.running === false) return
    const math = Math.random()
    let object
    if(math <= 0.2){
        object = gameRole[2]
    }else if (math <= 0.6){
       object = gameRole[1]
    }
    else{
       object=  gameRole[0]
    }
    const img = document.createElement('img')
    img.classList.add('icons')
    img.src = object.url
    macbook.append(img)
    img.style.top = (e.layerY/macbook.clientHeight)*100 +'%'
    img.style.left = (e.layerX/macbook.clientWidth)*100 + '%'
    score.innerHTML = (Number(score.innerHTML) + object.score).toString()
    const finalScore = score.innerHTML
    gameState.batteryPercentage += object.cost
    battery.style.width = gameState.batteryPercentage  +'%'
    percentage.innerHTML = gameState.batteryPercentage +'%'
    if(gameState.batteryPercentage <=0 ){
        gameState.running = false
        percentage.innerHTML = 0 +'%'
        gameOver.style.display = 'flex'
        gameOverScore.innerHTML = finalScore
    }
    if(gameState.batteryPercentage <=20){
        battery.style.background ='red'
        macbook.style.filter = 'brightness(70%)'
    }else{
        battery.style.background =''
        macbook.style.filter = ''
    }
})