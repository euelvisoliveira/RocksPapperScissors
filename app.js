let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

getComputerChoice = () => {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

convertToWorld = (letter) => {
  if (letter === 'r') return '🪨'
  if (letter === 'p') return '📰'
  return '✂️'
}

win = (userChoice, computerChoice) => {
  console.log('WINS')
  const smallUserWord = 'user'.fontsize(3).sub()
  const smallCompWord = 'comp'.fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice)
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWorld(
    userChoice
  )}${smallUserWord} beats ${convertToWorld(
    computerChoice
  )}${smallCompWord}. You win! 🔥`
  userChoice_div.classList.add('green-glow')
  setTimeout(() => {
    userChoice_div.classList.remove('green-glow')
  }, 1000)
}

lose = (userChoice, computerChoice) => {
  console.log('LOST')
  const smallUserWord = 'user'.fontsize(3).sub()
  const smallCompWord = 'comp'.fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice)
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWorld(
    userChoice
  )}${smallUserWord} loses ${convertToWorld(
    computerChoice
  )}${smallCompWord}. You lost... 💩`
  userChoice_div.classList.add('red-glow')
  setTimeout(() => {
    userChoice_div.classList.remove('red-glow')
  }, 1000)
}

draw = (userChoice, computerChoice) => {
  console.log('DRAW')
  const smallUserWord = 'user'.fontsize(3).sub()
  const smallCompWord = 'comp'.fontsize(3).sub()
  const userChoice_div = document.getElementById(userChoice)
  result_p.innerHTML = `${convertToWorld(
    userChoice
  )}${smallUserWord} equals ${convertToWorld(
    computerChoice
  )}${smallCompWord}. Its's a draw.`
  userChoice_div.classList.add('gray-glow')
  setTimeout(() => {
    userChoice_div.classList.remove('gray-glow')
  }, 1000)
}

game = (userChoice) => {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break
  }
}

main = () => {
  rock_div.addEventListener('click', () => {
    game('r')
  })
  paper_div.addEventListener('click', () => {
    game('p')
  })
  scissors_div.addEventListener('click', () => {
    game('s')
  })
}

main()
