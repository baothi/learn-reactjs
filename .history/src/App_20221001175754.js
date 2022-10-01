import logo from './logo.svg';
import './App.css';
import TodoList from './componets/TodoList';

// function App() {
const App = () => {
  const x = [{ name: 'John', age: 36 }]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {x}.
        </p>
        <TodoList />
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
