import React from "react";
import '../sass/components/genre-select.scss';

const GenreSelect = ({ genres, active, onSelect }) => {
    return (
        <div className="genres">
            <h2 className='text-center'>Ticket 3: Genres select</h2>
            {genres.length &&
                <ul className="genres--list">
                    {genres.map((genre, key) => {
                        return (
                            <li className="genres--list--item" key={key}>
                                <a onClick={onSelect} className={active === genre ? 'active' : ''} href="/">{genre}</a>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};

export default GenreSelect;