import React from 'react';
import styles from './loader.module.scss';
import loader from '../../assets/loader/loader.gif';

const Loader = (props) => {

     return (
         <div className={styles.background}>

             <img className={styles.loader} src={loader}></img>

         </div>
     )

}

export default Loader;