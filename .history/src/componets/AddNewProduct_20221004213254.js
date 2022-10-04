import { useState } from "react"
const AddNewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")
    const isShow = false;
    const handleClickBtn = () => {
        console.log(" >> run Hankdle Click ", name, price, size, color)
    }
    return (
        <div>
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

            {
                isShow === true && <div>Hide this form</div>
            }
            {
                isShow === true && <div>Show the form</div>
            }
        </div>
    )
}

export default AddNewProduct
