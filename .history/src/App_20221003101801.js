import logo from './logo.svg';
import './App.css';
import TodoList from './componets/TodoList';

// function App() {
const App = () => {
  // const x = [1, 2, 3, 4, { name: 'John', age: 36 }]
  const x = "tu hoc reactjs nhe"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world react with x = {x}
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
