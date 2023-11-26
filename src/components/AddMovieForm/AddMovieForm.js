import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalDialog from '../ModalDialog/ModalDialog';
import MovieForm from '../MovieForm/MovieForm';

import { addMovie } from '../../api/MovieAPI';


const AddMovieForm = (props) => {
    const [isOpen, setIsOpen] = useState(props.open);
    const navigate = useNavigate();

    const closeModal = () => {
        setIsOpen(false);
        navigate(-1);
    };

    const handleSubmit = (props) => {
        const loadData = async (props) => {
            props.runtime = Number(props.runtime);
            props.vote_average = Number(props.vote_average);
            props.genres = [props.genres];
            const response = await addMovie(props);

            if (response.id) {
                navigate(`/${response.id}`);
            }
            setIsOpen(false);
        }

        loadData(props);
    }

    return (
        <>
            <ModalDialog modalTitle={'ADD MOVIE'} isOpen={isOpen} onClose={closeModal}>
                <MovieForm onSubmit={handleSubmit} />
            </ModalDialog>
        </>
    );
};

export default AddMovieForm;
