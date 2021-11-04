import React from 'react';

import '../style.css/Spinner.css';

export const Spinner = () => {
    return (
        <>
            <div className='lds-spinner container'>
                <div></div>
                <div></div>
                <div></div>
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
        </>
    );
};
