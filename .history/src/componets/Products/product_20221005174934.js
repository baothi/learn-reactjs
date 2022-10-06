import './Product.scss'
import snicker from "../../assets/images/snicker.jpg"

const Product = () => {
    return (
        <div className="product-container">
            <div className="content-left">
                <div className="img-up">
                    <img src="./images/snicker.jpg" alt="product-up" />
                </div>
                <div className="img-down"></div>
            </div>
            <div className="content-right">
                <div className="title">Giày chạy bộ Nam new Balance - M860E11</div>
                <div className="price">3.695.00</div>
                <div className="size">size: 30</div>
                <div className="action">
                    <label classname="quantity">Số Lượng</label>
                    <input type="number" min={1} value={1} />
                    <button className='buy'>Chọn Mua</button>
                </div>
            </div>
        </div>
    )
}

export default Product
