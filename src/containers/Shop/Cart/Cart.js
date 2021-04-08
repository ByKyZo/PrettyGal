import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem/CartItem';
import {v4 as uuid} from "uuid"; 
import { UserContext } from '../../../Context/User.context';
import axios from 'axios';

// ANIMER LE CHEVRON
// ANIMER LE CHEVRON
// ANIMER LE CHEVRON

// FAIRE EN SORT DE FERME LE PANIER EN CLIQUANT EN DEHORS

// STACKER LES ITEMS DOUBLES

const Cart = (props) => {

    const { user } = useContext(UserContext);

    const [totalPrice , setTotalPrice] = useState(0);

    const [cartItems , setCartItems] = useState([]);

    // const [cartItems , setCartItems] = useState([]);


    const handleSetTotalPrice = () => {

        const cartItemsCopy = [...cartItems];
        let total = 0;

        cartItemsCopy.forEach(item => {
            total += (parseFloat(item.price) * parseInt(item.quantity));
        })

        setTotalPrice(Math.round(total*100)/100);  
    }

    const handleReloadDataCart = () => {
        axios.post('http://localhost/BackEnd_PrettyGale/get/cartItems',user.id)
        .then((res) => {

            setCartItems(Object.values(res.data));
        })
    }

    useEffect(() => {

        handleReloadDataCart();
        console.log('reload')

    },[user.isConnected,user.updateCart])

    useEffect(() => {
        
        handleSetTotalPrice()

        let numberOfItem = 0;

        cartItems.forEach(item => numberOfItem += parseInt(item.quantity));

        user.cartItemLength = numberOfItem;
    
    })

     return (

        <div className={`${styles.background} ${props.isOpen ? styles.open : ''}`} 
        // onClick={(e) => console.log(e.target)}
        >

            <div className={`${styles.cart}`}>

                <div className={styles.top}>
                    <button className={styles.close} onClick={() => props.setCart(false)}>
                        <FontAwesomeIcon icon={faChevronLeft}/> 
                    </button>
                    <h2>Cart</h2>
                </div>

                <div className={styles.content}>

                    <ul>

                        {cartItems.length !== 0 ?
                            cartItems.map(item => {
                                return <CartItem 
                                    key={uuid()} 
                                    infos={item} 
                                    reloadCart={handleReloadDataCart}
                                    // removeItem={props.removeItem}
                                    // setQuantity={props.setQuantity}
                                />
                            })
                            :
                            <h1>Cart is empty</h1>
                        }
                    </ul>

                </div>       

                <div className={styles.bottom}>

                    <div className={styles.price_wrapper}>

                        <h3>Subtotal</h3>

                        <span className={styles.price}>${totalPrice}</span>

                    </div>

                    <div className={styles.viewCart}>

                            <button>View Cart</button>

                    </div>

                </div>        

            </div>

        </div>      
     )

}

export default Cart;