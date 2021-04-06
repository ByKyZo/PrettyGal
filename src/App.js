import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import Sale from './containers/Sale/Sale';
import CustomCare from './containers/CustomerCare/CustomCare';
import StockLists from './containers/StockLists/StockList';
// import ShopItemDetails from './containers/Shop/ShopItem/ShopItemDetails/ShopItemDetails';
import Cart from './containers/Shop/Cart/Cart';

// EMPECHER D'ALLER EN DESSOUS DE 1 QUANTITE

const App = (props) => {

    const [cart , setCart] = useState(false);

    const [cartItem , setCartItem] = useState([]);

    const handleAddItemToCart = (item) => {
        let itemIndex = null;

        itemIndex = (item.sizeSelected === '') ? cartItem.findIndex(el => el.id === item.id) : cartItem.findIndex(el => el.id === item.id && el.sizeSelected === item.sizeSelected);
         
        (itemIndex === -1) ? setCartItem([...cartItem, {...item}]) : setCartItem([...cartItem],cartItem[itemIndex].quantity += item.quantity);               
    }

    const handleRemoveItemToCart = (item) => {
        const itemIndex = cartItem.findIndex(el => el.id === item.id && el.sizeSelected === item.sizeSelected);
        const newCartList = [...cartItem];
        // voir avec filter
        newCartList.splice(itemIndex,1);
        setCartItem(newCartList);
    }

    const handleSetQuantity = (item, quantity) => {
        const itemIndex = cartItem.findIndex(el => el.id === item.id && el.sizeSelected === item.sizeSelected)
        setCartItem([...cartItem],cartItem[itemIndex].quantity = quantity)
    }

     return (
         <div>
            <BrowserRouter>

                <Header setCart={setCart} cartItem={cartItem}/>

                <Cart 
                    cartItems={cartItem} 
                    isOpen={cart} 
                    setCart={setCart} 
                    removeItem={handleRemoveItemToCart} 
                    setQuantity={handleSetQuantity}
                />

                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route exact path='/Shop' render={() => <Shop setItemToCart={handleAddItemToCart} />} />
                        {/* <Route exact path='/Shop/:id' component={ShopItemDetails} /> */}
                        <Route exact path='/Sale' render={() => <Sale />} />
                        <Route exact path='/CustomCare' render={() => <CustomCare />} />
                        <Route exact path='/StockLists' render={() => <StockLists />} />
                        <h1>ERROR 404</h1>
                    </Switch>

                <Footer />
                
            </BrowserRouter>
         </div>
     )

}

export default App;

