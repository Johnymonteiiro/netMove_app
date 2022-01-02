import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlayCircle } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdAccessTimeFilled, MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMoveContext } from "../../hooks/useMovieContext";
import { api } from "../../services/api";
import { InfoTypes, Types } from "../../types/types";
import { apiKey } from "../../Utils/apiKey";
import { imgUrl } from "../../Utils/imageUrl";
import {
  BackDrop,
  Bg,
  Container,
  Content,
  Info,
  InfoContent,
  Overviews,
  Path,
  Wrapper,
} from "./style";

export function MoveInfo() {
  const { moveID } = useMoveContext();
  const [movie, setMoveInfo] = useState<InfoTypes>({} as InfoTypes);
  const [language, setLanguage] = useState<Types[]>([]);
  const [countries, setCountries] = useState<Types[]>([]);
  const [genres, setGenres] = useState<Types[]>([]);
  const [active, setActive] = useState(false);

  const { openModal, getMoveId, getFavorite } = useMoveContext();

  useEffect(() => {
    function getMovieInfo() {
      api
        .get(`/${moveID}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          setMoveInfo(res.data);
          setLanguage(res.data.spoken_languages);
          setCountries(res.data.production_countries);
          setGenres(res.data.genres);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getMovieInfo();
  }, [moveID]);

  function handlePlay(movieId: number) {
    openModal();
    getMoveId(movieId);
  }

  function handleFavorite(movieId: number) {
    getFavorite(movieId);
    setActive(true);
  }

  return (
    <>
      <Wrapper url={imgUrl + movie.backdrop_path}>
        <Bg>
          <Container>
            <Link to="/" className="info-close">
              <AiOutlineClose size={30} color="red" />
            </Link>
            <Content>
              <Path>
                <img src={imgUrl + movie.poster_path} alt={movie.title} />
                <BackDrop>
                  <button
                    className="favorite-icon"
                    onClick={() => handleFavorite(movie.id)}
                  >
                    <FaHeart size={32} color={active ? "red" : "#7673ff"} />
                  </button>
                  <button
                    className="play-icon"
                    onClick={() => handlePlay(movie.id)}
                  >
                    <AiOutlinePlayCircle size={80} />
                  </button>
                </BackDrop>
              </Path>
              <InfoContent>
                <Info>
                  <h3 className="title">{movie.original_title}</h3>
                  <p className="genres">
                    <IoLanguage className="icons" />
                    {language.map((lang) => (
                      <span className="span" key={lang.id}>
                        {lang.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="genres">
                    <MdLanguage className="icons" />
                    {countries.map((country) => (
                      <span className="span" key={country.id}>
                        {country.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="genres">
                    <BiCameraMovie className="icons" />
                    {genres.map((genre) => (
                      <span className="span" key={genre.id}>
                        {genre.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="info">
                    <FaStar className="icons" />
                    {movie.vote_average}{" "}
                  </p>
                  <p className="info">
                    <MdAccessTimeFilled className="icons" /> {movie.runtime} min
                  </p>
                  <p className="info">
                    <BsCalendar2DateFill className="icons" />{" "}
                    {movie.release_date}
                  </p>
                </Info>
                <Overviews>
                  <p className="overviews">{movie.overview}</p>
                </Overviews>
              </InfoContent>
            </Content>
          </Container>
        </Bg>
      </Wrapper>
    </>
  );
}
