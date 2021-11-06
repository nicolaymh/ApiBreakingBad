import React from 'react';

import '../style.css/CharacterQuotes.css';

export const CharacterQuotes = ({ selectedAuthor }) => {
    const { name, img, quotes } = selectedAuthor;

    return (
        <section className='section__container container'>
            <div className='container__character'>
                <div className='container__name'>
                    <h1 className='name'>{name}</h1>
                </div>
                <div className='container__image'>
                    <img className='image' src={img} alt={name} />
                </div>
            </div>
            <div className='container__quotes'>
                {quotes.map((quote, index) => (
                    <div key={index}>
                        <p>{`${index + 1}: ${quote}`}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
