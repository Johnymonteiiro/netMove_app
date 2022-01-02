import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { search_api } from "../services/search_api";
import { MoveTypes } from "../types/types";
import { apiKey } from "../Utils/apiKey";
import { toast } from "react-toastify";

interface MoveContextProps {
  movies: MoveTypes[];
  upCommingMovie: MoveTypes[];
  trailler: TrailerProps[];
  searchedMovie: MoveTypes[];
  moveID: number;
  search: string;
  modalIsOpen: boolean;
  loading: boolean;
  favorites: MoveTypes[];
  handleSearch(e: { target: { value: SetStateAction<string> } }): void;
  getMoveId: (movieId: number) => void;
  getFavorite: (movieId: number) => void;
  openModal: () => void;
  closeModal: () => void;
  getInfoId: (movieId: number) => void;
  removeFavorite: (movieId: number) => void;
}

interface TrailerProps {
  key: string;
  id: string;
}

interface ProviderProps {
  children: ReactNode;
}

const moveContext = createContext<MoveContextProps>({} as MoveContextProps);

export function MoveProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movies, setMovie] = useState<MoveTypes[]>([]);
  const [searchedMovie, setSerachedMovie] = useState<MoveTypes[]>([]);
  const [trailler, setTrailler] = useState<TrailerProps[]>([]);
  const [moveID, setMoveID] = useState(0);
  const [upCommingMovie, setUpCommingMovie] = useState<MoveTypes[]>([]);
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState<MoveTypes[]>(() => {
    const getFavorite = localStorage.getItem("@netMovie");

    if (getFavorite) {
      return JSON.parse(getFavorite);
    }

    return [];
  });

  useEffect(() => {
    function getMovie() {
      api
        .get(`/popular?api_key=${apiKey}`)
        .then((resp) => {
          setMovie(resp.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getMovie();
  }, []);

  useEffect(() => {
    function getUpCommingMovie() {
      api
        .get(`/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((resp) => {
          setUpCommingMovie(resp.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUpCommingMovie();
  }, []);

  useEffect(() => {
    function getSearchMovie() {
      if (search === "") {
        return;
      } else {
        search_api
          .get(
            `/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1`
          )
          .then((res) => {
            setSerachedMovie(res.data.results);
            setLoading(false);
          })

          .catch((error) => {
            console.log("Error:" + error);
          });
      }
    }

    getSearchMovie();
  }, [search]);

  function getMoveId(movieId: number) {
    const checkMovie = [...movies, ...searchedMovie, ...upCommingMovie];

    const ExistMovie = checkMovie.find((movie) => movie.id === movieId);

    if (ExistMovie) {
      api
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

  function getInfoId(movieId: number) {
    setMoveID(movieId);
  }

  function getFavorite(movieId: number) {
    async function getFavoriteId() {
      const favoriteList = [...favorites];

      const favoriteExit = favoriteList.find(
        (favorite) => favorite.id === movieId
      );

      if (favoriteExit) {
        toast.error("Move already exist on favorite!");
      } else {
        const response = await api
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

  function handleSearch(e: {
    target: { value: SetStateAction<string> };
  }): void {
    setSearch(e.target.value);
  }

  function removeFavorite(movieId: number) {
    const favoriteList = [...favorites];

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
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <moveContext.Provider
      value={{
        movies,
        upCommingMovie,
        search,
        trailler,
        modalIsOpen,
        moveID,
        searchedMovie,
        loading,
        favorites,
        handleSearch,
        getMoveId,
        getFavorite,
        removeFavorite,
        getInfoId,
        closeModal,
        openModal,
      }}
    >
      {children}
    </moveContext.Provider>
  );
}

export function useMoveContext() {
  const context = useContext(moveContext);

  return context;
}
