import { useDispatch, useSelector } from "react-redux";
import DashboardCardProcess from "./DashboardCardProcess";
import DashboardRecentProject from "./DashboardRecentProject";
import DashboardSurveyPlan from "./DashboardSurveyPlan";
import { getUserProfileAction } from "../../redux/slice/user/usersSlice";
import { useEffect } from "react";

const DashboardBody = () => {
    // dispatch
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);
    return (
        <>
            <div className="md:w-[967px] ">
                <h1 className="font-instrument md:text-left text-center font-bold md:text-[30px] text-[13px] leading-[36px] tracking-[0.4px] text-[#101828]">Good Morning, Dr. {profile?.message?.fullName} 👋</h1>
            </div>

            <div className="md:w-[319px]">
                <p className="font-instrument text-center font-normal md:text-[16px] text-[11px] leading-[24px] tracking-[-0.31px]">Welcome back to your GeoSurvey workspace</p>
            </div>

            <DashboardCardProcess />

            <DashboardSurveyPlan />

            <DashboardRecentProject />
        </>
    );
}

export default DashboardBody;