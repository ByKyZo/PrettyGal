import React , { useState } from 'react';
import styles from './ShopItem.module.scss';

const ShopItem = (props) => {

    const [openDetails , setOpenDetails] = useState(false);

     return (   
         
            !openDetails ? 

                // <Link to={{
                //     pathname:`Shop/${props.infos.name}`,
                //     infos : {...props.infos},
                // }}>
                    <button className={styles.item}>

                        <div className={styles.img_wrapper}>
                            <img className={styles.img} src={Object.values(props.infos.img)} alt={Object.values(props.infos.img)}></img>
                            <div className={styles.quickView}
                            onClick={() => props.currentItem(props.infos)}>
                            Quick View
                            </div>
                        </div>

                        <div className={styles.info}>
                            <span className={styles.name}>{props.infos.name}</span>

                            <span className={styles.price}>${props.infos.price}</span>
                        </div>
                    </button>
                // </Link>        
            :      
                <h1>Open</h1>

     )

}

export default ShopItem;