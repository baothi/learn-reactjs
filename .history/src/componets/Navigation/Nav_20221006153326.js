import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div class="topnav">
            <NavLink exact to="/">Home</NavLink >
            <NavLink to="/product">Products</NavLink >
            <NavLink to="/weather">Weather App</NavLink >
            <NavLink to="/about">About</NavLink >
        </div>
    )
}

export default Nav;
