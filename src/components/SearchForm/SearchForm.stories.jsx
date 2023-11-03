import SearchForm from './SearchForm';

export default {
    title: 'Search Form',
}


const handleSubmit = (value) => {
    console.log(value);
};

export const Default = () => <SearchForm onChange={handleSubmit} />