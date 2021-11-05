import React from 'react';

import '../style.css/Header.css';

import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header__barra'>
                    <div className='header__logo1'>
                        <img src={logo1} alt='logo' />
                    </div>

                    <nav className='header__nav'>
                        <a
                            className='header__navLink'
                            href='https://breakingbadapi.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            API
                        </a>
                        <a
                            className='header__navLink'
                            href='https://breakingbadapi.com/api/quotes'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Quotes
                        </a>
                        <a
                            className='header__navLink'
                            href='https://breakingbadapi.com/documentation'
                            target='_blank'
                            rel='noreferrer'
                        >
                            DocumentAtion
                        </a>
                    </nav>

                    <div className='header__logo2'>
                        <img src={logo2} alt='logo' />
                    </div>
                </div>
            </div>
        </header>
    );
};
