import React from 'react';

import '../style.css/Spinner.css';

export const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='lds-grid spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
