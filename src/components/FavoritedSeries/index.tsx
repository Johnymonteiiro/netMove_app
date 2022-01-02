import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMoveContext } from "../../hooks/useMovieContext";
import * as S from "./style";
import { imgUrl } from "../../Utils/imageUrl";
import { useTvShows } from "../../hooks/useTvContext";

export interface TvTypes {
  show: {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    original_name: string;
    backdrop_path: string;
    overview: string;
  };
}

export const FavoritedSeries = (props: TvTypes) => {
  const { getMoveId, getInfoId, openModal } = useMoveContext();

  const { removeFavorite } = useTvShows();

  function handleMoveId(movieId: number) {
    getMoveId(movieId);
    openModal();
  }

  function handleInfoId(movieId: number) {
    getInfoId(movieId);
  }

  function handleFavorite(movieId: number) {
    removeFavorite(movieId);
  }
  return (
    <S.Content>
      <S.PostImg>
        <img
          className="Imagem"
          src={imgUrl + props.show.poster_path}
          alt={props.show.name}
        />
        <S.BgImage>
          <Link to="/movie&info" className="moveInfo">
            <button
              className="info-icon"
              onClick={() => handleInfoId(props.show.id)}
            >
              <BsFillInfoCircleFill size={30} />
            </button>
          </Link>
        </S.BgImage>
      </S.PostImg>
      <S.Info>
        <S.Classification>
          <p className="rate">
            <AiFillStar size={20} className="rate_star" />
            {props.show.vote_average}
          </p>
          <button
            className="add_favorite"
            onClick={() => handleFavorite(props.show.id)}
          >
            <FaHeart size={20} className="favorite-icon" />
          </button>
        </S.Classification>
        <S.Title>{props.show.original_name}</S.Title>
        <div>
          <button
            className="trailer-btn"
            onClick={() => handleMoveId(props.show.id)}
          >
            <IoIosPlay size={22} color="red" />
            Trailler
          </button>
        </div>
      </S.Info>
    </S.Content>
  );
};
