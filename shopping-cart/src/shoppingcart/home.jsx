import React from 'react';
import Cards from './cards';
import Cart from './cart';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';

const Home = () => {

    return (
        <Router>
            <div className = 'head'>
                <Link to = "/">Home</Link>
                <h1><u><i>Shopping Cart</i></u></h1>
                <Link to = "/cart">Cart</Link>
            </div>
            <div className = 'App-header'>
                <Switch>
                    <Route exact path = "/cart">
                        <Cart />
                    </Route>
                    <Cards />
                </Switch>
            </div>
        </Router>
    )
}

export default Home;