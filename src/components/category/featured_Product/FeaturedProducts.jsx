import { menuButtun,vector } from "../../../data";
import PopularProductsDiv from "../b_popular_products/PopularProductsDiv";
import "./style.css";
import "./screen.css"
const FeaturedProduct = () => {
    return (
        <div className="wrapper">
            <div className="featured flex-container flex">
                <p>Featured Products</p><a href="#view">View All <img src={vector} alt="" /></a>
                </div>
        <div className="featured-product">
            {menuButtun.map((props) => (
                <PopularProductsDiv
                    key={props.id}
                    id={props.id}
                    imgURL={props.imgUrl}
                    name={props.name}
                    cost = {props.cost}
                />
            ))}
            </div>
        </div>
    )
};

export default FeaturedProduct;