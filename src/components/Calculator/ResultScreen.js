// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ResultScreen(props) {
  const { next, operation, total } = props;
  return (
    <div className="row">
      <div className="col-12 bg-success text-light py-3 text-end fw-bold">{ next || operation || total || 0 }</div>
    </div>
  );
}
ResultScreen.propTypes = {
  next: PropTypes.string,
  operation: PropTypes.string,
  total: PropTypes.string,
};
ResultScreen.defaultProps = {
  next: null,
  operation: null,
  total: null,
};
export default ResultScreen;
