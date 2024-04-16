import { rectangle, star5, star0, newBag, eyes, heartA } from "../../../data";
import "./styles.css"
const NewHot = (props) => {
    return (
        <div className="popular-product hotOne">
            <div className="">
                {(props.id === "5dnwqidhf732rc7382h78r3tr87hudjsnna" || props.id === "9dnwqidhf732rc7382h78r3tr87hudjsnda") && <p className="saleFive">Sale 50%</p>}
                <img className="lookLike" src={props.imgURL} alt="" />
            </div>
            <div className="aboutProduct">
                    <p>{props.name}</p>
                <div className="cost">
                    <p>{props.cost} {(props.id === "9dnwqidhf732rc7382h78r3tr87hudjsnda" || props.id === "5dnwqidhf732rc7382h78r3tr87hudjsnna" ) && <s className="slit">29.99$</s>}</p>
                    <button><img className="bag" src={rectangle} alt="" />
                    <img className="newBag" src={newBag} alt="" /></button>
                </div>
            </div>
            <div className="star">
                <img src={star5} alt="" />
                <img src={star5} alt="" />
                <img src={star5} alt="" />
                <img src={star5} alt="" />
                <img src={star0} alt="" />
            </div>
            <div className="absolute">
            <img src={heartA} alt="" />
            <img src={eyes} alt="" />
            </div>
        </div>
    )
};
export default NewHot;