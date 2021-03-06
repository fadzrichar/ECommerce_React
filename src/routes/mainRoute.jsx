import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../store';

import Home from '../pages/home';
import LogIn from '../pages/login';
import NotFound from '../pages/notFound';
import Profile from '../pages/profile';
import Registration from '../pages/registration';
import AllProducts from '../pages/allProducts';
import ProductDetail from '../pages/productDetail';
import Search from '../pages/search';
import Category from '../pages/category';
import Cart from '../pages/cart';

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* PAGES ROUTING */}
                    <Route exact path="/" component={Home} />
                    <Route exact path='/login' component={LogIn} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/registration' component={Registration} />
                    <Route exact path='/allproducts' component={AllProducts} />
                    <Route exact path='/product/:id' component={ProductDetail} />
                    <Route exact path='/searchproducts' component={Search} />
                    <Route exact path="/category/:category" component={Category} />
                    <Route exact path='/cart' component={Cart} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoute;