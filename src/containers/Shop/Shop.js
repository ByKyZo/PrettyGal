import React , { useEffect, useState } from 'react';
import styles from './Shop.module.scss';
import Container from '../../components/container/container';
import TitlePage from '../../components/titlePage/titlePage';
import ShopItem from './ShopItem/ShopItem';
import Filter from './Filter/Filter';
import Sorts from './Sorts/Sorts';
// import ShopItemDetails from './ShopItem/ShopItemDetails/ShopItemDetails';
import ModalItem from './ShopItem/ModalItem/ModalItem';

import blackJacket from '../../assets/black-jacket.webp';
import blackTop from '../../assets/black-top.webp';
import blackAndWhiteDress from '../../assets/black&white-dress.webp';
import brownBag from '../../assets/brown-bag.webp';
import eyeGlasses from '../../assets/eyeglasses.webp';
import greenSkirt from '../../assets/green-skirt.webp';
import redShoes from '../../assets/red-shoes.webp';
import whiteScarf from '../../assets/white-scarf.webp';
import whiteTop from '../../assets/white-top.webp';

const Shop = (props) => {

    const [items , setItems] = useState([
        {id:1,img:{greenSkirt},name : 'MIDI PLEATED SKIRT',price : 59.00, color:'Green',colorCode:'#24934c',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:2,img:{whiteTop},name : 'WHITE TOP',price : 14.99, color:'White',colorCode:'#fff',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:3,img:{redShoes},name : 'RED SHOES',price : 19.99, color:'Red',colorCode:'#ff2929',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:4,img:{brownBag},name : 'BROWN BAG',price : 14.99, color:'Brown',colorCode:'#6f4b25',size:null,quantity : 1,sizeSelected : ''},

        {id:5,img:{blackJacket},name : 'BLACK JACKET',price : 19.99, color:'Black',colorCode:'#000000',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:6,img:{blackTop},name : 'BLACK TOP',price : 14.99, color:'Black',colorCode:'#000000',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:7,img:{blackAndWhiteDress},name : 'BLACK & WHITE TOP',price : 19.99, color:'Black',colorCode:'#000000',colorCode:'',size:['Small','Medium','Large'],quantity : 1,sizeSelected : null},
        {id:8,img:{eyeGlasses},name : 'EYEGLASSES',price : 128.99, color:'Purple',colorCode:'#4c1130',size:null,quantity : 1,sizeSelected : null},
        {id:9,img:{whiteScarf},name : 'WHITE SCARF',price : 15.99, color:'OffWhiite',colorCode:'#e0ded0',size:null,quantity : 1,sizeSelected : ''},
    ])


    const [currentItem , setCurrentItem] = useState('');
    
    const [colorFilter , setColorFilter] = useState([]);

    const [sizeFilter , setSizeFilter] = useState([]);

    const [priceFilter, setPriceFilter] = useState([0,0]);

    const [minMaxPrice , setminMaxPrice] = useState([0,0])

    const handleSetQuantiy = (id, quantity) => {
        const itemIndex = items.findIndex(item => item.id === id);
        setItems([...items],items[itemIndex].quantity = quantity);
    }

    const handleSelectSize = (id, size) => {
        const itemIndex = items.findIndex(item => item.id === id);
        setItems([...items],items[itemIndex].sizeSelected = size);
    }

    const handleCurrentItem = (item) => {
        setCurrentItem(item);
    }
    
    const handleSetMinMaxPrice = () => {
        const allPrice = items.map(item => item.price).sort((a,b) => a-b)
        const maxPrice = allPrice[allPrice.length-1];
        const minPrice = allPrice[0];
        setminMaxPrice([minPrice,maxPrice]);
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
    },[])

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
                    
                    <div className={styles.content}>s

                        <Sorts />

                        <div className={styles.contentItems}>

                            { 
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
                                        return item.price >= priceFilter[0] && item.price <= priceFilter[1]
                                    })
                                    .map(item => {
                                        console.log('render');
                                        return <ShopItem key={item.name} infos={item} currentItem={handleCurrentItem}/> 
                                    })
                            }

                        </div>

                    </div>

                </div> 

                {currentItem && 
                    <ModalItem 
                        setItemSize={handleSelectSize}
                        setItemQuantity={handleSetQuantiy}
                        setItemToCart={props.setItemToCart} 
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