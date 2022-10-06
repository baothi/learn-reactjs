import './Nav.scss'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div class="topnav">
            <Link class="active" to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/weather">Weather App</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;
