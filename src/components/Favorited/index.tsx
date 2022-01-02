import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMoveContext } from "../../hooks/useMovieContext";
import * as S from "./style";
import { imgUrl } from "../../Utils/imageUrl";

interface MoveProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    original_title: string;
  };
}

export const Favorited = (props: MoveProps) => {
  const { getMoveId, getInfoId, openModal, removeFavorite } = useMoveContext();

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
          src={imgUrl + props.movie.poster_path}
          alt={props.movie.title}
        />
        <S.BgImage>
          <Link to="/movie&info" className="moveInfo">
            <button
              className="info-icon"
              onClick={() => handleInfoId(props.movie.id)}
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
            {props.movie.vote_average}
          </p>
          <button
            className="add_favorite"
            onClick={() => handleFavorite(props.movie.id)}
          >
            <FaHeart size={20} className="favorite-icon" />
          </button>
        </S.Classification>
        <S.Title>{props.movie.original_title}</S.Title>
        <div>
          <button
            className="trailer-btn"
            onClick={() => handleMoveId(props.movie.id)}
          >
            <IoIosPlay size={22} color="red" />
            Trailler
          </button>
        </div>
      </S.Info>
    </S.Content>
  );
};
