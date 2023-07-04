// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function EndRow(props) {
  const { items } = props;
  return (
    <div className="row">
      <div key={items[0]} className="col-6 button text-center py-3 border">{ items[0] }</div>
      <div key={items[1]} className="col-3 button  text-center py-3 border">{ items[1] }</div>
      <div key={items[2]} className="col-3 text-center py-3 border last-item">{ items[2] }</div>

    </div>
  );
}
EndRow.propTypes = { items: PropTypes.arrayOf(PropTypes.string).isRequired };

export default EndRow;
