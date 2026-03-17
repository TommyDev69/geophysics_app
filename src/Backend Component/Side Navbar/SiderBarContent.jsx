const SideBarContent = ({data}) => {
    return ( 
        <>
        {data.map(items =>(
            <div className="w-[287px] flex gap-4 items-center rounded-[10px] md:pl-[18px] pl-[14px] py-[16px]" key = {items.id}>
                <div className="w-[20px]">
                    <img src={items.icon} alt={items.icon} />
                </div>
                <div className="w-[100px]">
                    <p className=" capitalize font-instrument font-medium md:text-[14px] leading-[24px] tracking-[-0.31px] text-[#585858]">
                         {items.name} 
                     </p>   
                </div>
            </div>
        ))}
        </> 
    );
}
 
export default SideBarContent;