import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail({ coverImg, title, year, rating, runtime, genres }) {
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

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            coverImg={movieDetail.large_cover_image}
            title={movieDetail.title}
            year={movieDetail.year}
            rating={movieDetail.rating}
            runtime={movieDetail.runtime}
            genres={movieDetail.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
