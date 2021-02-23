import React from "react";
import s from "./Feedback.module.scss"

class Statistics extends React.Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement =(e) => {
      let name = e.target.name;
      this.setState(prevState => {
          return {
            [name]: prevState[name] + 1
          }
      }
        )
  }

     render (  ) {
         return (
            <div className={s.statistics}>
                <h2 className="title">Please leave feedback</h2>
                <button type="button" name='good' onClick={this.handleIncrement}>Good</button>
                <button type="button" name='neutral' onClick={this.handleIncrement}>Neutral</button>
                <button type="button" name='bad' onClick={this.handleIncrement}>Bad</button>
                <div className="statistics">
                <h2 className="title">Statistics</h2>
                <span>Good {this.state.good}</span>
                <span>Neutral {this.state.neutral}</span>
                <span>Bad {this.state.bad}</span>
                <span>Total {this.state.good +  this.state.bad + this.state.neutral}</span>
                <span>Positive feedback: 100%</span>

                </div>
            </div>
         )
     }
 }


export default Statistics;