// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ResultScreen(props) {
  const { answere } = props;
  return (
    <div className="row">
      <div className="col-12 bg-secondary text-light py-3 text-end">{answere}</div>
    </div>
  );
}
ResultScreen.propTypes = { answere: PropTypes.number };
ResultScreen.defaultProps = { answere: 0 };
export default ResultScreen;
