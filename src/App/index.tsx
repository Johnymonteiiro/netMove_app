import React from "react";
import { ModalTrailer } from "../components/Modal";
import { MoveProvider } from "../hooks/useMovieContext";
import Routes from "../Router";
import { GlobalStyle } from "../Styles/globalStyle";
import { ToastContainer } from "react-toastify";
import { TvShowProvider } from "../hooks/useTvContext";

function App() {
  return (
    <>
      <MoveProvider>
        <TvShowProvider>
          <GlobalStyle />
          <Routes />
          <ModalTrailer />
          <ToastContainer autoClose={3000} />
        </TvShowProvider>
      </MoveProvider>
    </>
  );
}

export default App;
