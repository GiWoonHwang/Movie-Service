import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({
  id,
  coverImage,
  title,
  summary,
  genres,
  language,
  like_count,
  rating,
}) {
  return (
    <div>
      <img src={coverImage} alt={title}></img>
      <p>{language}</p>
      <br></br>
      <p>{like_count}</p>
      <br></br>
      <p>{rating}</p>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  language: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
