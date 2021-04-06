import React, { useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem/CartItem';
import {v4 as uuid} from "uuid"; 

// ANIMER LE CHEVRON
// ANIMER LE CHEVRON
// ANIMER LE CHEVRON

// FAIRE EN SORT DE FERME LE PANIER EN CLIQUANT EN DEHORS

// STACKER LES ITEMS DOUBLES

const Cart = (props) => {

    const [totalPrice , setTotalPrice] = useState(0);

    const handleSetTotalPrice = () => {

        const cartItems = props.cartItems;
        let total = 0;

        cartItems.forEach(item => {
            total += (item.price * item.quantity);
        })

        setTotalPrice(Math.round(total*100)/100);  
    }

    useEffect(() => {

        handleSetTotalPrice()
    
    },[props.cartItems])

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
                        {props.cartItems.length !== 0 ?
                            props.cartItems.map(item => {
                                return <CartItem 
                                    key={uuid()} 
                                    infos={item} 
                                    removeItem={props.removeItem}
                                    setQuantity={props.setQuantity}
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