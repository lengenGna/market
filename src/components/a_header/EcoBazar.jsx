import { bala } from "../../data";
import "./style.css"
import "./screen.css"
const EcoBazar = (props) => {
    // props
    return (
        <div className="ecoBazar flex wrapper">
            <div>
                <h1><img src={bala} alt="" />Ecobazar</h1>
            </div>

            {/* Header Logo */}

            <div className="seach">
                    <input type="text" placeholder="Seach" />
                    <button>
                        <p>Search</p>
                    </button>
            </div>

                {/* Seach part */}

            <div className="contact flex">

                {/* start */}

                <button><img src={props.img1} alt="" /></button>
                
                {/* expemental codes */}

                <button> <img src={props.img3} alt="" /></button>
               
                {/* end */}

                <div className="shopping">
                    <p>{ props.whatName}</p>
                    <p>{ props.number}</p>
                </div>
            </div>
        </div>
    )
};
export default EcoBazar;