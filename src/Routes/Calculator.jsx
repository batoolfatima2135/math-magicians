import React, { useState } from 'react';
import RowCalculator from '../components/Calculator/RowCalculator';
import ResultScreen from '../components/Calculator/ResultScreen';
import EndRow from '../components/Calculator/EndRow';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const updateState = (newState) => {
    setCalculatorData(newState);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-6 mt-5">
        <h3 className="my-2 text-success">Lets do some maths!</h3>
      </div>
      <div className="col-lg-6 col-md-6 col-6 mt-5 border border-5 border-success">
        <ResultScreen
          next={calculatorData.next}
          operation={calculatorData.operation}
          total={calculatorData.total}
        />
        <RowCalculator items={['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+']} state={calculatorData} updateState={updateState} />
        <EndRow items={['0', '.', '=']} state={calculatorData} updateState={updateState} />
      </div>
    </div>
  );
};

export default Calculator;
