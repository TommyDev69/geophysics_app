// import Form from "./Form";
import FormValidation from "./FormValidation";

const SignUpContent = () => {
    return (
        <div className="px-4 max-w-[577px]  md:mx-auto flex-col py-8">
            <div className="min-w-[324px]">
                <p class="font-instrument text-[#101010] font-bold text-[22px] leading-[100%] tracking-[0%]">
                 Create Account 
                </p>
                <p className="font-instrument text-[13px] leading-[160%] tracking-[0%] py-2 ">Sign in to your account</p>

                <>
                <FormValidation />
                </>
            </div>

        </div>
      );
}
 
export default SignUpContent;