export const fetchMovie = async (movieId) => {
    
    let apiUrl = 'http://localhost:4000/movies/';

    try {
        const response = await fetch(apiUrl + `${movieId}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}
