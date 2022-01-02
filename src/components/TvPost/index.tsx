import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMoveContext } from "../../hooks/useMovieContext";
import * as S from "./style";
import { imgUrl } from "../../Utils/imageUrl";
import { useState } from "react";
import { useTvShows } from "../../hooks/useTvContext";

interface MoveProps {
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

export const TvPost = (props: MoveProps) => {
  const [active, setActive] = useState(false);

  const { getInfoId, openModal } = useMoveContext();

  const { getMoveId, getFavorite } = useTvShows();

  function handleShowId(showId: number) {
    getMoveId(showId);
    openModal();
  }

  function handleInfoId(showId: number) {
    getInfoId(showId);
  }

  function handleFavorite(showId: number) {
    getFavorite(showId);
    setActive(true);
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
          <Link to="/series&info" className="moveInfo">
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
            <FaHeart
              size={20}
              className="favorite-icon"
              color={active ? "red" : "#fff"}
            />
          </button>
        </S.Classification>
        <S.Title>{props.show.name}</S.Title>
        <div>
          <button
            className="trailer-btn"
            onClick={() => handleShowId(props.show.id)}
          >
            <IoIosPlay size={22} color="red" />
            Trailler
          </button>
        </div>
      </S.Info>
    </S.Content>
  );
};
