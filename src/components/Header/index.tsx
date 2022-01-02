import React, { useState } from "react";
import { ImFilm } from "react-icons/im";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import { Input } from "../Inputs/Input";
import { Link } from "react-router-dom";
import * as S from "./style";
import { FaListAlt } from "react-icons/fa";

export const Header = () => {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <S.Header>
      <nav className={header ? "navbar active" : "navbar"}>
        <div className="navbar_content">
          <Link to="/" className="link_home">
            <h1 className="logo">NetMovies</h1>
          </Link>
          <div className="nav-link">
            <Link to="/top&movies" className="link">
              <ImFilm className="icons"/> Movies
            </Link>
            <Link to="/tvshows" className="link">
              <BiCameraMovie className="icons"/>Series
            </Link>
            <Link to="/favorites" className="link">
              <FaListAlt className="icons"/>Favorites
            </Link>
            <Input />
          </div>
        </div>
      </nav>
    </S.Header>
  );
};
