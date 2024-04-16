import Follow from "./e_followsUs/Follow";
import Sunbscribe from "./e_followsUs/Subscribe";


const FollowUs = () => {
    return (
        <div className="">
            <div className="wrapper">
                <div className="screenNews">
                    <Follow />
                </div>
            </div>
            <div className="emailAdress">
                <Sunbscribe />
            </div>
        </div>
    )
};

export default FollowUs