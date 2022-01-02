import { MdMoodBad } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/index";
import { Post } from "../../components/Post";
import { useMoveContext } from "../../hooks/useMovieContext";
import * as S from "./style";

export const TopMovies = () => {
  const { movies, search } = useMoveContext();
  // const movie = filmes.slice(0, 50);

  const filteredFilms = !!search
    ? movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      })
    : movies;

  return (
    <>
      <Header />
      <S.Between></S.Between>
      <S.Container>
        <h1 className="title">Movies</h1>
        <S.Card>
          {filteredFilms.length > 0 && (
            <>
              {filteredFilms.map((movie) => {
                return <Post movie={movie} key={movie.id} />;
              })}
            </>
          )}
        </S.Card>
        {filteredFilms.length === 0 && (
          <p className="noPost">
            Move not found <MdMoodBad size={25} className="icon" />
          </p>
        )}
      </S.Container>
      <Footer />
    </>
  );
};
