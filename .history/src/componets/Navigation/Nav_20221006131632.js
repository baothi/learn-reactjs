import './Nav.scss'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="/product">Products</a>
            <a href="/weather">Weather App</a>
            <a href="/about">About</a>
        </div>
    )
}

export default Nav;
