import React from 'react';
import { getCartList, setCartList } from './utility';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const headers = ["Name", "Brand", "Effective Cost", "Action"];
    const cartList = getCartList();
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
                                <td><DelBtn id = {item.id} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>Total Cost : {total} </h3>
        </div>
    );
}

const DelBtn = ({id}) => {
    const history = useHistory();
    return (
        <button
            onClick = {() => {
                debugger;
                console.log(typeof getCartList()[0].id + " " + typeof +id );
                let cartList = getCartList().filter(item => item.id !== id);
                setCartList(cartList);
                window.alert("Deleted Successfully");
                history.push('/');
            }}
        >Remove From Cart</button>
    )
}

export default Cart;