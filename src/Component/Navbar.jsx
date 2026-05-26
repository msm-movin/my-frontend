import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MyWebsite</div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>

            </ul>
        </nav>
    );
}

export default Navbar;