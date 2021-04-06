import React from 'react';
import styles from './ShopItemDetails.module.scss';
import Container from '../../../../components/container/container';
import TitlePage from '../../../../components/titlePage/titlePage';

const ShopItemDetails = (props) => {
    // console.log(props.infos);
     return (
         <div>
         
            <TitlePage>ShopItemDetails : {props.infos.name}</TitlePage>

                <Container>

                    <div className={styles.content}>

                        <div className={styles.presentation}>
                            <div className={styles.img}>
                                <img src={Object.values(props.infos.img)}></img>
                            </div>
                            <div className={styles.imgBonus}>

                            </div>
                        </div>

                        <div className={styles.details}>
                            
                        </div>

                    </div>

                </Container>

         </div>
     )

}

export default ShopItemDetails;