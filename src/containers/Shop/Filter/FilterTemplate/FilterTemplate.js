import React, { useState } from 'react';
import styles from './FilterTemplate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'; 

const FilterItem = (props) => {

    const [openFilter , setOpenFilter] = useState(false);

     return (
         <div className={`${styles.filterItem} ${openFilter ? styles.open : ''}`}>

            <button className={styles.header} onClick={() => setOpenFilter(!openFilter)}>
                <span className={styles.title}>{props.name}</span> 

                <FontAwesomeIcon className={styles.openFilter} icon={openFilter ? faMinus : faPlus}/>
            </button>

            <div className={styles.content}>
                {props.children}
            </div>
            
         </div>
     )

}

export default FilterItem;