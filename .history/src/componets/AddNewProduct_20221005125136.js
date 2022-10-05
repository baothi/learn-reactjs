import React, { useState } from 'react';
const AddNewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")

    const [isShowDetail, setIsShowDetail] = useState(true)

    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }
        // let object = {
        //     name1: name , 
        //     price1: price,
        //     size1: size,
        //     color1: color
        // }
        // console.log(" >> run Hankdle Click ", object, JSON.stringify(object))
        // localStorage.setItem('productList', JSON.stringify(object));
        let productList = localStorage.getItem('productList');
        if (productList) {
            let arr = JSON.parse(productList);
            console.log('>>> check productList parse', arr);
            arr.push(object);
            localStorage.setItem('productList', JSON.stringify(object));
        } else {
            localStorage.setItem('productList', JSON.stringify(object));
        }
        // console.log('>>> check productList parse', JSON.parse(productList));
    }

    const handleHideShow = () => {
        // cách 1 viết vầy
        setIsShowDetail(!isShowDetail)
        // cách 2 viết vầy

        // let curentStatus = isShowDetail;
        // if(isShowDetail === true) curentStatus = false;
        // if(isShowDetail === false) curentStatus = true;
        // setIsShowDetail(curentStatus)
    }

    localStorage.setItem('name', "bao thi");
    localStorage.setItem('channel', "hoc lạp trinh");
    const name1 = localStorage.getItem('name');
    console.log(">>> check name = : ", name1);


    return (
        <div>
            {
                isShowDetail === true &&
                <fieldset>
                    <legend>AddNewProduct from from:</legend>
                    <div className="input-product">
                        <label>Name : </label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Price : </label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Size : </label>
                        <input value={size} type="text" onChange={(event) => setSize(event.target.value)} />
                    </div>
                    <div className="input-product">
                        <label>Color : </label>
                        <input value={color} type="text" onChange={(event) => setColor(event.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>+ Add New</button>
                    </div>
                </fieldset>
            }
            {/* {
                isShowDetail === true && <div onClick={() => { handleHideShow() }}>Hide this form</div>
            }
            {
                isShowDetail === false && <div onClick={() => { handleHideShow() }}>Show the form</div>
            } */}
            {
                isShowDetail === true ? <div onClick={() => { handleHideShow() }}>Hide this form</div> : <div onClick={() => { handleHideShow() }}>Show the form</div>
            }
        </div>
    )
}

export default AddNewProduct
