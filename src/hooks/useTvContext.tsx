import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { tv_api } from "../services/tvshow_api";
import { TvTypes } from "../types/types";
import { apiKey } from "../Utils/apiKey";
import { toast } from "react-toastify";

interface TrailerProps {
  key: string;
  id: string;
}

interface TvShowContextProps {
  tvshows: TvTypes[];
  favoriteSeries: TvTypes[];
  showVideo: TrailerProps[];
  getMoveId: (movieId: number) => void;
  getFavorite: (movieId: number) => void;
  removeFavorite: (movieId: number) => void;
}

interface ShowProviderProps {
  children: ReactNode;
}

const tvShowContext = createContext<TvShowContextProps>(
  {} as TvShowContextProps
);

export function TvShowProvider({ children }: ShowProviderProps) {
  const [tvshows, setTvshows] = useState<TvTypes[]>([]);
  const [showVideo, setTrailler] = useState<TrailerProps[]>([]);
  const [favoriteSeries, setFavorites] = useState<TvTypes[]>(() => {
    const getFavorite = localStorage.getItem("@netMovie");

    if (getFavorite) {
      return JSON.parse(getFavorite);
    }

    return [];
  });

  useEffect(() => {
    async function getTvshows() {
      await tv_api
        .get(`popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((resp) => {
          setTvshows(resp.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getTvshows();
  }, []);

  function getMoveId(movieId: number) {
    const checkMovie = [...tvshows];

    const ExistMovie = checkMovie.find((movie) => movie.id === movieId);

    if (ExistMovie) {
      tv_api
        .get(`/${movieId}/videos?api_key=${apiKey}&language=en-US`)

        .then((res) => {
          setTrailler(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  }

  function getFavorite(movieId: number) {
    async function getFavoriteId() {
      const favoriteList = [...favoriteSeries];

      const favoriteExit = favoriteList.find(
        (favorite) => favorite.id === movieId
      );

      if (favoriteExit) {
        toast.error("Move already exist on favorite!");
      } else {
        const response = await tv_api
          .get(`/${movieId}?api_key=${apiKey}&language=en-US`)
          .then((res) => {
            return res.data;
          });

        favoriteList.push(response);
        toast.success("Added to the Favorite");
      }
      localStorage.setItem("@netMovie", JSON.stringify(favoriteList));
      setFavorites(favoriteList);
    }

    getFavoriteId();
  }

  function removeFavorite(movieId: number) {
    const favoriteList = [...favoriteSeries];

    const favoriteExit = favoriteList.findIndex(
      (favorite) => favorite.id === movieId
    );

    if (favoriteExit >= 0) {
      favoriteList.splice(favoriteExit, 1);
      localStorage.setItem("@netMovie", JSON.stringify(favoriteList));
      setFavorites(favoriteList);
    } else {
      toast.error("Error to remove");
    }
  }

  return (
    <tvShowContext.Provider
      value={{
        tvshows,
        showVideo,
        favoriteSeries,
        getMoveId,
        getFavorite,
        removeFavorite,
      }}
    >
      {children}
    </tvShowContext.Provider>
  );
}

export function useTvShows() {
  const context = useContext(tvShowContext);

  return context;
}
