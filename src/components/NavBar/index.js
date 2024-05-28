import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {score, timer} = this.props
    return (
      <nav>
        <ul className="nav-bar-container">
          <li className="img-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              className="match-game-logo"
              alt="website logo"
            />
          </li>
          <li className="score-timer-container">
            <p className="score-heading">
              Score: <span className="score">{score}</span>
            </p>
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="running-timer">{timer} sec</p>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
