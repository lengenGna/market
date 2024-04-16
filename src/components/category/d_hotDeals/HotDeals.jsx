import React from "react";
import HotDeal from "./HotDealsDiv";
import { hotDeals, hotDeals2,vector } from "../../../data";
import NewHot from "./NewHot";
import "./styles.css";
import "./screen.css";

let HotDeals = () => {
    return (
        <div className="colorSale">
        <div className="wrapper">
            <div className="flex flex-container">
                <p>Hot Deals</p>
                <a href="#view">View All <img src={vector} alt="" /></a>
            </div>
            <div className="newHot2">
                    <HotDeal />
                <div className="newHot">
                {hotDeals.map((props) => (
                    <NewHot
                        key={props.id}
                        id={props.id}
                        imgURL={props.imgUrl}
                        name={props.name}
                        cost = {props.cost}
                    />
                ))}
                </div>
            </div>
            <div className="screen">
            <div className="newHot">          
                {hotDeals2.map((props) => (
                    <NewHot
                    key={props.id}
                    id={props.id}
                    imgURL={props.imgUrl}
                    name={props.name}
                    cost = {props.cost}
                    />
                ))}
            </div></div>
            </div>
        </div>
    )
};


export default HotDeals;
