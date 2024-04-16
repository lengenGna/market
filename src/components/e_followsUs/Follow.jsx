import FollowsImg from "./Follows_img";
import { imn } from "../../data";
import { step, step2, step3, step4, step5, step6 } from "../../data";
import "./style.css";
import "./screen.css"

const Follow = () => {
    return (
        <div className="newFollow">
            <div className="newImgF">
                <a href="#global"><img src={step} alt="" /></a>
                <a href="#global"> <img src={step2} alt="" /></a>
                <a href="#global"><img src={step3} alt="" /></a>
                <a href="#global"> <img src={step4} alt="" /></a>
                <a href="#global"> <img className="stepBA" src={step5} alt="" /></a>
                <a href="#global"> <img className="stepB" src={step6} alt="" /></a>     
            </div>

            <div className="follow laestNews">
            <p>Follow us on Instagram</p>
            <div className="imn">
                {imn.map((props) => (<FollowsImg imgName={props.imgName} />))}
            </div>
        </div>
        </div>
        
    )
};

export default Follow;