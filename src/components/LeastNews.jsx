import WorldNews from "./d_news_Commnets/WorldNews";
import WorldTestimonials from "./d_news_Commnets/WorldTestimonials";
import { leastNewsInfo, comments } from "../data";
import "./LeastScreen.css";

const LeastNews = () => {
    return (
        <div id="abou" className="least">
            <div className="wrapper">
                <div className="laestNews"> 
                    <p>Lates News</p>
                </div>
                <div className="news">
                    {/* in world news files / style.css  */}
            {leastNewsInfo.map((props) => (
                <WorldNews
                    imageB={props.imageB}
                    day={props.day}
                    month={props.month}
                    worldNews={props.worldNews}
                />
            ))}
                </div>
            </div>
            <div className="test">
                <div className=""></div>
                <div className="testOver wrapper">
            {comments.map((props) => (
                <WorldTestimonials
                    id={props.id}
                    information={props.information}
                    imgCustomer={props.imgCustomer}
                    name={props.name}
                    byWho={props.byWho}
                />
            ))}</div>
                </div>
        </div>
    )
};

export default LeastNews;