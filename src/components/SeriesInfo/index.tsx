import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlayCircle } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdAccessTimeFilled, MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMoveContext } from "../../hooks/useMovieContext";
import { useTvShows } from "../../hooks/useTvContext";
import { api } from "../../services/api";
import { tv_api } from "../../services/tvshow_api";
import { InfoTypes, ShowInfoTypes, Types } from "../../types/types";
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

export function SeriesInfo() {

  const { moveID } = useMoveContext();
  const [shows, setShowInfo] = useState<ShowInfoTypes>({} as ShowInfoTypes);
  const [language, setLanguage] = useState<Types[]>([]);
  const [countries, setCountries] = useState<Types[]>([]);
  const [genres, setGenres] = useState<Types[]>([]);
  const [ active, setActive] = useState(false);

  const { openModal } = useMoveContext()
  const { getMoveId,getFavorite} = useTvShows();


  useEffect(() => {
    function getMovieInfo() {
      tv_api
        .get(`/${moveID}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          setShowInfo(res.data);
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
  
  function handlePlay (movieId: number) {
     openModal()
     getMoveId(movieId)
  }

  function handleFavorite(movieId: number) {
    getFavorite(movieId);
    setActive(true);
  }

  return (
    <>
      <Wrapper url={imgUrl + shows.backdrop_path}>
        <Bg>
          <Container>
            <Link to="/" className="info-close">
              <AiOutlineClose size={30} color="red"/>
            </Link>
            <Content>
              <Path>
                <img src={imgUrl + shows.poster_path} alt={shows.name} />
                <BackDrop>
                  <button className="favorite-icon" onClick={() => handleFavorite(shows.id)}>
                    <FaHeart size={32} color={ active ? 'red' : '#7673ff'}/>
                  </button>
                  <button className="play-icon" onClick={() => handlePlay(shows.id)}><AiOutlinePlayCircle size={80}/></button>
                </BackDrop>
              </Path>
              <InfoContent>
                <Info>
                  <h3 className="title">{shows.original_name}</h3>
                  <p className="genres">
                    <IoLanguage className="icons"/>
                    {language.map((lang) => (
                      <span className="span" key={lang.id}>
                        {lang.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="genres">
                    <MdLanguage className="icons"/>
                    {countries.map((country) => (
                      <span className="span" key={country.id}>
                        {country.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="genres">
                    <BiCameraMovie className="icons"/>
                    {genres.map((genre) => (
                      <span className="span" key={genre.id}>
                        {genre.name + " | "}
                      </span>
                    ))}
                  </p>
                  <p className="info"><FaStar className="icons"/>{shows.vote_average} </p>
                  <p className="info"><MdAccessTimeFilled className="icons"/> {shows.season_number} seasons</p>
                  <p className="info"><BsCalendar2DateFill className="icons"/> {shows.number_of_episodes} episodes</p>
                </Info>
                <Overviews>
                  <p className="overviews">{shows.overview}</p>
                </Overviews>
              </InfoContent>
            </Content>
          </Container>
        </Bg>
      </Wrapper>
    </>
  );
}
