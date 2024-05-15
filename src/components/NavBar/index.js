import './index.css'

const NavBar = prop => {
  const {score, topScore, gameState} = prop
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {gameState && (
        <div className="game-score">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
