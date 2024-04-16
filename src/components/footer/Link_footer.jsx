import { nonoGH } from "../../data";
import "./style.css";
import "./screen.css";
const LinkFooter = () => {
    return (
        <div className="footer_dv ">
            <div className="link_EcoFooter">
                <div>
                    <h1><img src={nonoGH} alt="" />Ecobazar</h1>
                </div>
                <p>Morbi cursus porttitor enim lobortis molestie.
                    Duis gravida turpis dui, eget bibendum magna congue nec.
                </p>
                <div className="prox">
                    <p className="proxP"><span>(219) 555-0114</span> or <span>Proxy@gmail.com</span></p>
                </div>
            </div>
            <div className="link_dv">
                <p>My Account</p>
                <a href="#myAcc">My Account</a>
                <a href="#myAcc">Order History</a>
                <a href="#myAcc"><p className="white">Shopping Cart</p></a>
                <a href="#myAcc">Wishlist</a>
            </div>
            <div className="link_dv">
                <p>Helps</p>
                <a href="#myAcc">Contact</a>
                <a href="#myAcc">Faqs</a>
                <a href="#myAcc">Terms & Condition</a>
                <a href="#myAcc">Privacy Policy</a>
            </div>
            <div className="link_dv">
                <p>Proxy</p>
                <a href="#myAcc">About</a>
                <a href="#myAcc">Shop</a>
                <a href="#myAcc">Product</a>
                <a href="#myAcc">Track Order</a>
            </div>
            <div className="link_dv">
                <p>Categories</p>
                <a href="#myAcc">Fruit & Vegetables</a>
                <a href="#myAcc">Meat & Fish</a>
                <a href="#myAcc">Bread & Bakery</a>
                <a href="#myAcc">Beauty & Health</a>
            </div>
        </div>
    )
};
export default LinkFooter;