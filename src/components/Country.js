import React from 'react';
import style from './country.module.css'

const Country = (props) => {
    const { country } = props;
    const { name, flags, capital, population, area } = country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }

    return (
        <article className={style.country}>
            <h2>{name.common}</h2>
            <img src={flags.png} alt={name.common} className={style.flag}/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area} square kilometers</p>
            <button className={style.btn} onClick={()=> {
                handleRemoveCountry(name.common);
            }}>Remove</button>
        </article>
    );
}

export default Country;
