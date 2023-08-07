import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = event => {
    this.setState(prevState => {
      const targetValue = event.target.id.toLowerCase();
      return {
        [targetValue]: Number.parseInt([prevState[targetValue]]) + 1,
      };
    });
  };

  onTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  onPositivePercentage = () => {
    let percent = 0;
    if (this.state.good === 0) {
      return percent;
    } else {
      percent = Math.round((this.state.good / this.onTotal()) * 100);
      return percent;
    }
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onIncrement}
          />
          {this.onTotal() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.onTotal()}
              positivePercentage={this.onPositivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
