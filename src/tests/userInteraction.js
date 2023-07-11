import { render, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import RowCalculator from '../components/Calculator/RowCalculator';
import ResultScreen from '../components/Calculator/ResultScreen';

test('updates state on button click and show in ResultScreen', () => {
  const state = { total: '5', next: null, operation: null };
  const updateState = jest.fn();
  const items = ['1', '2', '3'];
  const { getByText } = render(
    <RowCalculator items={items} state={state} updateState={updateState} />,
  );
  fireEvent.click(getByText('2'));
  expect(updateState).toHaveBeenCalledWith(expect.objectContaining({
    total: null,
    next: '2',
  }));
  const tree = renderer.create(<ResultScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
