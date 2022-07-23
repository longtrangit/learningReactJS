import React, { useContext, useState } from 'react';
import { itemContext } from '../App';
import './additem.css'


const Additems = () => {
    const { setItems } = useContext(itemContext);

    const [noti, setNoti] = useState("Mời bạn thêm sản phẩm")
    const [noti2, setNoti2] = useState()
    const [inputs, setInputs] = useState({
        name: null,
        price: null,
        des: null,
        amount: 0,
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        setNoti("Thêm sản phẩm")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems(items => [...items, inputs])
        setNoti(" Thêm thành công sản phẩm ")
        setNoti2(inputs)
        setInputs({
            name: null,
            price: null,
            des: null,
            amount: 0,
        })

    }

    return (
        <>
            <form className="additem" onSubmit={handleSubmit}>
                <label>Tên sản phẩm:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Giá tiền:
                    <input
                        type="number"
                        name="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Mô tả:
                    <input
                        type="text"
                        name="des"
                        value={inputs.des || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
            <p> {noti} </p>
            {/* <h1> {noti2} </h1> */}

        </>
    )
}



export default Additems;
