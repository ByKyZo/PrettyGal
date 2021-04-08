import React, { useState , useContext } from 'react';
import styles from './ModalItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { UserContext } from '../../../../Context/User.context';

const ModalItem = ({infos , close}) => {

    const user = useContext(UserContext);

    const [quantity , setQuantity] = useState(1);
    const [sizeSelected, setSizeSelected] = useState(-1);

    const [errorSizeEmpty , setErrorSizeEmpty] = useState(false);

    const AddOneValueInput= () => {
        setQuantity(quantity+1);
    }

    const RemoveOneValueInput = () => {
        if (quantity > 1) setQuantity(quantity-1);
    }

    const handleChangeSize = (e) => {
        setSizeSelected(e.target.value)
        setErrorSizeEmpty(false);
    }

    const addItemToCart = () => {

        user.updateCart++ 

        let itemsToCart = {
            userID : user.id,
            itemID : infos.id,
            sizeSelected : sizeSelected,
            quantity : quantity
        };
        
        itemsToCart = JSON.stringify(itemsToCart);

        axios.post('http://localhost/BackEnd_PrettyGale/post/addItemToCart',itemsToCart)
            .then(res => {
                console.log( res);
            })
            .catch(err => {
                console.log(err);
            })
    }

     return (
         <div className={styles.modal_background} 
            onClick={(e) => {
                // FAIRE EN SORTE FERMER LE MODAL QUAND ON CLIQUE EN DEHORS
            }}>
            <div className={styles.modal}>

            <button className={styles.close} onClick={() => close('')}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>

                <div className={styles.content}>

                    <div className={styles.presentation}>
                        <div className={styles.img}>
                            <img src={infos.image}></img>
                        </div>
                        <div className={styles.imgBonus}>

                        </div>
                    </div>

                    <div className={styles.details}>
                        <h2 style={{textTransform : 'uppercase'}} className={styles.name}>{infos.name}</h2>
                        <h3 className={styles.price}>${infos.price}</h3>
                        <div className={styles.sku}>SKU : 00{infos.id}</div>

                        {infos.color !== null &&
                            <div>
                                <span>Color : {infos.color}</span>
                                <div className={styles.colorPicker} style={{backgroundColor : infos.color_code}}></div>
                            </div>          
                        }
                   
                        <div className={styles.selectSize_wrapper}>
                        
                        { infos.size.length !== 0 &&
                          <>  
                          <label htmlFor='size'>Size</label>
                            <select id='size' className={styles.selectSize} onChange={(e) => handleChangeSize(e)}>
                                <option disabled selected >Select</option>
                                {
                                    infos.size.map(size => {
                                      return <option
                                                key={size.size_id} 
                                                value={size.size_id}
                                                >{size.size_name}
                                            </option>  
                                    })
                                }
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
                                    onChange={(e) => setQuantity(infos.id,e.target.value)}
                                    >
                                </input>
                                <div className={styles.pad}>
                                    <button onClick={() => AddOneValueInput()}>
                                        <FontAwesomeIcon icon={faChevronUp}/>
                                    </button>   
                                    <button onClick={() => RemoveOneValueInput()} style={quantity === 1 ? {opacity : '.4' , cursor:'default'} : {color : ''}}>
                                        <FontAwesomeIcon icon={faChevronDown}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.addCart_wrapper}>

                            <button 
                            onClick={() => (sizeSelected === -1) ? setErrorSizeEmpty(true) : addItemToCart()}
                            >Add to Cart</button>

                            <span>View More Details</span>
                            
                        </div>
                    </div>

                </div>

            </div>
         </div>
     )

}

export default ModalItem;