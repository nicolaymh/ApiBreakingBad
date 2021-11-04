import React from 'react';

export const BootLoad = ({ id, name, img }) => {
    return (
        <main className='container'>
            <h1>{name}</h1>
            <div>
                <img src={img} alt={name} />
            </div>
        </main>
    );
};
