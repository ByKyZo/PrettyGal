import React from 'react';
import styles from './titlePage.module.scss';

const TitlePage = (props) => {

     return (
         <div>

             <h2 className={styles.titlePage}>{props.children}</h2>

         </div>
     )

}

export default TitlePage;