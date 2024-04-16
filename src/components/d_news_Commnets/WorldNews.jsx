import { usually } from "../../data";
import "./style.css";
import "./screen.css";
const WorldNews = (props) => {
    return (
        <div className="worldNews">
            <div className="worldNews-Picture">
                <div className="PictureNew">
                    <div className="date ">
                        <p>{props.day}</p>
                        <p>{props.month}</p>
                    </div>
                <img src={props.imageB} alt="" />
                </div>
                <div className="worldInfo gapNew">
                    <img src={usually.icons1} alt="" />
                    <p>{usually.name1}</p>
                    <img src={usually.icons2} alt="" />
                    <p>{usually.name2}</p>
                    <img src={usually.icons3} alt="" />
                    <p>{usually.name3}</p>
                </div>
                <p className="worldNewsPar">{props.worldNews}</p>
                <button><p className="btn-p">Read More →</p></button>
            </div>
        </div>
    )
};

export default WorldNews;