import React from 'react';

import '../style.css/CharacterQuotes.css';

export const CharacterQuotes = ({ selectedAuthor }) => {
    const { name, img, quotes } = selectedAuthor;

    return (
        <section className='section__container container'>
            <div className='container__character'>
                <div className='container__title'>
                    <h3 className='title'>Quotes:</h3>
                </div>
                <div className='container__image'>
                    <img className='image' src={img} alt={name} />
                </div>
                <div className='container__name'>
                    <p className='name'>{name}</p>
                </div>
            </div>
            <div className='quotes'>
                {quotes.map((quote, index) => (
                    <div className='container__quote' key={index}>
                        <p className='quote__text'>{`${
                            index + 1
                        }: ${quote}`}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
