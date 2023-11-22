import MovieForm from './MovieForm';

export default {
    title: 'Movie Form',
}

const object = {

}

const handleSubmit = (e) => {
    e.preventDefault();

};

export const Default = () => <MovieForm {...object} onSubmit={handleSubmit} />
