import React from 'react';
import styles from './ColorItem.module.scss';

const ColorItem = (props) => {

     return (
         <li>
            {/* <button className={styles.color} style={{backgroundColor : props.color}} onClick={props.onClick}>

            </button>     */}
            <label>
                <input type='checkbox' className={styles.colorInput} onClick={props.onClick} hidden/>
                <div className={styles.color} style={{backgroundColor : props.color}}></div>
            </label>
         </li>

     )

}

export default ColorItem;