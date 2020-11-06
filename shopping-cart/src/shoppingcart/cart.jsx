import React, {useState, useEffect} from 'react';
import { getCartList, setCartList as setAsLocal, setItemId} from './utility';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const headers = ["Name", "Brand", "Effective Cost", "Action"];
    
    function updateHooks() {
        const cartList = getCartList();

        if(cartList) {
            setCartList(cartList);
        } else {
            setAsLocal([]);
            setItemId(1);
        }
    }

    useEffect(() => {
        updateHooks();
    }, []); 

    const total = cartList.reduce((acc, item) => acc += (item.cost - item.off), 0);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headers.map(head => <th>{head}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.cost - item.off}</td>
                                <td><DelBtn id = {item.id} updateHooks = {updateHooks} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>Total Cost : {total} </h3>
        </div>
    );
}

const DelBtn = ({id, updateHooks}) => {
    return (
        <button
            onClick = {() => {
                debugger;
                console.log(typeof getCartList()[0].id + " " + typeof +id );
                let cartList = getCartList().filter(item => item.id !== id);
                setAsLocal(cartList);
                window.alert("Deleted Successfully");
                updateHooks()
            }}
        >Remove From Cart</button>
    )
}

export default Cart;