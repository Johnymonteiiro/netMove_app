import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useMoveContext } from "../../hooks/useMovieContext";
import { useTvShows } from "../../hooks/useTvContext";
import { PlayerContainer } from "./style";
import "./style.ts";

Modal.setAppElement("#root");

export function ModalTrailer() {
  const { modalIsOpen, trailler, closeModal } = useMoveContext();
  const [key, setKey] = useState("");
  const { showVideo } = useTvShows();

  const keymovie = String(
    trailler.map((trailer) => {
      return trailer.key;
    })
  );

  const keyshow = String(
    showVideo.map((show) => {
      return show.key;
    })
  );

  useEffect(() => {
    if (keymovie) {
      setKey(keymovie);
    } else {
      setKey(keyshow);
    }
  }, [keymovie, keyshow]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" onClick={closeModal}>
        <AiOutlineClose size={25} color="red" />
      </button>

      <PlayerContainer>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          className="react-player"
          height={600}
          width={900}
          controls
        />
      </PlayerContainer>
    </Modal>
  );
}
