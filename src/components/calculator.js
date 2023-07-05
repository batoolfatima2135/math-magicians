import './calculator.css';
import React, { useState } from 'react';
import RowCalculator from './Calculator/RowCalculator';
import ResultScreen from './Calculator/ResultScreen';
import EndRow from './Calculator/EndRow';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const updateState = (newState) => {
    setCalculatorData(newState);
  };
  return (
    <div className="col-lg-5 col-md-6 col-6 mt-5">
      <ResultScreen
        next={calculatorData.next}
        operation={calculatorData.operation}
        total={calculatorData.total}
      />
      <RowCalculator items={['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+']} state={calculatorData} updateState={updateState} />
      <EndRow items={['0', '.', '=']} state={calculatorData} updateState={updateState} />

    </div>
  );
}

export default Calculator;
