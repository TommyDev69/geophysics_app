import { useState } from "react";
import BoardProgress from "./BoardProgress";

const BoardProgressValidation = () => {
    const [progress] = useState([
     {id:1, survey:'Conduct Line 1-5 surveys', content:'Complete GPR scans along survey lines 1-5', point:8, aka:'NE'}
    ])
    return ( 
        <BoardProgress progress = {progress} Heading='in progress'/>
     );
}
 
export default BoardProgressValidation;