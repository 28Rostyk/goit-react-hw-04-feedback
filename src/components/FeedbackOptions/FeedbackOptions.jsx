import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <button
      key={name}
      onClick={() => onLeaveFeedback(name)}
      type="button"
      className={css.Button}
    >
      {name}
    </button>
  ));
  return <div className={css.ContainerBtn}>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
