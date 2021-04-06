import React from 'react';
import styles from './SizeItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import checkMark from '../../../../../assets/icons/check-alt.svg';

const SizeItem = (props) => {

     return (
         <li>
            
            <label className={styles.label} htmlFor={props.value}>
                <input className={styles.checkBoxSize} id={props.value} type='checkbox' value={props.value} hidden onChange={(e) => props.onChange(e.target.value)}/>

                <div className={styles.customCheckBox}>
                    <div className={styles.checkMark}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                </div>
                <span>{props.value}</span>
            </label>
         </li>
     )

}

export default SizeItem;