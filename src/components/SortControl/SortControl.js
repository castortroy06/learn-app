import React, { useState } from 'react';
import './sort-control.scss';

const SortControl = ({ onChange }) => {
    const options = ['Release Date', 'Title'];
    const [active, setActive] = useState(options[0]);

    const handleClick = (e) => {
        e.preventDefault();
        const element = e.target;
        element.parentElement.classList.toggle('expanded');
        setActive(element.textContent);
        onChange(element.textContent);
    };

    return (
        <div className="sort-control">
            <p className="sort-control--label">Sort by</p>
            <div data-testid="sort-control-dropdown" className="sort-control--dropdown" id="sort-control" name="sort-control">
                {options.map((option, key) => (
                    <a data-testid={`sort-control-${option}`} key={key} href="/" onClick={(e) => handleClick(e)} className={option === active ? 'active' : ''}>{option}</a>
                ))}
            </div>
        </div>
    );
};

export default SortControl;
