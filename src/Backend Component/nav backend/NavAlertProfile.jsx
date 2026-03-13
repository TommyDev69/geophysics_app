import profile from "../image/Avatar.png"
import bell from "../image/Bell.png"
const NavAlertProfile = () => {
    return (
        <div className="md:w-[228px] w-[100px]  md:mr-0 mr-[80px] flex  gap-3 items-center px-4">
            <div className="max-w-[36px]">
                <img src={bell} alt="alert" className="max-w-[20px]" />
            </div>
           <div className="block md:flex items-center gap-4">

            <div>
                <img src={profile} alt="initial" />
            </div>

            <div className="max-w-[#119px] hidden md:block">
                <p className="font-instrument font-medium md:text-[14px] leading-[20.14px] tracking-[-0.15px] text-[#101828]">Dr. Adebayo Okon</p>
                <p className="font-instrument font-normal md:text-[12px] text-6 leading-[20.14px] tracking-[-0.15px] text-[#6A7282]">Lead Geophysicist</p>
            </div>
           </div>
        </div>
      );
}
 
export default NavAlertProfile;