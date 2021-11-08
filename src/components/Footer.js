import React, { useEffect } from 'react';

import '../style.css/Footer.css';

export const Footer = React.memo(() => {
    useEffect(() => {
        console.log('Render desde Footer.js');
    });

    return (
        <footer className='footer container'>
            <p className='footer__text'>
                This Website is Developed by Nicolay Moreno, 2021
            </p>
        </footer>
    );
});
