import { MdMoodBad } from "react-icons/md";
import { Header } from "../../components/Header/index";
import { useMoveContext } from "../../hooks/useMovieContext";
import { useTvShows } from "../../hooks/useTvContext";
import { Favorited } from "../Favorited";
import { FavoritedSeries } from "../FavoritedSeries";
import { Footer } from "../Footer";
import * as S from "./style";

export const Favorites = () => {
  
  const { favorites } = useMoveContext();
  const { favoriteSeries } = useTvShows();

  return (
    <>
      <Header />
      <S.Between></S.Between>
      <S.Container>
        <h1 className="title">Favorites</h1>
        <S.Card>
          {favorites.length > 0 && (
            <>
              {favorites.map((favorite) => (
                <Favorited movie={favorite} key={favorite.id} />
              ))}
            </>
          )}
          {favoriteSeries.length > 0 && (
            <>
              {favoriteSeries.map((favorite) => (
                <>
                  <FavoritedSeries show={favorite} key={favorite.id} />
                </>
              ))}
            </>
          )}
        </S.Card>

        {favorites.length + favoriteSeries.length === 0 && (
          <p className="noPost">
            Favorite Empty <MdMoodBad size={25} className="icon" />
          </p>
        )}
      </S.Container>
      <Footer />
    </>
  );
};
