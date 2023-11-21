import React, { useState } from 'react';
import ModalDialog from './ModalDialog';
import MovieForm from '../MovieForm/MovieForm';

export default {
    title: 'ShowCase/Edit movie',
    component: ModalDialog,
};

const DialogTemplate = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const movie = {
        'title': 'Pulp Fiction',
        'url': 'https://www.pulpfiction.com',
        'genre': 'Comedy',
        'imageUrl': 'pulp-fiction.png',
        'releaseYear': 2004,
        'duration': '2h 34m',
        'genres': ['Action & Adventure', 'Comedy'],
        'description': 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
        'rate': 8.9,
    }

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <ModalDialog modalTitle={'EDIT MOVIE'} isOpen={isOpen} onClose={closeModal}>
                <MovieForm {...movie} />
            </ModalDialog>
        </>
    );
};

export const Default = () => <DialogTemplate />
