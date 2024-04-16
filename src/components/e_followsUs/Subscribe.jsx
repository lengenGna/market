import { insta2, fac, twi, p } from "../../data";
import "./screen.css"

const Sunbscribe = () => {
    return (
        <div className="helpDiver">
            <div className="wrapper">
        <div className="bro sub_s">
            <div className="sub_info">
                <p>Subcribe our Newsletter</p>
                <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className="sub_withEmail">
                <input type="text" placeholder="Your email address" />
                <button>Subscribe</button>
                <div className="icons_sub">
                    <img src={fac} alt="" />
                    <img src={twi} alt="" />
                    <img src={ p } alt="" />
                    <img src={insta2} alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>

    )
};

export default Sunbscribe;