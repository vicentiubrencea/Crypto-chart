import React from 'react';
import periodData from './periodData';

function Period(props) {
    return (
        <div>
            <label htmlFor="period-select" id='period-label'>Period:</label>
            <select id="period-select" value={props.period} onChange={props.onChange}>
            {periodData.map((item) => (
                <option key={item.period} value={item.period}>{item.text}</option>     
            ))}
            </select>
        </div>
    )
}

export default Period;