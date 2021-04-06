import React from 'react';
import styles from './Background.module.scss';
import { Link } from 'react-router-dom';

const component = (props) => {

     return (

        <section className={styles.container}>
            <div className={styles.container_banner}>
                <div className={styles.container_modalShop}>

                    <h1 className={styles.container_modalShop_title}>FALL & WINTER</h1>

                    <Link to='/Shop'>
                        <button className={styles.container_modalShop_btn}>Shop Now</button>
                    </Link>

                </div>
            </div>
            
            <div className={styles.banner_delivery}>FREE SHIPPING WORLWIDE</div>

        </section>

     )

}

export default component;