import React from 'react';
import { SelectCharacter } from './SelectCharacter';

import '../style.css/Header.css';

export const Header = ({ infoCharacters, selectCharacterQuote, lo, lo2 }) => {
    return (
        <header>
            <div className='container'>
                <div className='header__bar'>
                    <div className='header__logo1'>
                        <img src={lo2} alt='logo1' />
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
                        <img src={lo} alt='logo2' />
                    </div>
                </div>
            </div>
        </header>
    );
};
