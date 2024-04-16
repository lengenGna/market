import { vector } from "../../../data";

const SaleProductDiv = (props) => {
    return (
        <div className="sale">
            <div>
                {props.id === "1" && <div className="spaner">
                    <p className="sale1">{props.name}</p>
                    <p className="saleHeader1">{props.headerLa}</p>
                    <img className="vector nona" src={props.anything} alt="" />
                </div>}
                {props.id === "2" && <div className="spaner2">
                    <p className="sale2">{props.name}</p>
                    <p className="saleHeader2">{props.headerLa}</p>
                    <p className="saleAnything2">{props.anything} <span className="saleSpan2">{props.spaner}</span></p>
                </div>}
                {props.id === "3" && <div className="spaner3">
                    <p className="sale3">{props.name}</p>
                    <p className="saleHeader3">{props.headerLa}</p>
                    <p className="saleAnything3">{props.anything} <span className="saleSpan3">{props.spaner}</span></p>
                </div>}
                <button>
                    <p>Shop Now</p><img className="vector" src={vector} alt="" />
                </button>
                <img src={props.imgAll} alt="" />
            </div>
        </div>
    )
};

export default SaleProductDiv;