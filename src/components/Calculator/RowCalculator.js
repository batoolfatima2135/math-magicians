// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function RowCalculator(props) {
  const { items, state, updateState } = props;
  const getdata = (event) => {
    const btn = event.target.textContent;
    updateState(calculate(state, btn));
  };
  return (
    <div className="row">
      { items.map((item, index) => (
        <button type="button" key={item} onClick={getdata} className={`col-3 button text-center fw-bold py-3 border ${index % 4 === 3 ? 'last-item' : ''}`}>{item}</button>
      ))}
    </div>
  );
}
RowCalculator.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default RowCalculator;
