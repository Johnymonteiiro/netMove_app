import { TopMovieCard } from "../../components/MoveCards/MovieCard/topMoveCards";
import { Header } from "../../components/Header";
import * as S from "./styled";
import { Preview } from "../../components/Preview";
import { SearchArea } from "../../components/SearchMovieArea";
import { UpComingMovieCard } from "../../components/MoveCards/UpComingCard/upComingMovieCard";
import { Footer } from "../../components/Footer";
import { useMoveContext } from "../../hooks/useMovieContext";
import { TvShowCard } from "../../components/TvCard";

export const Home = () => {
  const { search } = useMoveContext();

  return (
    <>
      <Header />
      <S.Between></S.Between>
      <S.Container>
        {search && <SearchArea />}
        {!search && (
          <>
            <Preview />
            <UpComingMovieCard />
            <TopMovieCard />
            <TvShowCard />
          </>
        )}
      </S.Container>
      <Footer />
    </>
  );
};
