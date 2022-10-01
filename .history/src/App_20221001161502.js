import logo from './logo.svg';
import './App.css';

// function App() {
const App = () => {
  const thi = () => {
    return (
      <div className="container">
        <div className="row"><h1>hello bao  thi ne</h1></div>
      </div>)
  }
  const x = 10;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> tu hoc reactjs ne.
        </p>
        {x > 5 && thi()}
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
