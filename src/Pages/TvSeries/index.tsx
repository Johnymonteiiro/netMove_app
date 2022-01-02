import { MdMoodBad } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/index"
import { TvPost } from "../../components/TvPost";
import { useMoveContext } from "../../hooks/useMovieContext";
import { useTvShows } from "../../hooks/useTvContext";
import * as S from './style';

export const TvShows = () => {
  
  const {search} = useMoveContext();
  const { tvshows } = useTvShows()
 // const movie = filmes.slice(0, 50);
 
  const filteredShows = !!search
    ? tvshows.filter((show) => {
        return show.name.toLowerCase().includes(search.toLowerCase());
      })
    : tvshows;

  return (
    <>
      <Header/>
      <S.Between></S.Between>
      <S.Container>
      <h1 className="title">Series</h1>
      <S.Card>
        {filteredShows.length > 0 && (
          <>
            {filteredShows.map((show) =>{
                return (
                <TvPost show={show} key={show.id}/>
              ) 
            })}
          </>
        )}
      </S.Card>
      {filteredShows.length === 0 && (
          <p className="noPost">
             Move not found <MdMoodBad size={25} className="icon" />
          </p>
        )}
      </S.Container>
     <Footer/>
    </>
  );
};
