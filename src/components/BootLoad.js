import React from 'react';

import '../style.css/BootLoad.css';

export const BootLoad = ({ index, name, img }) => {
    return (
        <div className='main__info'>
            <div className='main__text'>
                <h1 className='main__number'>{index + 1}</h1>
                <p className='main__name'>{name}</p>
            </div>
            <div className='main__image'>
                <img className='image' src={img} alt={name} />
            </div>
        </div>
    );
};
