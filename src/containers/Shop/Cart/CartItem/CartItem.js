import React, { useState } from 'react';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {

    const [quantity , setQuantity] = useState(props.infos.quantity);
    
    const AddOneQuantity = () => {
        props.setQuantity(props.infos,props.infos.quantity+1);
    }

    const removeOneQuantity = () => {
        if (quantity > 1) props.setQuantity(props.infos,props.infos.quantity-1);
    }

     return (
         <li>
            <div className={styles.item}>

                <button className={styles.remove} onClick={() => props.removeItem(props.infos)}></button>

                <div className={styles.img}>
                    <img src={Object.values(props.infos.img)} alt='test'></img>
                </div>

                <div className={styles.infos}>
                    <span>{props.infos.name}</span>
                    <div className={styles.size}>{props.infos.sizeSelected}</div>
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