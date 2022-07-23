import React from "react";
import './Cart.css'

function Cart(props) {
    return (
        <>
            <div className="Cart" >
                <h1> </h1>
                <p> Sản phẩm : {props.name} </p>
                <p> Giá tiền : {props.price} </p>
                <p> Mô tả : {props.des} </p>
                <p> Số lượng : {props.amount} </p>
            </div>


        </>
    )
}
export default Cart