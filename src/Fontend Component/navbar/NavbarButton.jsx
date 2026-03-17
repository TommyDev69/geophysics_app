import { useNavigate } from 'react-router-dom';
const NavbarButton = () => {
    const navigating = useNavigate();
   
    const handleRegister = () => {
        navigating("/Register");
    };

    const navigateLogin =useNavigate();
    
    const handleLogin =() =>{
        navigateLogin("/Login");
    }

    return ( 
        <div className="flex md:min-w-[237px] min-w-0  md:space-x-1 ">
            <div className="flex items-center md:p-4 p-2">
                <button type="button" onClick={handleLogin} className="bg-[#ffffff] py-2 md:py-3 border-2 md:min-w-[108px] min-w-[44px] border-[##DADCE0] opacity-50 rounded-[10px]">
                    <p className="font-instrument text-[#364153] text-[8px] md:text-[16px] leading-[24px] tracking-[-0.31px] capitalize">login</p>
                </button>
            </div>
             <div className="flex items-center md:p-4 p-2">
                <button  onClick={handleRegister} type="button" className="bg-[#585858] border-2 py-2 md:py-3 min-w-[50px] md:min-w-[120px] border-[##DADCE0]  rounded-[10px]">
                    <p className="font-instrument text-[#ffffff] text-[8px] md:text-[16px] leading-[24px] tracking-[-0.31px] capitalize hover:bg">register</p>
                </button>
            </div>
        </div>
    );
}
 
export default NavbarButton;