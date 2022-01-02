import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useTvShows } from "../../hooks/useTvContext";
import { TvPost } from "../TvPost";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const TvShowCard = () => {

  const { tvshows } = useTvShows()

  return (
    <>
      <S.Category>
        <Link to="/tvshows" className="link_category">
          <h1 className="title_category">Series</h1>
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
              {tvshows.map((show) => {
                return (
                  <SwiperSlide tag="li" key={show.id}>
                    <TvPost show={show} />
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
