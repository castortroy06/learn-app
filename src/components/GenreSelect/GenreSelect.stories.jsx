import GenreSelect from './GenreSelect';

export default {
    title: 'Genre Select',
}
const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];


const callback = (value) => {
    console.log(value);
};

export const Default = () => <GenreSelect genres={genres} initialActive={genres[0]} onChange={callback} />