const PopularCategoriesDiv = (props) => {
    return (
        <div>
            <div className="categoryPop">
                <img src={props.imgUrl} alt="" />
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default PopularCategoriesDiv;