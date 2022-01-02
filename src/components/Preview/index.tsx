import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/swiper-bundle.css";
import * as S from "./style";
import { useMoveContext } from "../../hooks/useMovieContext";
import { imgUrl } from "../../Utils/imageUrl";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export const Preview = () => {
  const { movies, openModal, getMoveId } = useMoveContext();
  const films = movies.slice(1, 6);
 
  function handleMoveId(movieId: number) {
    getMoveId(movieId);
    openModal();
  }

  return (
    <>
      <S.SwipperContainer>
        <S.Slider>
          <Swiper
            tag="section"
            wrapperTag="ul"
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            speed={1000}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            className="mySwiper"
          >
            <>
              {films.map((film) => {
                return (
                  <SwiperSlide tag="li" key={film.id}>
                    <S.Back url={imgUrl + film.backdrop_path}>
                      <S.Gradient>
                        <S.Content>
                          <S.Poster>
                            <S.Title>
                              {film.original_title}
                              <br />
                              <button className="watch-trailer" onClick={() => handleMoveId(film.id)}>
                              <AiOutlinePlayCircle size={60} className="icon" /> WATCH THE TRAILER
                              </button>
                            </S.Title>
                            <S.Description>{film.overview}</S.Description>
                          </S.Poster>
                        </S.Content>
                      </S.Gradient>
                    </S.Back>
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </S.Slider>
      </S.SwipperContainer>
    </>
  );
};
