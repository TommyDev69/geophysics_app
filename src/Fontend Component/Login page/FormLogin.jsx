// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const FormLogin = ({handleSubmit, formData, handleChange, error, handleBacktoRegister}) => {

    const navigateDashboard = useNavigate();

    // const handleDashboard = () => {
    //     navigateDashboard("/Dashboard");
    // }
    return (
       <form onSubmit={handleSubmit}>
         <div className="max-w-[577px] mx-auto  pt-20">
            <div className="min-w-[272px]">
                <div className="w-[272px]">
                    <p className="font-instrument font-bold text-[30px] leading-[100%] tracking-normal">Welcome🌹</p>
                </div>
                <div className="w-[272px]">
                    <p className="font-instrument text-[15px] leading-[160%] tracking-normal  ">Sign in to your account</p>
                </div>
            </div>
            <div className="w-[272px] py-10">
                <div className="min-w-[577px]">
                    <div className="pb-8">

                        <label htmlFor="" className="max-w-[138px] font-instrument font-medium text-[13 px] leading-[150%] tracking-[-5%] ">Your Email Address</label>
                        <div className="w-full">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="py-[12px] w-full  pl-[39px] pr-[195px] rounded-[10px] border bg-[#F5F5F5]" placeholder="Enter your Email Address" />
                        </div>
                        <p className="text-red-500">{error.email}</p>

                    </div>

                    <label htmlFor="" className="max-w-[138px] font-instrument font-medium text-[13 px] leading-[150%] tracking-[-5%] ">Your password</label>
                    <div className="w-full">
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="py-[12px] w-full  pl-[39px] pr-[195px] rounded-[10px] border bg-[#F5F5F5]" placeholder="Enter your password" />
                    </div>
                    <p className="text-red-500">{error.password}</p>
                    <div className="flex pt-4 gap-2 ">
                        <p className="font-instrument font-normal text-[16px] leading-[100%] tracking-normal">Forget password?</p>
                        <a href="#" className="font-instrument font-bold text-[16px] leading-[100%] tracking-normal ">Reset</a>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <button type="submit" className="py-[12px] w-full px-[195px] bg-[#585858] rounded-[10px] capitalize text-[#ffffff]">login</button>
            </div>
            <div className="flex pt-4 gap-2 max-w-[577px] justify-center   pb-8 ">
                <p className="font-instrument font-normal  text-[15px] leading-[150%] tracking-[-5%]">Don’t have an account?</p>
                <button type='button' onClick={() => handleBacktoRegister("/register")}  className="font-instrument font-bold text-[15px] leading-[150%] tracking-[-5%] "> Create an Account</button>
            </div>
        </div>
       </form>
    );
}

export default FormLogin;