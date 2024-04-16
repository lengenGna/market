import "./style.css"
import "./screen.css"
import { phoneCall, chevron_black, chevron_white, menuCategory } from "../../data";
const MenuHeader = () => {
    return (
        <div className="navigation">
            <div className="wrapper nav-linkDiv flex">
                <div className="menu">
                    <button className="menuCategory"><img src={menuCategory} alt="" /><p className="menuAbout">All Categories <span>→</span><span>↓</span></p></button>
                    <div className="realMenu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#blog">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-links flex">
                    <a href="#home"> <p> Home</p><img src={chevron_white} alt="" /></a>  
                    <a href="#shop"><p>Shop</p><img src={chevron_black} alt="" /></a>   
                    <a href="#page"><p>Pages</p><img src={chevron_black} alt="" /></a>  
                    <a href="#blog"><p>Blog</p><img src={chevron_black} alt="" /></a>  
                    <a href="#about"><p>About Us</p></a> 
                    <a href="#contact"><p>Contact Us</p></a> 
                </div>
                <div className="contact-number flex">
                    <img src={phoneCall} alt="" />
                    <p>+984651318421</p>
                </div>
            </div>
        </div>
    )
};

export default MenuHeader;