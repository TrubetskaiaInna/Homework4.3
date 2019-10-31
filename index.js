let ball = document.getElementById('ball')
let basket = document.getElementById('basket')
ball.addEventListener('mouseover', putBallInBasket)

function putBallInBasket () {
  basket.style.display = 'block'
  ball.classList.add('animate')
}
