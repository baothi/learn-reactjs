const AddNewProduct = () => {
    return (
        <fieldset>
            <legend>AddNewProduct from from:</legend>
            <div className="input-product">
                <label>Name : </label>
                <input type="text" />
            </div>
            <div className="input-product">
                <label>Price : </label>
                <input type="text" />
            </div>
            <div className="input-product">
                <label>Size : </label>
                <input type="text" />
            </div>
            <div className="input-product">
                <label>Color : </label>
                <input type="text" />
            </div>
            <div>
                <button>+ Add New</button>
            </div>
        </fieldset>
    )
}

export default AddNewProduct
