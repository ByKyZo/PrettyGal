import React, { useState , useRef, useEffect } from 'react';
import styles from './ModalItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ModalItem = (props) => {

    const [quantity , setQuantity] = useState(props.infos.quantity);
    const [errorSizeEmpty , setErrorSizeEmpty] = useState(false);

    const handleOnChangeSelect = (e) => {
        setErrorSizeEmpty(false);
        props.setItemSize(props.infos.id,e.target.value)
    }

    const AddOneValueInput= () => {
        setQuantity(quantity+1);
    }

    const RemoveOneValueInput = () => {
        if (quantity > 1) setQuantity(quantity-1);
    }

    useEffect(() => {
        props.setItemQuantity(props.infos.id,quantity)
    },[quantity])

    const addItemToCart = () => {
        props.setItemToCart(props.infos);
        (props.infos.size === null) ? props.setItemSize(props.infos.id,'') : props.setItemSize(props.infos.id,null)
        setQuantity(1)
        // props.close('')
        // props.setItemQuantity(props.infos.id,1);
    }

     return (
         <div className={styles.modal_background} 
            onClick={(e) => {
                // FAIRE EN SORTE FERMER LE MODAL QUAND ON CLIQUE EN DEHORS
            }}>
            <div className={styles.modal}>

            <button className={styles.close} onClick={() => props.close('')}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>

                <div className={styles.content}>

                    <div className={styles.presentation}>
                        <div className={styles.img}>
                            <img src={Object.values(props.infos.img)}></img>
                        </div>
                        <div className={styles.imgBonus}>

                        </div>
                    </div>

                    <div className={styles.details}>
                        <h2 className={styles.name}>{props.infos.name}</h2>
                        <h3 className={styles.price}>${props.infos.price}</h3>
                        <div className={styles.sku}>SKU : 004</div>

                        {props.infos.color !== null &&
                            <div>
                                <span>Color : {props.infos.color}</span>
                                <div className={styles.colorPicker} style={{backgroundColor : props.infos.colorCode}}></div>
                            </div>          
                        }
                   
                        <div className={styles.selectSize_wrapper}>
                        
                        { props.infos.size !== null &&
                          <>  
                          <label htmlFor='size'>Size</label>
                            <select id='size' className={styles.selectSize}onChange={(e) => handleOnChangeSelect(e)}>
                                {props.infos.sizeSelected === null && <option disabled selected >Select</option>}
                                <option value='Small'>Small</option>
                                <option value='Medium'>Medium</option>
                                <option value='Large'>Large</option>
                            </select>
                            {errorSizeEmpty && <span className={styles.errorInputEmpty}>Select size</span>}
                          </>               
                        }
                
                        </div>

                        <div className={styles.quantity_wrapper}>
                            <label htmlFor='quantity'>Quantity</label>
                            <div className={styles.customQuantity}>
                                <input 
                                    className={styles.quantity} id='quantity' type='number' min='1' 
                                    value={quantity}
                                    onChange={(e) => props.setItemQuantity(props.infos.id,e.target.value)}
                                    >
                                </input>
                                <div className={styles.pad}>
                                    <button onClick={() => AddOneValueInput()}>
                                        <FontAwesomeIcon icon={faChevronUp}/>
                                    </button>   
                                    <button onClick={() => RemoveOneValueInput()} style={quantity === 1 ? {opacity : '.4' , cursor:'default'} : {color : ''}}>
                                        <FontAwesomeIcon icon={faChevronDown}/>
                                        {/* <IcoFont icon='thin-down' size="2" spin='true'/> */}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.addCart_wrapper}>

                            <button onClick={() => {
                                (props.infos.sizeSelected === null) ? setErrorSizeEmpty(true) : addItemToCart();
                            }}>Add to Cart</button>

                            <span>View More Details</span>
                            
                        </div>
                    </div>

                </div>

            </div>
         </div>
     )

}

export default ModalItem;