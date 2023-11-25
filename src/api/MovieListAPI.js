export const fetchMovies = async (sortCriterion, searchQuery, searchDone, activeGenre) => {
    let apiUrl = 'http://localhost:4000/movies';

    const params = new URLSearchParams();
    params.append('limit', 6);

    if (searchQuery || searchDone) {
        params.append('searchBy', 'title');
        params.append('search', searchQuery);
    }
    switch (sortCriterion) {
        case 'Release Date':
            params.append('sortBy', 'release_date');
            params.append('sortOrder', 'asc');
            break;

        case 'Title':
            params.append('sortBy', 'title');
            params.append('sortOrder', 'asc');
            break;
    }
    if (activeGenre !== 'all') {
        params.append('filter', activeGenre);
    }

    if (params.size) {
        apiUrl += '?' + params.toString();
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}
