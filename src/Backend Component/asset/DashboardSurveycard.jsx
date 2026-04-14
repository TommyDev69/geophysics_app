const DashboardSurveycard = ({ surveyDetails }) => {
    return (
        <>
            {surveyDetails.map(details => (
                <div className=" md:w-[472px] w-11/12 mx-auto rounded-[10px]  border-[2px] py-[26px] md:px-[26px] psb-2" key={details.id}>
                    <div className="flex  justify-around items-center pb-10">
                        <div className="md:w-[372px] w-[240px]">
                            <p className="font-instrument pb-3 font-semibold md:text-[16px] text-[13px] capitalize leading-[28px] tracking-[-0.45px]">{details.titles} </p>
                            <p className="font-instrument md:w-[348px]  md:text-[13px] leading-[100%] tracking-[-0.31px]">{details.description}</p>
                        </div>
                        <div className="w-[48px]">
                            <img src={details.photo} alt="eeeeeeeeeeeee" className="object-contain w-[38px]" />
                        </div>
                    </div>
                    <div className="w-full">
                        <button type="button" className="w-full items-center space-x-1 py-3 rounded-[5px] text-[#ffffff] bg-[#585858] border-[[#585858]] border flex justify-center capitalize">
                            <img src={details.icon} alt={details.title} />
                            start survey
                        </button>
                    </div>


                </div>
            ))}
        </>
    );
}

export default DashboardSurveycard;