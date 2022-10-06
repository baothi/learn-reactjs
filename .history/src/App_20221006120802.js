import logo from './logo.svg';
import './App.css';
import './App.scss';
import Home from './componets/Home';
import AddNewProduct from './componets/AddNewProduct';
import Product from './componets/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './componets/Navigation/Nav';

// function App() {
const App = () => {
  const x = [1, 2, 3, 4, { name: 'John', age: 36 }] //==> {JSON.stringify(x)}
  // npm install --save-exact sass@1.45.0
  // const x = "tu hoc reactjs nhe"
  return (
    <div>
      <Nav />

      <div className="App" /*style={{ border: '1px solid red', textTransform: 'uppercase'}}*/ >
        <header className="App-header content-left">
          <div style={{ textAlign: "center" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <p>
            <span>Hello world reactjs with x = {JSON.stringify(x)}</span>
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
        <div className='content-right'>
          <AddNewProduct />
          <hr />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
