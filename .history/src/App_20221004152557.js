import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';

// function App() {
const App = () => {
  // const x = [1, 2, 3, 4, { name: 'John', age: 36 }] ==> {JSON.stringify(x)}
  const x = "tu hoc reactjs nhe"
  return (
    <div className="App" /*style={{ border: '1px solid red', textTransform: 'uppercase'}}*/ >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {x}
          {/* {console.log(x)} */}
        </p>
        <Home />
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
