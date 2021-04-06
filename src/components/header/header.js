import React from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const handleCartItemsNumber = () => {
        let numberOfItem = 0;
        props.cartItem.forEach(item => numberOfItem += item.quantity);
        return numberOfItem;
    }

     return (
         <header className={styles.header}>
            <div className={styles.header_content}>
                <MediaQuery maxWidth={1000}>
                    <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} />
                </MediaQuery>

                <h2 className={styles.name}>PRETTY GAL</h2>

                <MediaQuery minWidth={1000}>
                    <nav className={styles.nav}>

                        <ul className={styles.navList}>

                            <li><NavLink to='/'>Home</NavLink> </li>
                            <li><NavLink  to='/Shop'>Shop</NavLink></li>
                            <li><NavLink  to='/Sale'>Sale</NavLink></li>
                            <li><NavLink  to='/CustomCare'>Custom Care</NavLink></li>
                            <li><NavLink  to='/StockLists'>Stocklists</NavLink></li>

                        </ul>

                    </nav>
                </MediaQuery>

                <MediaQuery maxWidth={1000}>
                    <h1>brg</h1>
                </MediaQuery>

                <MediaQuery minWidth={1000}>
                    <div className={styles.profil}> 
                    
                        <button className={styles.login}>
                            <FontAwesomeIcon className={styles.icon} icon={faUserCircle} />
                            <span>Log In</span>
                        </button>
                        
                        <button className={styles.cart} onClick={() => props.setCart(true)}>
                            <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} />
                            <span className={styles.numberOfitems}>{handleCartItemsNumber()}</span>
                        </button>

                    </div>
                </MediaQuery>
            </div>

         </header>
     )

}

export default Header;