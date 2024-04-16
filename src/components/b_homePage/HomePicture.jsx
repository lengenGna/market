import "./style.css"
import { vector } from "../../data";
import { haddingProps, saleOf, summerSale, specailProductD} from "../../data";
const HomePicture = () => {
    return (
        <div className="farmerGirl wrapper">
            <div className="reseach">
                <div className="saleOfHeader">
                    <h1>{haddingProps.hadding}</h1>
                    <div className="paragraph">
                        <p>{saleOf.name} <span className="headerYellow">{saleOf.number}</span></p>
                        <div className="off-sale">
                            <p>{saleOf.about}</p>
                        </div>
                    </div>
                    <button><p>Shop Now</p> <img src={vector} alt="" /></button>
                </div>
            </div>
            <div className="menuHeaderOf">
                <div className="summerSale">
                    <div className="summerSaleParagraph">
                        <p className="summer">{summerSale.hadding2}<span className="saleOff"> { summerSale.saleOff}</span></p>  
                        <p>{summerSale.forWhat}</p>
                    </div>
                    <button>
                        <p>Shop Now </p> <img src={vector} alt="" />
                    </button>
                </div>
                <div className="specailProduct">
                    <div className="specailDiv">
                    <div className="paragraphSpecail">
                            <p>{specailProductD.name}</p>
                            <p>{specailProductD.about}</p>
                    </div>
                        <button><p>Shop Now</p> <img src={vector} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePicture;