import { BiSearch } from "react-icons/bi";
import { useMoveContext } from "../../hooks/useMovieContext";
import { Container } from "./style";

export const Input = () => {
  const { search, handleSearch } = useMoveContext();

  return (
    <Container>
      <input
        className="input"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <BiSearch size={25} color="#000" />
    </Container>
  );
};
