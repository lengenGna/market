import EcoBazar from "./a_header/EcoBazar"
import MenuHeader from "./a_header/Menu";
import { seach, header_menu } from "../data";
import HomeEffect from "./b_homePage/HomEffect";
const Header = () => {
    return (
        <div>
            <EcoBazar
                imgU={seach}
                img1={header_menu.img1}
                img3={header_menu.img3}
                whatName={header_menu.whatName}
                number={header_menu.number}
            />
            <MenuHeader
            />
            <HomeEffect />
        </div>
    )
    
};
export default Header;