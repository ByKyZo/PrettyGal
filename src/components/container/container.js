import React from 'react';
import styles from './container.module.scss';

const component = (props) => {

     return (
         <div className={styles.container}>

             {props.children}

         </div>
     )

}

export default component;