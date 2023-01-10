//rsc
import React, { useEffect, useState } from 'react';

const UseEffectTimeExample = () => {

    const [dateTime, setDateTime] = useState('Default Value!!');
    const [reload, setReload] = useState(false);



    useEffect(()=>{

        const currentTime = new Date();
        setDateTime(currentTime.toString());

    },[reload])// Updates Time then reload is changed.


    return (
        <div className='container'>

            <div className="alert alert-info">
                {dateTime}
            </div>

            <button className="btn btn-info" onClick={() => setReload(!reload)}> {/** Button for triggering update */}
                update Time
            </button>


            
        </div>
    );
};

export default UseEffectTimeExample;