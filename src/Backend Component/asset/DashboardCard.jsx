const DashboardCard = ({Cards}) => {
    return ( 
        <>
        {Cards.map(items =>(

            <div className="md:w-[223px] w-full mx-auto  rounded-[10px] text-[#4A5565] border border-[#DADCE0] py-[20px] md:px-[25px] px-4 bg-[#FFFFFF]" id={items.id} >
                <div className="md:w-[195px] flex justify-around items-center">
                    <div className="w-[88px]">
                        <p className=" font-instrument md:text-[14px] leading-[20px] tracking-[-0.15px] font-normal capitalize">{items.cardTitle} </p>
                        <p class="font-instrument font-bold md:text-[28px] text-[20px] leading-[36px] tracking-[0.4px]">{items.numb}</p>
                    </div>
                    <div className="[w-40px]">
                        <img src={items.image} alt={items.cardTitle} className="object-contain w-10"/>
                    </div>
                </div>
            </div>
        ))}
        </>
     );
}
 
export default DashboardCard;