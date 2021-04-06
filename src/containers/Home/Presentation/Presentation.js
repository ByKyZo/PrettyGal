import React from 'react';
import styles from './Presentation.module.scss';
import greenSkirt from '../../../assets/green-skirt.webp';
import brownBag from '../../../assets/brown-bag.webp';
import eyeGlasses from '../../../assets/eyeglasses.webp';
import PresentationItem from './PresentationItem/PresentationItem';

const Presentation = (props) => {

     return (
         <section className={styles.presentation}>
            <div className={styles.presentation_header}>
    
                <h2 className={styles.presentation_header_title}>YEAR ROUND</h2>

                <div className={styles.divider}></div>

                <h3 className={styles.presentation_header_subtitle}>Must Have Items</h3>
                
            </div>

            <div className={styles.presentation_content}>

                <PresentationItem image={greenSkirt} text='MIDI PLEATED SKIRT' alt='green-skirt' />

                <PresentationItem image={brownBag} alt='brown-bag' sale={true}/>

                <PresentationItem image={eyeGlasses} text='VINTAGE FRAME EYEGLASSES' alt='eyeglasses' /> 
    
            </div>
         </section>
     )

}

export default Presentation;