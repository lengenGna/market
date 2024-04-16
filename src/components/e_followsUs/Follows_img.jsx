import { insta } from "../../data";
const FollowsImg = (props) => {
    return (
        <div className="followImg">
            <img src={props.imgName} alt="" />
            <img className="insta" src={insta} alt="" />
        </div>
    )
};
export default FollowsImg;