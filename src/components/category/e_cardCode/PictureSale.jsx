import { summerOffer,newVector } from "../../../data";
import "./style.css";
import "./screen.css";
const PictureSummer = () => {
    return (
        <div className="wrapper">
            <div className="flex-container">
                <p>Summer Sale</p>
            </div>
        <div id="blog" className="pictureSummer">
            {/* <img src={summerOffer.pictureAs} alt="" /> */}
            {/* <div className="tomato"></div> */}
            <div className="tomatoSale">
                <p>{summerOffer.name }</p>
                <p className="BigParagraph"><span className="BigSpan">{summerOffer.persent}</span> { summerOffer.perAbout}</p>
                <p className="offerInfo">{summerOffer.info}</p>
                <button><p>Shop Now</p><img src={newVector} alt="" /></button>
            </div>
            </div>
        </div>
    )
};

export default PictureSummer;
// Summer Sale
//37% OFF
//Free on all your order, Free Shipping and 30 days money-back guarantee