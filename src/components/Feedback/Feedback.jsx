import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  options = ['Good', 'Neutral', 'Bad'];

  visible = false;

  onIncrement = event => {
    this.setState(prevState => {
      if (event.target.textContent === this.options[0]) {
        this.visible = true;
        return {
          good: prevState.good + 1,
        };
      } else if (event.target.textContent === this.options[1]) {
        this.visible = true;
        return {
          neutral: prevState.neutral + 1,
        };
      } else if (event.target.textContent === this.options[2]) {
        this.visible = true;
        return {
          bad: prevState.bad + 1,
        };
      }
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
      percent = Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      );
      return percent;
    }
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onIncrement}
          />
          {!this.visible ? (
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
