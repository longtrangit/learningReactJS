import React, { useContext } from "react";
import { itemContext } from '../App'
import Item from "./Item";
import './listItem.css'
function Body() {

    const itemsAndClick = useContext(itemContext)
    const items = itemsAndClick.items
    const bookService = itemsAndClick.bookService


    return (
        <div className="listItem">
            {items.map((item, index) => <Item
                name={item.name}
                price={item.price}
                des={item.des}
                amount={item.amount}
                clickHandler={bookService}
                index={index}
            />
            )}


        </div>
    )
}

export default Body;