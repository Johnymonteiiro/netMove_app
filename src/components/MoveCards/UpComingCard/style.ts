import styled from "styled-components";


export const Content = styled.div`
    width: 100%;
    height:100%;
    margin:0 0 30px 0;
    .noPost{
        width:300px;
        height: 300px;
        background:white;
    }

`;
export const Category = styled.div` 
    width:20.5%;
 
    .link_category{
        text-decoration:none;
        display:flex;
        align-items:center;
        margin:0;
        cursor:pointer;
    }

    &:hover  .Icon_category{
        transform: translateX(8px);
    }

    .title_category{
        color:white;
        font-size:30px;
        padding: 0;
        border-bottom:2px solid white;
    }
    .Icon_category{
        padding: 0;
        color:blue;
        font-weight:bolder;
        transition: all .4s;
    }
`;

export const Card = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(190px,1fr));
    gap:30px;
`;

//SWIPPER :

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

