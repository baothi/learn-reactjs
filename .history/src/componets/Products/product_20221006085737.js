import './Product.scss'
import snicker from "../../assets/images/snicker.png"
import snicker from "../../assets/images/snicker1.png"
import snicker from "../../assets/images/snicker2.png"
import snicker from "../../assets/images/snicker3.png"
import snicker from "../../assets/images/snicker4.png"

const Product = () => {
    return (
        <div className="product-container">
            <div className="content-left">
                <div className="img-up">
                    <img src={snicker} alt="product-up" />
                </div>
                <div className="img-down">
                    <div className='img-small'>
                        <img src={snicker1} alt="product-up" />
                    </div>
                    <div className='img-small'>
                        <img src={snicker2} alt="product-up" />
                    </div>
                    <div className='img-small'>
                        <img src={snicker3} alt="product-up" />
                    </div>
                    <div className='img-small'>
                        <img src={snicker4} alt="product-up" />
                    </div>
                </div>
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
