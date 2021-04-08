import React , { useContext, useEffect, useState } from 'react';
import styles from './Shop.module.scss';
import Container from '../../components/container/container';
import TitlePage from '../../components/titlePage/titlePage';
import ShopItem from './ShopItem/ShopItem';
import Filter from './Filter/Filter';
import Sorts from './Sorts/Sorts';
// import ShopItemDetails from './ShopItem/ShopItemDetails/ShopItemDetails';
import ModalItem from './ShopItem/ModalItem/ModalItem';
import axios from 'axios';

const Shop = (props) => {

    const [items , setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost/BackEnd_PrettyGale/get/items')
            .then(res => {
                setItems(Object.values(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const [currentItem , setCurrentItem] = useState('');
    
    const [colorFilter , setColorFilter] = useState([]);

    const [sizeFilter , setSizeFilter] = useState([]);

    const [priceFilter, setPriceFilter] = useState([0,0]);

    const [minMaxPrice , setminMaxPrice] = useState([0,0])

    const handleCurrentItem = (item) => {
        setCurrentItem(item);
    }
    
    const handleSetMinMaxPrice = () => {
        const allPrice = items.map(item => parseFloat(item.price)).sort((a,b) => a-b)
        const maxPrice = allPrice[allPrice.length-1];
        const minPrice = allPrice[0];
        setminMaxPrice([parseFloat(minPrice),parseFloat(maxPrice)]);
    }

    ////// FILTER FUNCTION //////
    const handleColorFilter = (color) => {
        handleSetFilterManager(setColorFilter,colorFilter,color)
    }

    const handleSizeFilter = (size) => {
        handleSetFilterManager(setSizeFilter,sizeFilter,size)
    }

    const handlePriceFilter = (minPrice,maxPrice) => {
        const currentPriceRange = [minPrice,maxPrice];
        setPriceFilter(currentPriceRange);
    }

    const handleSetFilterManager = (setFilter,filters,filterValue) => {

        if (filters.findIndex(filter => filter === filterValue) === -1) return setFilter([...filters,filterValue])

        setFilter(filters.filter(filter => filter !== filterValue));
    }

    useEffect(() => {
        handleSetMinMaxPrice();
    },[items])

     return (
        <>

            <TitlePage>shop</TitlePage>

            <Container>
            
                <div className={styles.shop}>

                    <Filter
                        setColorFilter={handleColorFilter}
                        setSizeFilter={handleSizeFilter}
                        setPriceFilter={handlePriceFilter}
                        minMaxPrice={minMaxPrice}
                    />
                    
                    <div className={styles.content}>

                        <Sorts />

                        <div className={styles.contentItems}>
                        
                            { 
                                items ?

                                items
                                    .filter((item) => {
                                        return (colorFilter.length !== 0 ) ? colorFilter.includes(item.color) : item

                                    })
                                    .filter(item => {
                                        return (sizeFilter.length !== 0) ? sizeFilter.some(size => 
                                            (item.size !== null) ? item.size.includes(size) : '') 
                                        : item
                                    })
                                    .filter(item => {
                                        return parseFloat(item.price) >= priceFilter[0] && parseFloat(item.price) <= priceFilter[1]
                                    }) 
                                    .map(item => {
                                        return <ShopItem key={item.id} infos={item} currentItem={handleCurrentItem}/> 
                                    })
                                :
                                <h1>Wait</h1>
                            }

                        </div>

                    </div>

                </div> 

                {currentItem && 
                    <ModalItem 
                        // setItemSize={handleSelectSize}
                        // setItemQuantity={handleSetQuantiy}
                        // setItemToCart={props.setItemToCart} 
                        infos={currentItem} 
                        close={setCurrentItem}

                    />
                    /* body overflow */
                    // FAIRE UNE FONCTIONE POUR BODY OVERFLOW AVEC LE MODAL
                }

            </Container>

            {/* <ShopItemDetails infos={currentItem} /> */}

        </>
       
     )

}

export default Shop;