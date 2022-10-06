import './Product.scss'
const Product = () => {
    return (
        <div className="product-container">
            <div className="content-left">
                <span>content left</span>
            </div>
            <div className="content-right">
                <div className="title">Giày chạy bộ Nam new Balance - M860E11</div>
                <div className="price">3.695.00</div>
                <div className="size">size: 30</div>
                <div className="action">
                    <label classname="label">Số Lượng</label>
                    <input type="number" min={1} className="quantity" /><br />
                    <button className='buy'>Chọn Mua</button>
                </div>
            </div>
        </div>
    )
}

export default Product
