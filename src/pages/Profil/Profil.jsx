import React, { useEffect, useState } from 'react';
import { NetflimApi } from '../../api/netflim-api.js';
import ProfilHistorique from '../../components/ProfilHistorique/ProfilHistorique.jsx';
import MaWatchlist from '../../components/ProfilMaWatchlist/ProfilMaWatchlist.jsx';
import ProfilBase from '../../components/ProfilBase/ProfilBase.jsx';

const Profil = () => {
    const [historiqueMovies, setHistoriqueMovies] = useState([]);
    const [watchlistMovies, setWatchlistMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await NetflimApi.fetchAll();
                if (data && data.results) {
                    const fiftyMovies = data.results.slice(0, 50);
                    const tenRandomMovies = getRandomMovies(fiftyMovies, 10);
                    const remainingMovies = fiftyMovies.filter(movie => !tenRandomMovies.includes(movie));
                    const sixRandomMovies = getRandomMovies(remainingMovies, 6);

                    setHistoriqueMovies(tenRandomMovies);
                    setWatchlistMovies(sixRandomMovies);
                }
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchMovies();
    }, []);

    const getRandomMovies = (moviesArray, numMovies) => {
        const shuffled = [...moviesArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numMovies);
    };

    return (
        <div>
            <h1>Profil</h1>
            <ProfilBase historiqueMovies={historiqueMovies} watchlistMovies={watchlistMovies} />
            <h2>Historique</h2>
            <ProfilHistorique movies={historiqueMovies} />
            <h2>Ma Watchlist</h2>
            <MaWatchlist movies={watchlistMovies} />
        </div>
    );
};

export default Profil;