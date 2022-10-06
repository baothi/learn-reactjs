import './Product.scss'
import snicker from "../../assets/images/snicker.png"
import snicker1 from "../../assets/images/snicker1.png"
import snicker2 from "../../assets/images/snicker2.png"
import snicker3 from "../../assets/images/snicker3.png"
import snicker4 from "../../assets/images/snicker4.png"
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    snicker,
    snicker1,
    snicker2,
    snicker3,
    snicker4,
];

const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(snicker);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)

    const handleClickPreviewImag = () => {
        setIsOpen(true);
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handleClickPreviewImag()} />
                    </div>
                    <div className="img-down">
                        <div className='img-small'>
                            <img src={snicker1} alt="product-up" onClick={() => setCurrentUpImg(snicker1)} />
                        </div>
                        <div className='img-small'>
                            <img src={snicker2} alt="product-up" onClick={() => setCurrentUpImg(snicker2)} />
                        </div>
                        <div className='img-small'>
                            <img src={snicker3} alt="product-up" onClick={() => setCurrentUpImg(snicker3)} />
                        </div>
                        <div className='img-small'>
                            <img src={snicker4} alt="product-up" onClick={() => setCurrentUpImg(snicker4)} />
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
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                    }
                />
            )}
        </div>
    )
}

export default Product
