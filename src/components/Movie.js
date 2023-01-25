import PropTypes from "prop-types";

function Movie({ coverImg, title, year, rating, runtime, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <h3>Year: {year}</h3>
      <h3>Rating: {rating}</h3>
      <h3>Runtime: {runtime}</h3>
      <h3>
        Genres:{" "}
        {genres.map((g, i) => (
          <span key={i}>
            {i + 1 === genres.length ? <span>{g}</span> : <span>{g}, </span>}
          </span>
        ))}
      </h3>
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
};

export default Movie;
