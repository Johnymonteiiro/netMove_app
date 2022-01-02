import { Post } from "../Post";
import * as S from "./style";
import { useMoveContext } from "../../hooks/useMovieContext";
import { MdMoodBad } from "react-icons/md";

export const SearchArea = () => {
  const { search, searchedMovie, loading } = useMoveContext();

  return loading ? (
    <h1>Searching....</h1>
  ) : (
    <>
      {search && (
        <S.Container>
          <S.Card>
            {searchedMovie.length > 0 && (
              <>
                {searchedMovie.map((movie) => (
                  <Post movie={movie} key={movie.id} />
                ))}
              </>
            )}
          </S.Card>
          {searchedMovie.length === 0 && (
            <p className="noPost">
              Move not found <MdMoodBad size={25} className="icon" />
            </p>
          )}
        </S.Container>
      )}
    </>
  );
};
