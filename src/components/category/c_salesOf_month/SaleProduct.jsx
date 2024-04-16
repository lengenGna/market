import SaleProductDiv from "./SaleProductDiv";
import { saleMonth } from "../../../data";
import "./style.css";
import "./screen.css"

const SaleProduct = () => {
    return (
        <div className="wrapper">
            <div id="page" className="bankai">
            {saleMonth.map(((props) => (
                <SaleProductDiv
                    key={props.id}
                    id={props.id}
                    name={props.name}
                    headerLa={props.headerLa}
                    spaner={props.spaner}
                    anything={props.anything}
                    sector={props.imgVector}
                    imgAll={props.imgAll}
                />
            )))}
            </div>
        </div>
    )
};

export default SaleProduct;