import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "../css/Home.module.css";

function Detail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail([json.data.movie]);
    setLoading(false);
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
      <h1>Detail</h1>

      <div className={styles.container}>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            {movieDetail.map((movie) => (
              <MovieDetail
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.description_intro}
                genres={movie.genres}
                language={movie.language}
                like_count={movie.like_count}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
