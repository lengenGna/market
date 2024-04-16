import PopularProductsDiv from "./PopularProductsDiv";
import { product, vector } from "../../../data";
import "./style.css"
import "./screen.css"

const PopularProducts = () => {
  return (
    <div className="wrapper">
      <div className="flex-product">
        <div className="meaning">
          <p className="meaningFirst">Popular Products</p>
          <a href="http://"><p>View All</p><img src={vector} alt="" /></a>
        </div>
        <div className=" product-div">
        {product.map((props) => (
          <PopularProductsDiv
            key={props.id}
            id={props.id}
            imgURL={props.imgUrl}
            name={props.name}
            cost = {props.cost}
          />
        ))}</div>
      </div>
    </div>
  )
};

export default PopularProducts;