import React, {useState} from "react";
import './genre-select.scss';

const GenreSelect = ({ genres, initialActive, onChange }) => {

    const handleClick = (e) => {
        e.preventDefault();
        setActive(e.target.textContent);
        onChange(e.target.textContent);
    };

    const [active, setActive] = useState(initialActive);

    return (
        <div className="genres">
            {genres.length &&
                <ul className="genres--list">
                    {genres.map((genre, key) => (
                            <li className="genres--list--item" data-testid="genre-item" key={key}>
                                <a data-testid={`genre-link-${genre}`} onClick={(e) => handleClick(e)} className={active === genre ? 'active' : ''} href="/">{genre}</a>
                            </li>
                        )
                    )}
                </ul>
            }
        </div>
    );
};

export default GenreSelect;
