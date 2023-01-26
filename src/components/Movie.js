import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({
  coverImg,
  title,
  year,
  rating,
  runtime,
  genres,
  description,
}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h1>{title}</h1>
        <h3>Year: {year}</h3>
        <h3>Rating: {rating}</h3>
        <h3>Runtime: {runtime}</h3>
        <p>{description}</p>
        <h3>
          Genres:{" "}
          {genres.map((g, i) => (
            <span key={i}>
              {i + 1 === genres.length ? <span>{g}</span> : <span>{g}, </span>}
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default Movie;
