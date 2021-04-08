import React , { useState } from 'react';
import styles from './ShopItem.module.scss';

const ShopItem = ({infos , currentItem}) => {

    const [openDetails , setOpenDetails] = useState(false);
    
     return (   
         
            !openDetails ? 

                // <Link to={{
                //     pathname:`Shop/${infos.name}`,
                //     infos : {...infos},
                // }}>
                    <button className={styles.item}>

                        <div className={styles.img_wrapper}>
                            <img className={styles.img} src={infos.image} alt={infos.image}></img>
                            <div className={styles.quickView}
                            onClick={() => currentItem(infos)}>
                            Quick View
                            </div>
                        </div>

                        <div className={styles.info}>
                            <span style={{textTransform : 'uppercase'}} className={styles.name}>{infos.name}</span>

                            <span className={styles.price}>${infos.price}</span>
                        </div>
                    </button>
                // </Link>        
            :      
                <h1>Open</h1>

     )

}

export default ShopItem;