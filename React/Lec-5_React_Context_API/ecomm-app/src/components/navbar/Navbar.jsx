import { Link, NavLink }  from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import './navbar.css';
import useFetch from '../../hooks/useFetch';

const Navbar = () => {
    const {data, error} = useFetch('https://fakestoreapi.com/products/categories', []);
    console.log(data);
    return (
        <>
            <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    <li className="nav-item">
                        <NavLink 
                            to='/'
                            className="nav-link">
                                Electronics
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to='/jwelery'
                            className="nav-link">Jwelery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to='/men-clothing'
                            className="nav-link">Men's Clothing
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to='/women-clothing'
                            className="nav-link">Women's Clothing
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className='nav-right'>
                <Link to="/cart" className="cart-icon-container">
                    <FaOpencart className="cart-icon" />
                </Link>
            </div>
            </nav>
        </>
    )
}

export default Navbar;