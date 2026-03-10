import search from "../image/Search.png"
const NavSearchContent = () => {
    return (  
        <form action="">
            <div className="flex items-center">
                <div>
                    <img src={search} className="max-w-[20px]" alt="" />
                </div>
                <input type="search" className="max-w-[#677px] rounded-[10px] border-1 py-[8px] pl-[40px] pr-[16px] border-[#DADCE0] " />

            </div>
        </form>
    );
}
 
export default NavSearchContent;