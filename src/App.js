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

  goodStat = state => {
    if (state === `good`) {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (state === `neutral`) {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (state === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  // neutralStat = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };

  // badStat = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  countTotalFeedback = () => {};

  render() {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const PositiveFeedback = Math.round((100 * this.state.good) / total);

    return (
      <div className="App">
        <Section title={`Оставте ваш отзыв`}>
          <FeedbackOptions options={this.goodStat} />
        </Section>

        <Section title={`Cтатистика`}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={PositiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
