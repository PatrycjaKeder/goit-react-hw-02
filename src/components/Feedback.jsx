import css from "./Feedback.module.css";
import PropTypes from 'prop-types';

function Feedback({ good, bad, neutral, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.listItem}>Good: {good}</li>
        <li className={css.listItem}>Neutral: {neutral}</li>
        <li className={css.listItem}>Bad: {bad}</li>
        <li className={css.listItem}>Total: {totalFeedback}</li>
        <li className={css.listItem}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  totalFeedback: PropTypes.bool.isRequired,
  positiveFeedback: PropTypes.bool.isRequired,
};

export default Feedback;