import { saleA, heartA, eyes, star5, offer ,newBag } from "../../../data"; 
import "./styles.css"

const HotDeal = () => {
    return (
        <div className="main-button">
            <div className="mean">
                <div className="product-on-app">
                    <div className="saleFive"><p>sale 50%</p></div>
                    <div className="bestSale saleFive"><p>best sale</p></div>
                </div>
                <div className="imgOnIt">
                    <img src={saleA} alt="" />
                </div>
                <div className="btn-shop flex">
                <img  className="Icons" src={heartA} alt="" />
                <button className="addToCard">
                    <p>Add to Card </p><img src={newBag} alt="" />
                </button>
                    <img className="Icons" src={eyes} alt="" />
                </div>
            </div>
            <div className="buyNow">
                <div className="nameDeal">
                    <p>Chinese cabbage</p>
                    <p className="costSale">$12.00 <s className="slitBig">$24.00</s></p>
                    <div className="starLight">
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <p>(524 Feedback)</p>
                    </div>
                    <div className="timeOfapple">
                        <img src={offer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HotDeal;