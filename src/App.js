import React, { useMemo, useState } from 'react';
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
import Login from './containers/LoginModal/Login';
import { UserContext } from './Context/User.context';

const App = (props) => {

    const [cart , setCart] = useState(false);

    const [isOpenLogin , setIsOpenLogin] = useState(false);

    const [user , setUser] = useState({
        id : null,
        name : null,
        mail : null,
        isConnected : false,
        role : null,
        updateCart : 1,
        cartItemLength : 0
    });

     return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>

                    <Header 
                        openLoginModal={setIsOpenLogin}
                        setCart={setCart} 
                    />

                    <Cart 
                        isOpen={cart} 
                        setCart={setCart} 
                    />

                    {
                        isOpenLogin && <Login closeLoginModal={setIsOpenLogin} />   
                    }

                        <Switch>
                            <Route exact path='/' render={() => <Home />} />
                            <Route exact path='/Shop' render={() => <Shop />} />
                            {/* <Route exact path='/Shop/:id' component={ShopItemDetails} /> */}
                            <Route exact path='/Sale' render={() => <Sale />} />
                            <Route exact path='/CustomCare' render={() => <CustomCare />} />
                            <Route exact path='/StockLists' render={() => <StockLists />} />
                            <h1>ERROR 404</h1>
                        </Switch>

                    <Footer />
                    
                </BrowserRouter>
            </UserContext.Provider>   
        </div>
     )

}

export default App;

