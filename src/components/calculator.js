import './calculator.css';
import RowCalculator from './Calculator/RowCalculator';
import ResultScreen from './Calculator/ResultScreen';
import EndRow from './Calculator/EndRow';

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
