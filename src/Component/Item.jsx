import React, { useState } from "react";
import './item.css'


function Item(props) {


    return (
        <div className="item">
            <div className="content">
                <p> Sản phẩm : {props.name} </p>
                <p> Giá tiền : {props.price} </p>
                <p> Mô tả : {props.des} </p>

            </div>
            <div>
                <button className="btnClick" onClick={() => props.clickHandler(props.index)} > Chọn mua </button>
            </div>
        </div>
    )
}

export default Item;