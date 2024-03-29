import PropTypes from "prop-types";
import css from "./Statistics.module.css"
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.stat_item}>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Feedback:{positivePercentage}%</p>
    </div>
  );
};//

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
