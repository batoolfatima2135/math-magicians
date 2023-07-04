// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './calculator.css';

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

function Calculator() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-5 mt-5">
        <ResultScreen />
        <RowCalculator items={['AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7', '4', '5', '6', '-', '1', '2', '3', '+']} />
        <EndRow items={['0', '.', '=']} />

      </div>
    </div>
  );
}
export default Calculator;
