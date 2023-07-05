// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/calculator';
import Quotes from './components/quote';

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center mt-5">
        <Calculator />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
