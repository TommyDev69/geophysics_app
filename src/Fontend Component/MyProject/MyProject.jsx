import search from "../image/Frame.png"

export default function MyProject() {
    return (
        <div className=" flex-1 flex flex-col w-[967px] gap-[8px] mx-auto">
            {/* Title */}
            <div className="flex flex-col max-w-[967px] gap-[8px]">
                <div className="flex h-[36px] pt-[15px]">
                    <h1 className="font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4px] text-[#101828]">
                        My Project
                    </h1>
                </div>
                <div className="max-w-[967px] h-[24px] mt-[8px]">
                    <p className="font-instrument font-normal text-base pt-[10px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">
                        Manage all your survey and project plans
                    </p>
                </div>
            </div>

            {/* Search + Filters */}
            <div className="flex max-w-full justify-between mt-[18px] items-center h-[68px] border border-[#DADCE0] rounded-[10px] px-[24px] py-[8px] bg-white">
                {/* Search Input */}
                <div className="relative w-[850px] h-[42px]">
                    <img
                        src={search}
                        alt="search"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
                    />
                    <input
                        placeholder="Search Project..."
                        className="w-full h-full pl-[40px] pr-[16px] py-[8px] rounded-[10px] border outline-none"
                    />
                </div>

                {/* Select Buttons */}
                <div className="flex gap-[12px]">
                    <select className="w-[149px] h-[42px] rounded-[10px] border pl-[17px] text-[#0A0A0A]">
                        <option>All types</option>
                    </select>
                    <select className="w-[149px] h-[42px] rounded-[10px] border pl-[17px] text-[#0A0A0A] ">
                        <option className="text-[#0A0A0A]">Status</option>
                    </select>
                </div>
            </div>

            <div className="md:container font-instrument w-[147px] h-[20px] mt-[8px] font-normal text-[14px] leading-[14px] tracking-[-0.15px] text-[#4A5565]">
                <p>Showing 4 of 4 projects</p>
            </div>

            {/* Card Section */}
            <div className="grid lg:grid-cols-3 w-[967px] h-[624px] gap-[16px]">
                <div className=" flex flex-col w-[306px] h-[286px] gap-[16px] rounded-[10px] text-[#FFFFFF] border p-1 border-[#DADCEO]">
                    {/* Card Header */}
                    <div className="flex flex-col max-w-sm bg-white w-[304px] h-[108px] px-[24px] pl-[24px] gap-[8px] ">
                        <div className="flex max-w-[256px] h=-[24px] justify-between mt-[14px]">
                            <div className="w-[56px] h-[24px] rounded-[16777200px] bg-[#ECECEC] flex items-center justify-center">
                                <span className="font-instrument text-[#585858] text-[12px] font-medium w-[39px] h-[16px] leading-[16px] tracking-[0px]">
                                    Survey
                                </span>

                            </div>
                            <div className="w-[56px] h-[24px] rounded-[16777200px] bg-[#ECECEC] flex items-center justify-center">
                                <span className="font-instrument text-[#364153] text-center text-[12px] font-medium w-[29px] h-[16px] leading-[16px] tracking-[0px]">
                                    Draft
                                </span>

                            </div>
                        </div>
                        {/* Card Title */}
                        <div className="w-[256px] h-[28px]">
                            <h2 className="font-instrument font-semiBold text-[18px] leading-[28px] tracking-[-0.44px] w-[212px] h-[28px] text-[#101828]">
                                Abuja Mining Sites Analysis
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col w-[304px] h-[156px] pl-[24px] pr-[24px] gap-[19px]">
                        <div className="w-[256px] h-[20px]">
                            <p className="font-instrument w-[208px] h-[20px] mt-[0.5px] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">
                                Mineral exploration in FCT region
                            </p>
                        </div>
                        <div className="flex flex-col w-[256px] h-[66px] gap-[8px]">
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <span className="font-instrument font-normal text-[14px] leading-[20px] w-[61px] h-[20px] mt-[0.5px] tracking-[0.5px] text-[#4A5565]">Objective</span>
                                <span className="font-instrument font-medium text-[14px] w-[137px] h-[20px] mt-[0.5px] leading-[20px] tracking-[-0.15px] text-[#101828]">Resource Exploration</span>
                            </div>
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <span className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] w-[51px] h-[20px] text-[#4A5565]">Created</span>
                                <span className="font-instrument font-medium text-[14px] leading-[20px] mt-[0.25px] tracking-[-0.15px] w-[77px] h-[20px] text-[#101828]">2026-02-25</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[256px] h-[32px] rounded-[10px] bg-[#585858] mx-auto m-[20px]">
                        <button className="font-instrument mb-[5px] font-medium text-[14px] w-[85px] h-[20px] mt-[6.5px] ml-[86px] justify-center leading-[20px] tracking-[-0.15px] text-[#FFFFFF]">
                            Open Project
                        </button>
                    </div>
                </div>

                <div className=" flex flex-col w-[306px] h-[286px] p-[1px] rounded-[10px] text-[#FFFFFF] border p-1 border-[#DADCEO]">
                    {/* Card Header */}
                    <div className="flex flex-col max-w-sm bg-white w-[304px] h-[108px] px-[24px] pl-[24px] gap-[8px] ">
                        <div className="flex max-w-[256px] h=-[24px] justify-between mt-[14px]">
                            <div className="w-[56px] h-[24px] rounded-[16777200px] bg-[#ECECEC] flex items-center justify-center">
                                <span className="font-instrument text-[#585858] text-[12px] font-medium w-[39px] h-[16px] leading-[16px] tracking-[0px]">
                                    Survey
                                </span>

                            </div>
                            <div className="w-[56px] h-[24px] rounded-[16777200px] bg-[#E5E5E5] flex items-center justify-center">
                                <span className="font-instrument text-[#111111] text-[12px] font-medium leading-[16px] tracking-[0px]">
                                    Active
                                </span>
                            </div>
                        </div>
                        {/* Card Title */}
                        <div className="w-[256px] h-[28px]">
                            <h2 className="font-instrument font-semiBold text-[18px] leading-[28px] tracking-[-0.44px] w-[212px] h-[28px] text-[#101828]">
                                Lagos Coastal Survey
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-[304px] h-[156px] pl-[24px] pr-[24px] gap-[30px]">
                        <div className="w-[256px] h-[20px]">
                            <p className="font-instrument w-[244px] h-[40px] mt-[0.5px] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">
                                Geophysical survey of coastal erosion patterns
                            </p>
                        </div>
                        <div className="flex flex-col w-[256px] h-[66px] gap-[8px]">
                            <div className="flex w-[256px] h-[48px] justify-between gap-[8px]">
                                <span className="font-instrument font-normal text-[14px] leading-[20px] w-[61px] h-[20px] mt-[0.5px] tracking-[0.5px] text-[#4A5565]">Objective</span>
                                <span className="font-instrument font-medium text-[14px] w-[176 px] h-[20px] mt-[0.5px] leading-[20px] tracking-[-0.15px] text-[#101828]">Environmental Assessment</span>
                            </div>
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <span className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] w-[51px] h-[20px] text-[#4A5565]">Created</span>
                                <span className="font-instrument font-medium text-[14px] leading-[20px] mt-[0.25px] tracking-[-0.15px] w-[78px] h-[20px] text-[#101828]">2026-02-20</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[256px] h-[32px] rounded-[10px] bg-[#585858] mx-auto m-[20px]">
                        <button className="font-instrument mb-[5px] font-medium text-[14px] w-[85px] h-[20px] mt-[6.5px] ml-[86px] justify-center leading-[20px] tracking-[-0.15px] text-[#FFFFFF]">
                            Open Project
                        </button>
                    </div>
                </div>

                <div className=" flex flex-col w-[306px] h-[286px] rounded-[10px] text-[#FFFFFF] border p-1 border-[#DADCEO]">
                    {/* Card Header */}
                    <div className="flex flex-col max-w-sm bg-white w-[304px] h-[108px] px-[24px] pl-[24px] gap-[8px] ">
                        <div className="flex max-w-[256px] h=-[24px] justify-between mt-[14px]">
                            <div className="flex w-[85px] h-[24px] rounded-[16777200px] bg-[#F2F2F2] items-center justify-center">
                                <span className="font-instrument text-[#525252] text-[12px] font-medium w-[68px] h-[16px] leading-[16px] tracking-[0px]">
                                    Project Plan
                                </span>

                            </div>
                            <div className="w-[51px] h-[24px] rounded-[16777200px] bg-[#E5E5E5] flex items-center justify-center">
                                <span className="font-instrument text-[#111111] text-center text-[12px] font-medium w-[36px] h-[16px] leading-[16px] tracking-[0px]">
                                    Active
                                </span>
                            </div>
                        </div>
                        {/* Card Title */}
                        <div className="w-[256px] h-[28px]">
                            <h2 className="font-instrument font-semiBold text-[18px] leading-[28px] tracking-[-0.44px] w-[193px] h-[28px] text-[#101828]">
                                Lagos Survey Execution
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-[304px] h-[148px] pl-[24px] pr-[24px] gap-[16px]">
                        <div className="w-[256px] h-[40px]">
                            <p className="font-instrument w-[243px] h-[40px] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">
                                Field execution plan for Lagos coastal survey
                            </p>
                        </div>
                        <div className="flex flex-col w-[256px] h-[48px] gap-[8px]">
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <div className="w-[61.33px] h-[20px]">
                                    <span className="font-instrument font-normal text-[14px] leading-[20px] w-[61px] h-[20px] mt-[0.5px] tracking-[0.5px] text-[#4A5565]">Objective</span>
                                </div>
                                <div className="w-[178px] h-[20px]">
                                    <span className="font-instrument font-medium text-[14px] w-[176px] h-[20px] mt-[0.5px] leading-[20px] tracking-[-0.15px] text-[#101828]">Environmental Assessment</span>
                                </div>
                            </div>
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <div className="w-[51.41px] h-[20px]">
                                    <span className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] w-[52px] h-[20px] text-[#4A5565]">Created</span>
                                </div>
                                <div className="W-[83px] h-[20px]">
                                    <span className="font-instrument font-medium text-[14px] leading-[20px] mt-[0.25px] tracking-[-0.15px] w-[78px] h-[20px] text-[#101828]">2026-02-25</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[256px] h-[32px] rounded-[10px] bg-[#585858] mx-auto m-[20px]">
                        <button className="font-instrument mb-[5px] font-medium text-[14px] w-[85px] h-[20px] mt-[6.5px] ml-[86px] justify-center leading-[20px] tracking-[-0.15px] text-[#FFFFFF]">
                            Open Project
                        </button>
                    </div>

                </div>

                <div className=" flex flex-col w-[306px] h-[314px] rounded-[10px] text-[#FFFFFF] border p-1 border-[#DADCEO]">
                    {/* Card Header */}
                    <div className="flex flex-col max-w-sm bg-white w-[304px] h-[136px] px-[24px] pt-[24px] gap-[8px] ">
                        <div className="flex max-w-[256px] h=-[24px] justify-between">
                            <div className="flex w-[55px] h-[24px] rounded-[16777200px] bg-[#F2F2F2] items-center justify-center">
                                <span className="font-instrument text-[#525252] text-[12px] font-medium w-[39px] h-[16px] leading-[16px] tracking-[0px]">
                                    Survey
                                </span>

                            </div>
                            <div className="w-[71px] h-[24px] rounded-[16777200px] bg-[#D8D8D8] flex items-center justify-center">
                                <span className="font-instrument text-[#111111] text-center text-[12px] font-medium w-[56px] h-[16px] leading-[16px] tracking-[0px]">
                                    Complete
                                </span>
                            </div>
                        </div>
                        {/* Card Title */}
                        <div className="w-[256px] h-[56px]">
                            <h2 className="font-instrument font-semiBold text-[18px] leading-[28px] tracking-[-0.44px] w-[214px] h-[56px] text-[#101828]">
                                Port Harcourt Foundation Study
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-[304px] h-[148px] px-[24px]  gap-[8px]">
                        <div className="w-[256px] h-[40px]">
                            <p className="font-instrument w-[182px] h-[40px] mt-[0.5px] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#4A5565]">
                                Subsurface investigation for construction
                            </p>
                        </div>
                        <div className="flex flex-col w-[256px] h-[48px] gap-[8px]">
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <div className="w-[61.33px] h-[20px]">
                                    <span className="font-instrument font-normal text-[14px] leading-[20px] w-[61px] h-[20px] mt-[0.5px] tracking-[0.15px] text-[#4A5565]">Objective</span>
                                </div>
                                <div className="w-[166px] h-[20px]">
                                    <span className="font-instrument font-medium text-[14px] w-[164px] h-[20px] mt-[0.5px] leading-[20px] tracking-[-0.15px] text-[#101828]">Environmental Assessment</span>
                                </div>
                            </div>
                            <div className="flex w-[256px] h-[20px] justify-between">
                                <div className="w-[51.41px] h-[20px]">
                                    <span className="font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] w-[52px] h-[20px] text-[#4A5565]">Created</span>
                                </div>
                                <div className="W-[78.88px] h-[20px]">
                                    <span className="font-instrument font-medium text-[14px] leading-[20px] mt-[0.5px] tracking-[-0.15px] w-[73px] h-[20px] text-[#101828]">2026-02-25</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[256px] h-[32px] rounded-[10px] bg-[#585858] mx-auto m-[20px]">
                        <button className="font-instrument mb-[5px] font-medium text-[14px] w-[85px] h-[20px] mt-[6.5px] ml-[86px] justify-center leading-[20px] tracking-[-0.15px] text-[#FFFFFF]">
                            Open Project
                        </button>
                    </div>

                </div>

            </div>


        </div>
    )
}