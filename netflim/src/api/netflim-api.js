const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3a71a64794e22e5d53730973eb8ec3df";

export class NetflimApi {
    static async fetchAll(){
        return fetch(BASE_URL)
        .then(response => response.json)
        .then((data) => {
            return data;
        })
    }

    static async fetchById(netflimId){
        return fetch(`${BASE_URL}/${netflimId}`)
        .then(response => response.json)
        .then((data) => {
            return this.formatId(data) ;
        })
    }
}