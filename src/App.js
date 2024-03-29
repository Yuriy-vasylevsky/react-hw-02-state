import './App.css';

import React, { Component } from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section ';
import Notification from './Components/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = e => {
    const { name } = e.target;

    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    // const total = this.state.good + this.state.bad + this.state.neutral;

    return (
      <div className="App">
        <Section title={`Оставте ваш отзыв`}>
          <FeedbackOptions options={this.changeFeedback} />
        </Section>

        <Section title={`Cтатистика`}>
          {this.countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
