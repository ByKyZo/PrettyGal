import React, { useContext, useState } from 'react';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { UserContext } from '../../../../Context/User.context';

const CartItem = (props) => {

    const user = useContext(UserContext);

    const [quantity , setQuantity] = useState(props.infos.quantity);
    
    const AddOneQuantity = () => {
        props.setQuantity(props.infos,props.infos.quantity+1);
    }

    const removeOneQuantity = () => {
        if (quantity > 1) props.setQuantity(props.infos,props.infos.quantity-1);
    }

    const removeCartItem = () => {

        const itemId = JSON.stringify(props.infos.cart_item_id)

        axios.post('http://localhost/BackEnd_PrettyGale/post/removeCartItem',itemId)
            .then(res => {
                console.log(res.data);
                // props.reloadCart();
                user.updateCart++
            })
    }

     return (
         <li>
            <div className={styles.item}>

                <button className={styles.remove} onClick={() => removeCartItem()}></button>

                <div className={styles.img}>
                    <img src={props.infos.image} alt='test'></img>
                </div>

                <div className={styles.infos}>
                    <span>{props.infos.name}</span>
                    <div className={styles.size}>{props.infos.size}</div>
                    <div className={styles.price}>${props.infos.price}</div>
                    <div className={styles.customQuantity}>
                        <button onClick={() => removeOneQuantity()}>
                            <FontAwesomeIcon icon={faMinus}/> 
                        </button>
                    {/* <input className={styles.inputNumber} type='number' value={itemCount} onChange={(e) => setItemCount(e.target.value) }/> */}
                        {/* <input className={styles.inputNumber} type='number' value={props.infos.quantity} onChange={(e) => props.setQuantity(props.infos.id,e.target.value) }/> */}
                        <input className={styles.inputNumber} type='number' value={props.infos.quantity} onChange={(e) => console.log(e.target.value) }/>
                        <button onClick={() => AddOneQuantity()}>
                            <FontAwesomeIcon icon={faPlus}/> 
                        </button>
                    </div>
                </div>

            </div>
         </li>
     )

}

export default CartItem;