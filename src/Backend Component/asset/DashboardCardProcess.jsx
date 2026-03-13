import { useState } from "react";
import totalCard from '../image/totalCard.png'
import active from '../image/active.png'
import completed from '../image/completed.png'
import daft from '../image/draft.png'
import DashboardCard from "./DashboardCard";




const DashboardCardProcess = () => {
    const [cards, setCards] = useState([
        {id:1, cardTitle:'total projects', numb:4, image:totalCard},
        {id:2, cardTitle:'active', numb:2, image:active},
        {id:3, cardTitle:'completed', numb:1, image:completed},
        {id:4, cardTitle:'dafts',numb:1, image:daft},
    ])
    return ( 
        <div className="md:w-[967px] w-11/12 md:mx-0 mx-auto grid grid-cols-2  md:grid-cols-4 gap-4 ">
            <DashboardCard  Cards = {cards}/>
        </div>
     );
}
 
export default DashboardCardProcess;