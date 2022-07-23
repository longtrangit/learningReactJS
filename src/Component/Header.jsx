import React, { useState, useContext } from "react";
import { itemContext } from "../App";
import Cart from "./Cart";
import Total from "./Total";
import './style.css'
import './listCart.css'
function Header() {
    const itemsAndClick = useContext(itemContext)

    const items = itemsAndClick.items
    let total = 0
    let cart
    return (
        <div className="Header">
            <h1> Giỏ hàng của bạn </h1>
            <div className="listCart" >
                {items.map((item) => {
                    total += item.amount * item.price
                    if (item.amount > 0) {
                        cart = <Cart

                            name={item.name}
                            price={item.price}
                            des={item.des}
                            amount={item.amount}
                        />
                        return cart

                    }


                }
                )}
                <Total total={total} />

            </div>
        </div>
    )
}

export default Header;