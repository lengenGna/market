import React from "react";
import PopularCategories from "./category/a_popular_categories/PopularCategories";
import PopularProducts from "./category/b_popular_products/PopularProducts";
import SaleProduct from "./category/c_salesOf_month/SaleProduct";
import HotDeals from "./category/d_hotDeals/HotDeals";
import PictureSummer from "./category/e_cardCode/PictureSale";
import FeaturedProduct from "./category/featured_Product/FeaturedProducts";


const Categories = () => {
    return (
        <div>
            <PopularCategories />
            <PopularProducts />
            <SaleProduct />
            <HotDeals />
            <PictureSummer />
            <FeaturedProduct />
        </div>
    )
};

export default Categories;