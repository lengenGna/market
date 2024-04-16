const HomeInfo = (props) => {
    return (
        <div className="flex homeInfoHow">
            <img src={props.img1} alt="" />
            <div className="textExport ">
                <p>{props.about}</p>
                <p>{props.what}</p>
            </div>
        </div>
    )
};
export default HomeInfo;