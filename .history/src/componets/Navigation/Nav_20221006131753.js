import './Nav.scss'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div class="topnav">
            <Link to="/product">Products</Link>
            <Link class="active" to="/">Home</Link>
            <Link to="/weather">Weather App</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;
