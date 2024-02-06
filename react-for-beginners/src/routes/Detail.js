import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [movieDetail, setMovieDetail] = useState("");
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail(json.data.movie.description_intro);
    console.log(movieDetail);
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <br></br>
      <div>{movieDetail}</div>
    </div>
  );
}

export default Detail;
