import './index.css'
const WinOrLoseCard = prop => {
  const {score, gameResult, playAgain} = prop
  const text = gameResult ? 'You Won' : 'You Lose'
  const resultImg = gameResult
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const paraText = gameResult ? 'Best Score' : 'Score'
  return (
    <div className="game-result">
      <div>
        <h1>{text}</h1>
        <div>
          <p>{paraText}</p>
          <p>{score}/12</p>
        </div>
        <button
          type="button"
          onClick={() => {
            playAgain()
          }}
        >
          Play Again
        </button>
      </div>
      <img src={resultImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
