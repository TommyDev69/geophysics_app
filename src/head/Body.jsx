import backgrounds from "../image/Photo.png"
import NavbarContainer from "../navbar/NavbarContainer";
import BodyContent from "./BodyContent";
const Body = () => {
    return ( 
        <div className="container-fluid py-10   bg-cover bg-center h-[889]" style={{ backgroundImage: `url(${backgrounds}) `,  }}>
            <NavbarContainer />
            <BodyContent />
        </div>

    );
}
 
export default Body;