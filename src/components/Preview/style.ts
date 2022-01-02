import styled from "styled-components";

interface BackProps {
  url: string;
}
export const Slider = styled.h1`
  width: 100%;
  height: 600px;
  margin: 80px 0 40px 0;
`;

export const Back = styled.div<BackProps>`
  background: url(${(props) => props.url}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;

export const Gradient = styled.div`
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 25%,
    rgba(20, 24, 30, 1) 75.5%,
    rgba(20, 24, 30, 1) 50%
  );
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  z-index: 100;
  position: relative;
  padding: 0 0 0 80px;
  bottom: -62.8%;
`;

export const Poster = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  .watch-trailer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    margin-top: 10px;
    border: none;
    font-size: 16px;
    color: white;
    transition: all 0.4s ease-in-out;
    padding: 0;
    cursor: initial;

    .icon {
      color: white;
      transition: all 0.4s ease-in-out;
      padding-right: 5px;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }

    &:hover {
      color: red;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  width: 30%;
  font-size: 30px;
  margin: 0 10px 0 0;

  .trailler_link {
    color: gray;
    text-decoration: none;
    font-size: 18px;
    transition: 0.5s;

    &:hover {
      color: red;
    }
  }
`;

export const Description = styled.p`
  position: relative;
  left: 15%;
  color: white;
  width: 50%;
  height: 100%;
  font-size: 18.5px;
  font-weight: bold;
`;

//  Swipper : /////

export const SwipperContainer = styled.div`
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  li {
    list-style: none;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    z-index: 100;
    color: rgb(253, 252, 252);
    border-radius: 100%;
    width: 40px;
    transition: all 0.5s;
    background: rgba(3, 3, 160, 0.5);
  }

  .swiper-button-next:hover {
    background: rgb(3, 3, 160);
  }

  .swiper-button-prev:hover {
    background: rgb(3, 3, 160);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 27px;
    font-weight: bold;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    padding: 0;
  }
`;
