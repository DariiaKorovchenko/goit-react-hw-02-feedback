import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={css.control_button}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.control_button}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.control_button}
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.arrayOf({

  // }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// options: { onGood, onNeutral, onBad }
