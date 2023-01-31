import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.Good}>Good: {good}</p>
      <p className={css.Neutral}>Neutral: {neutral}</p>
      <p className={css.Bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={css.Feedback}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
