import PopularCategoriesDiv from "./PopularCategoriesDiv";
import { information,vector } from "../../../data";
import "./style.css"
import "./screen.css"

const PopularCategories = () => {
    return (
      <div className="wrapper">
        <div id="shop" className="flex-container flex">
          <p>Popular Categories</p> <a href="http://">View All<img src={vector} alt="" /></a>
        </div>
          <div className = "mainCategory">
        {information.map((props) => ( 
          <PopularCategoriesDiv
            key={props.id}
            imgUrl={props.imgURL}
            name={props.name}           
          />
        ))}
            </div>
        </div>
    )
};

export default PopularCategories;