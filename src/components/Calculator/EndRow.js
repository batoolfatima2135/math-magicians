// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function EndRow(props) {
  const { items, state, updateState } = props;
  const getdata = (event) => {
    const btn = event.target.textContent;
    updateState(calculate(state, btn));
  };
  return (
    <div className="row">
      <button type="button" key={items[0]} onClick={getdata} className="col-6 button text-center py-3 border">{ items[0] }</button>
      <button type="button" key={items[1]} onClick={getdata} className="col-3 button  text-center py-3 border">{ items[1] }</button>
      <button type="button" key={items[2]} onClick={getdata} className="col-3 text-center py-3 border last-item">{ items[2] }</button>

    </div>
  );
}
EndRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default EndRow;
