import React from 'react';

import '../style.css/Footer.css';

export const Footer = React.memo(() => {
    return (
        <footer className='footer container'>
            <p className='footer__text'>
                This Website is Developed by Nicolay Moreno, 2021
            </p>
        </footer>
    );
});
