const DashboardResentCard = ({DashData, handleDataPath}) => {

    return ( 
            <div className="grid grid-cols-3 gap-4 my-4">
            {DashData.map((dashboardData) => (
                <div className="rounded-[10px] border px-[24px] pt-[24px] pb-[14px] border-[#DADCE0] font-instrument" key={dashboardData.id}>
                    <div className="flex justify-between items-center">
                        <div className="bg-[#ECECEC] rounded-[16px] py-2 px-3">{dashboardData.status}</div>
                        <div className="bg-[#ECECEC] rounded-[16px] py-2 px-3">{dashboardData.action}</div>

                    </div>
                    <div>
                        <div className="flex flex-col capitalize pt-4 pb-[24px]" >
                            <p className="font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.44px] text-[#101828]">{dashboardData.title}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">{dashboardData.Content}</p>
                            <div className="flex justify-between">
                                <div className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">Objective</div>
                                <div className="font-instrument font-bold text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">{dashboardData.objective}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">Created</div>
                                <div className="font-instrument font-bold text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">{dashboardData.timeStamp}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-[24px] items-center">
                        <button onClick={() => handleDataPath(dashboardData.linking)} className="w-full py-[7px] flex justify-center items-center bg-[#585858] rounded-[10px] font-instrument text-[#ffffff]">
                            {dashboardData.buttonContent}
                        </button>
                    </div>
                </div>
            ))}
            </div>
     );
}
 
export default DashboardResentCard;