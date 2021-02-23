import React from 'react';
import s from './Feedback.module.scss';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class StatisticsRender extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    let name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;
  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.bad + this.state.neutral)) *
    100;

  render() {
    return (
      <div className={s.statistics}>
        <h2 className="title">Please leave feedback</h2>
        <FeedbackOptions options={this.handleIncrement}></FeedbackOptions>
        <h3 className="title">Statistics</h3>

        {this.countTotalFeedback() === 0 ? (
          <h3 className="title">No feedback given</h3>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </div>
    );
  }
}

export default StatisticsRender;
