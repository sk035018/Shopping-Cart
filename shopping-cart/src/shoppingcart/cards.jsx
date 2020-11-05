import React from 'react';
import {getCartList, getItemId, setCartList, setItemId} from './utility';

const Cards = () => {
    const listItems = [
        {
            name : "Jeans",
            brand : "Levi's",
            cost : 1200,
            off : 300,
        },
        {
            name : "Shirt",
            brand : "Siya Ram",
            cost : 900,
            off : 200,
        },
        {
            name : "Sweater",
            brand : "Oswal",
            cost : 1500,
            off : 400,
        },
        {
            name : "Jacket",
            brand : "Canali",
            cost : 2500,
            off : 500,
        },
        {
            name : "Blazer",
            brand : "Van Huesen",
            cost : 4000,
            off : 500,
        },
    ];

    return (
        <>
            {listItems.map(item => (<Item item = {item} />))}
        </>
    )
}

const Item = ({item}) => {
    return (
        <div className = 'card '>
            <h4>Name : {item.name}</h4>
            <h4>Brand : {item.brand}</h4>
            <h4><del>Cost : INR {item.cost}</del></h4>
            <h4>OFF : {item.off}</h4>
            <h4>Your Pay : {item.cost - item.off}</h4>
            <button
                onClick = {() => {
                    const id = getItemId();
                    const cartItem = {id, ...item};
                    let cartList = getCartList();
                    cartList.push(cartItem);
                    setCartList(cartList);
                    window.alert("Successfully added to cart : " + item.name);
                    setItemId(id + 1);
                }}
            >Add To Cart</button>
        </div>
    );
}

export default Cards;