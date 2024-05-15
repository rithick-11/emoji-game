import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameState: true,
    selectedEmoji: [],
    gameResult: false,
  }

  emojiOnClick = async id => {
    await this.setState(pre => {
      const toContinue = !pre.selectedEmoji.includes(id)
      if (toContinue) {
        return {selectedEmoji: [...pre.selectedEmoji, id], score: pre.score + 1}
      } else {
        return {gameState: false}
      }
    })
    this.setState(pre => {
      const result = pre.score === 12

      return {
        gameResult: result ? true : false,
        gameState: result ? false : pre.gameState,
      }
    })

    // const {selectedEmoji, score} = this.state
    // const result = !selectedEmoji.includes(id)
    // if (result) {
    //   this.setState({
    //     selectedEmoji: [...selectedEmoji, id],
    //     score: score + 1,
    //   })
    // } else {
    //   this.setState({
    //     gameState: false,

    //   })
    // }
    // console.log(selectedEmoji)
    // console.log(score)
  }

  playAgain = () => {
    this.setState(pre => ({
      gameState: true,
      score: 0,
      selectedEmoji: [],
      topScore: pre.score > pre.topScore ? pre.score : pre.topScore,
    }))
    console.log('Play again')
  }

  render() {
    const {score, topScore, gameState, gameResult} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="emoji-game-container">
        <div className="container">
          <NavBar score={score} topScore={topScore} gameState={gameState} />
          {gameState && (
            <ul className="emoij-list">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  emojiData={each}
                  key={each.id}
                  emojiOnClick={this.emojiOnClick}
                />
              ))}
            </ul>
          )}
          {!gameState && (
            <WinOrLoseCard
              score={score}
              gameResult={gameResult}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
