import LinkFooter from "./footer/Link_footer";
import MadeBy from "./footer/Made_by";

const Footer = () => {
    return(
        <div id="contact" className="footer">
            <div className="wrapper">
                <LinkFooter />
                <hr className="delet" />
                <MadeBy />
            </div>
        </div>
    )
};

export default Footer;