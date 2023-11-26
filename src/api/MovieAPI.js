const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export const fetchMovie = async (movieId) => {
    try {
        const response = await fetch(apiUrl + '/movies/' + `${movieId}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const addMovie = async (props) => {
    try {
        const response = await fetch(apiUrl + '/movies', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(props)
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }

}
