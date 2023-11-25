import { Link, NavLink }  from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import './navbar.css';

const Navbar = ({categories}) => {
    return (
        <>
            <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    {
                        categories && categories.map((category, index)=>{
                            return(
                                <li key={`category-${index}`} className="nav-item">
                                    <NavLink 
                                        to={`/products/${category}`}
                                        className="nav-link">
                                            {category}
                                    </NavLink>
                                </li>  
                            )
                        })
                    }
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