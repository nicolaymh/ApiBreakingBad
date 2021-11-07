import React from 'react';

import '../style.css/Header.css';

import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';

import { SelectCharacter } from './SelectCharacter';

export const Header = ({ infoCharacters, selectCharacterQuote }) => {
    return (
        <header>
            <div className='container'>
                <div className='header__bar'>
                    <div className='header__logo1'>
                        <img src={logo1} alt='logo1' />
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
                            href='https://breakingbadapi.com/documentation'
                            target='_blank'
                            rel='noreferrer'
                        >
                            DocumentAtion
                        </a>

                        <a
                            className='header__navLink'
                            href='https://breakingbadapi.com/api/quotes'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Quotes
                        </a>

                        <SelectCharacter
                            infoCharacters={infoCharacters}
                            selectCharacterQuote={selectCharacterQuote}
                        />
                    </nav>

                    <div className='header__logo2'>
                        <img src={logo2} alt='logo2' />
                    </div>
                </div>
            </div>
        </header>
    );
};
