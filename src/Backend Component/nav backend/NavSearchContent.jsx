import search from "../image/Search.png"
const NavSearchContent = () => {
    return (  
        <form action="">
           <div className=" hidden md:flex items-center relative  min-w-[677px] ">
                <div className=" absolute left-4">
                    <img src={search} className="max-w-[20px] " alt="" />
                </div>
                <input type="search" className=" w-full rounded-[10px] border-2 py-[8px] pl-[40px] pr-[16px] border-[#DADCE0] " />

            </div>
        </form>
    );
}
 
export default NavSearchContent;