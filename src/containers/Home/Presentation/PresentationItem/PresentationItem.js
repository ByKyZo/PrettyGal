import React from 'react';
import styles from './PresentationItem.module.scss';

const PresentationItem = (props) => {

     return (
        <div className={styles.item}>

            {props.sale &&
                <span className={styles.item_sale_text}>SALE</span>
            }

            <img className={props.sale ? styles.item_sale_img : styles.item_presentation_img} src={props.image} alt={props.alt}></img>

            {!props.sale &&
                <>
                    <div className={styles.item_info}>
                        <span className={styles.item_info_name}>{props.text}</span>
                        <span className={styles.item_info_viewDetails}>View Details</span>
                    </div>
                </>
            }

        </div>
     )

}

export default PresentationItem;