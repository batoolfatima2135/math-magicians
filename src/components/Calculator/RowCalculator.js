// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function RowCalculator(props) {
  const { items } = props;
  return (
    <div className="row">
      { items.map((item, index) => (
        <div key={item} className={`col-3 button text-center py-3 border ${index % 4 === 3 ? 'last-item' : ''}`}>{item}</div>
      ))}
    </div>
  );
}
RowCalculator.propTypes = { items: PropTypes.arrayOf(PropTypes.string).isRequired };

export default RowCalculator;
