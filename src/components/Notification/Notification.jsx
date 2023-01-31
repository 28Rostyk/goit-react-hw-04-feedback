import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <h3 className={css.Notification}>{message}</h3>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
