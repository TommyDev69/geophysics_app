import React, { useState } from 'react'
import BoardComplete from './BoardComplete'

export default function BoardCompleteValidation() {
    const [complete] = useState([
         {id:1, survey:'Setup equipment at site', content:'Deploy GPR equipment and calibrate sensors', point:5, aka:'NE'}
    ])
        
    return (
        <>
            <BoardComplete  Complete = {complete} HeadTitle='completed' />
        </>
    )
}
