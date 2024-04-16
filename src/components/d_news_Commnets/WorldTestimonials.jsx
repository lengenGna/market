import { star5,dotla } from "../../data";
import "./screen.css";
const WorldTestimonials = (props) => {
    return (
        <div className="cliente">
            <div className="nothing">
            <img src={dotla} alt="" />
            <p>{props.information}</p>
            <div className="clienteGrade flex">
                <div className="customer flex">
                    <div className="hello flex">
                    <img src={props.imgCustomer} alt="" />
                   
                    <div className="byWho">
                        <p>{props.name}</p>
                        <p>{props.byWho}</p>
                            </div>
                        </div>
                    <div className="starBob">
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                        <img src={star5} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};
export default WorldTestimonials;