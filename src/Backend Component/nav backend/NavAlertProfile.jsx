import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../redux/slice/user/usersSlice";
import { useEffect } from "react";
import profile from "../image/Avatar.png"
import bell from "../image/Bell.png"

const NavAlertProfile = () => {
     // dispatch
        const dispatch = useDispatch();
        const { profile } = useSelector((state) => state.users);
    
        useEffect(() => {
            dispatch(getUserProfileAction());
        }, [dispatch]);
    return (
        <div className="md:w-[228px] w-[100px]  md:mr-0 mr-[80px] flex  gap-3 items-center px-4">
            <div className="max-w-[36px]">
                <img src={bell} alt="alert" className="max-w-[20px]" />
            </div>
           <div className="block md:flex items-center gap-4">

            <div className="w-[40px] rounded-full py-4 px-4 flex justify-center items-center bg-[#f2f2f2]">
                <p className="font-instrument uppercase text-[#101828] font-semibold text-[14px]">ao</p>
            </div>

            <div className="max-w-[#119px] hidden md:block">
                <p className="font-instrument font-medium md:text-[14px] leading-[20.14px] tracking-[-0.15px] text-[#101828]">{profile?.message?.fullName} </p>
                <p className="font-instrument font-normal md:text-[12px] text-6 leading-[20.14px] tracking-[-0.15px] text-[#6A7282]">Lead Geophysicist</p>
            </div>
           </div>
        </div>
      );
}
 
export default NavAlertProfile;