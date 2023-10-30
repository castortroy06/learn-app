import React from "react";
import '../../sass/components/genre-select.scss';

const GenreSelect = ({ genres, active, onChange }) => {

    const handleClick = (e) => {
        e.preventDefault();
        onChange(e.target.textContent);
    };

    return (
        <div className="genres">
            <h2 className='text-center'>Ticket 3: Genres select</h2>
            {genres.length &&
                <ul className="genres--list">
                    {genres.map((genre, key) => {
                        return (
                            <li className="genres--list--item" data-testid="genre-item" key={key}>
                                <a data-testid={`genre-link-${genre}`} onClick={(e) => handleClick(e)} className={active === genre ? 'active' : ''} href="/">{genre}</a>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};

export default GenreSelect;
