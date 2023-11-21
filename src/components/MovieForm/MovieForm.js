import React from "react";
import './movie-form.scss';

const handleReset = (e) => {
    e.preventDefault();
    document.getElementById("movie-form").reset();
};


const MovieForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }

    return (
        <div className="movie-form">
            <form id='movie-form'>
                <div className="movie-form--container row">
                    <div className="movie-form--panel movie-form--panel-left col-37">
                        <div className="movie-form--form-item">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input className="form-control" placeholder="Select title" name="title" type="text" value={props.title} />
                        </div>

                        <div className="movie-form--form-item">
                            <label className="form-label" htmlFor="url">Movie URL</label>
                            <input className="form-control" placeholder="https://" name="url" type="text" value={props.url} />
                        </div>

                        {props.genres.length > 0 &&
                            <div className="movie-form--form-item">
                                <label className="form-label" htmlFor="genres">Genre</label>
                                <select className="form-select" name="genres" value={props.genre}>
                                    <option key={0}>Select genre</option>
                                    {props.genres.map((option, key) => (
                                        <option key={key} value={key}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        }
                    </div>
                    <div className="movie-form--panel movie-form--panel-right col-23">
                        <div className="movie-form--form-item">
                            <label className="form-label" htmlFor="release_date">Release date</label>
                            <input className="form-control" placeholder="Release date" name="release_date" type="text" value={props.releaseYear} />
                        </div>

                        <div className="movie-form--form-item">
                            <label className="form-label" htmlFor="rate">Rating</label>
                            <input className="form-control" placeholder="7.8" name="rate" type="text" value={props.rate} />
                        </div>

                        <div className="movie-form--form-item">
                            <label className="form-label" htmlFor="duration">Runtime</label>
                            <input className="form-control" placeholder="minutes" name="duration" type="text" value={props.duration} />
                        </div>
                    </div>

                    <div className="movie-form--form-item">
                        <label className="form-label" htmlFor="overview">Overview</label>
                        <textarea className="form-control" placeholder="Movie description" name="overview" value={props.description} />
                    </div>

                    <div className="movie-form--buttons">
                        <input onClick={handleReset} className="btn btn-secondary" type="submit" value="Reset" />
                        <input onClick={handleSubmit} className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

MovieForm.defaultProps = {
    genres: ['Adventures', 'Comedy'],
}

export default MovieForm;
