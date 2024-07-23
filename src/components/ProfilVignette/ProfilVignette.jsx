import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './style.module.css';

const ProfilVignette = ({ id, title, posterPath }) => {
    const navigate = useNavigate();
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    const handleClick = () => {
        navigate(`/film/${id}`);
    };

    return (
        <div className={s.container} onClick={handleClick}>
            <img src={posterUrl} alt={title} className={s.poster} />
            <div className={s.title}>{title}</div>
        </div>
    );
};

export default ProfilVignette;
