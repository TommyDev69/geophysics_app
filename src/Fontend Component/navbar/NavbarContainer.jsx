import NanBrand from "./NanBrand";
import NavbarButton from "./NavbarButton";

const NavbarContainer = () => {
    return (  
        <div className="md:container flex justify-between items-center mx-auto bg-[#F4F4F4] rounded-[10px] py-2">
            <NanBrand />
            <NavbarButton />
        </div>
    );
}
 
export default NavbarContainer;