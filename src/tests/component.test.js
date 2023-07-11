import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quotes from '../Routes/Quote';
import Home from '../Routes/Home';
import Calculator from '../Routes/Calculator';

describe('Jest snapshots to test the components.', () => {
  test('Quote component renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Home component renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calculator component renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ResultScreen component renders correctly', () => {
    const tree = renderer.create(<ResultScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('EndRow component renders correctly', () => {
    const state = { total: '5', next: null, operation: null };
    const updateState = jest.fn();
    const items = ['1', '2', '3'];
    const tree = renderer.create(<EndRow
      items={items}
      state={state}
      updateState={updateState}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('RowCalculator component renders correctly', () => {
    const state = { total: '5', next: null, operation: null };
    const updateState = jest.fn();
    const items = ['1', '2', '3'];
    const tree = renderer.create(<RowCalculator
      items={items}
      state={state}
      updateState={updateState}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
