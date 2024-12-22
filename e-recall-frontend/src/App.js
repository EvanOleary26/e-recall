import logo from './logo.svg';
import './App.css';
import QuestionInput from './QuestionInput';

function App() {
  return (
    <div className="App">
      <header className="App-header"> <QuestionInput/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WOOOO I AM SPINNING
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
