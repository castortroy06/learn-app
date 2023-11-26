import React from "react";
import { useForm } from 'react-hook-form';
import './movie-form.scss';

const handleReset = (e) => {
    e.preventDefault();
    document.getElementById("movie-form").reset();
};


const MovieForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data)
    };

    return (
        <div className="movie-form">
            <form id='movie-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="movie-form--container row">
                    <div className="movie-form--panel movie-form--panel-left col-8">
                        <div className="movie-form--form-item form-item">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input {...register("title", { required: true })} className="form-control" placeholder="Select title" name="title" type="text" value={props.title} />
                            {errors.title && <span className="form-error">This field is required</span>}
                        </div>

                        <div className="movie-form--form-item form-item">
                            <label className="form-label" htmlFor="poster_path">Movie URL</label>
                            <input {...register("poster_path", { required: true })} className="form-control" placeholder="https://" name="poster_path" type="text" value={props.url} />
                            {errors.title && <span className="form-error">This field is required</span>}
                        </div>

                        {props.genres.length > 0 &&
                            <div className="movie-form--form-item form-item">
                                <label className="form-label" htmlFor="genres">Genre</label>
                                <select {...register("genres", { required: true })} className="form-select" name="genres">
                                    <option value='' key={0}>Select genre</option>
                                    {props.genres.map((option, key) => (
                                        <option key={key} value={key}>{option}</option>
                                    ))}
                                </select>
                                {errors.genres && <span className="form-error">This field is required</span>}
                            </div>
                        }
                    </div>
                    <div className="movie-form--panel movie-form--panel-right col-4">
                        <div className="movie-form--form-item form-item">
                            <label className="form-label" htmlFor="release_date">Release date</label>
                            <input {...register("release_date", { required: true })} className="form-control" placeholder="Release date" name="release_date" type="date" value={props.releaseYear} />
                            {errors.release_date && <span className="form-error">This field is required</span>}
                        </div>

                        <div className="movie-form--form-item form-item">
                            <label className="form-label" htmlFor="vote_average">Rating</label>
                            <input {...register("vote_average", { required: true })} className="form-control" placeholder="7.8" name="vote_average" type="number" min="1" max="10" step="0.1" value={props.vote_average} />
                            {errors.vote_average && <span className="form-error">This field is required</span>}
                        </div>

                        <div className="movie-form--form-item form-item">
                            <label className="form-label" htmlFor="runtime">Runtime</label>
                            <input {...register("runtime", { required: true })} className="form-control" placeholder="minutes" name="runtime" type="buner" min="1" value={props.runtime} />
                            {errors.runtime && <span className="form-error">This field is required</span>}
                        </div>
                    </div>

                    <div className="movie-form--form-item form-item">
                        <label className="form-label" htmlFor="overview">Overview</label>
                        <textarea {...register("overview", { required: true })} className="form-control" placeholder="Movie description" name="overview" value={props.overview} />
                        {errors.overview && <span className="form-error">This field is required</span>}
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
