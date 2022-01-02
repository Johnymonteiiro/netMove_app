import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import * as S from "./style";
import { Post } from "../../Post";
import { useMoveContext } from "../../../hooks/useMovieContext";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const UpComingMovieCard = () => {
  const { upCommingMovie } = useMoveContext();
  const movies = upCommingMovie;

  return (
    <>
      <S.Category>
        <Link to="/upcomming&movies" className="link_category">
          <h1 className="title_category">UpComing Movies</h1>
          <IoIosArrowForward className="Icon_category" size={35} />
        </Link>
      </S.Category>
      <S.SwipperContainer>
        <S.Content>
          <Swiper
            tag="section"
            wrapperTag="ul"
            slidesPerView={5}
            spaceBetween={35}
            loop={true}
            speed={30}
            navigation={true}
            className="mySwiper"
          >
            <S.Card>
              {movies.map((movie) => {
                return (
                  <SwiperSlide tag="li" key={movie.id}>
                    <Post movie={movie} />
                  </SwiperSlide>
                );
              })}
            </S.Card>
          </Swiper>
        </S.Content>
      </S.SwipperContainer>
    </>
  );
};
