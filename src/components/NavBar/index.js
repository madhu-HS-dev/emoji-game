// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav-container">
      <div className="title-with-score-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="emoji-name">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-table-container">
            <p className="emoji-name score">Score: {currentScore}</p>
            <p className="emoji-name">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
