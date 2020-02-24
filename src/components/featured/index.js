import React from 'react';
import Carrousel from './carrousel';
import TimeUntil from './TimeUntil';
const Featured = () => {
    return (
        <div style={{position:'relative'}}>
                <Carrousel/>
            <div className='artist_name'>
                <div className='wrapper'>
                TORY LANEZ
                </div>

            </div>
            <TimeUntil/>
            
        </div>
    )
}

export default Featured;
 