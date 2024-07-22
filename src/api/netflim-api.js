const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "3a71a64794e22e5d53730973eb8ec3df";

export class NetflimApi {
    static async fetchAll() {
        try {
            const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Failed to fetch popular movies');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching popular movies:", error);
            return { results: [] };
        }
    }

    static async fetchById(netflimId, language = 'fr') {
        try {
            const response = await fetch(`${BASE_URL}/movie/${netflimId}?api_key=${API_KEY}&language=${language}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch movie with ID: ${netflimId}`);
            }
            const data = await response.json();
            return this.formatMovieData(data);
        } catch (error) {
            console.error(`Error fetching movie with ID ${netflimId}:`, error);
        }
    }

    static async fetchCredits(netflimId) {
        try {
            const response = await fetch(`${BASE_URL}/movie/${netflimId}/credits?api_key=${API_KEY}&language=fr`);
            if (!response.ok) {
                throw new Error(`Failed to fetch credits for movie with ID: ${netflimId}`);
            }
            const data = await response.json();
            return this.formatCredits(data);
        } catch (error) {
            console.error(`Error fetching credits for movie with ID ${netflimId}:`, error);
        }
    }


    static formatMovieData(data) {
        return {
            id: data.id,
            title: data.title,
            originalTitle: data.original_title,
            posterPath: data.poster_path,
            backdropPath: data.backdrop_path,
            overview: data.overview,
            releaseDate: new Date(data.release_date), // Convertir la date en objet Date
            voteAverage: data.vote_average,
            genres: data.genres.map(genre => genre.name),
            runtime: data.runtime,
            tagline: data.tagline,
            originalLanguage: data.original_language,
            budget: data.budget
        };
    }

    static formatCredits(data) {
        return {
            directors: data.crew.filter(member => member.job === 'Director').map(member => member.name),
            cast: data.cast.map(member => ({
                name: member.name,
                character: member.character,
                profilePath: member.profile_path
            }))
        };
    }

}