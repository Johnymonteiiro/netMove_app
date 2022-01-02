import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
`;

export const BgImage = styled.div`
  display: none;
`;

export const PostImg = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  padding: 0;
  transition: all 0.5s ease-in-out;

  &:hover ${BgImage} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(14, 14, 14, 0.5);
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;

    .moveInfo {
      font-size: 20px;
      color: white;
    }

    .info-icon{
      border: none;
      background: transparent;
      color: red;
    }
  }

  .Imagem {
    width: 100%;
    height: 350px;
    border-radius: 8px 8px 0 0;
  }
`;

export const Info = styled.div`
  background: rgb(10, 16, 45, 0.4);
  border-radius: 0 0 8px 8px;
  padding: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 8px 15px -5px rgba(0, 0, 0, 0.91);
  -webkit-box-shadow: 0px 8px 15px -5px rgba(0, 0, 0, 0.91);
  -moz-box-shadow: 0px 8px 15px -5px rgba(0, 0, 0, 0.91);

  .trailer-btn {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
    border: 2px solid #c5c5c5c5;
    text-decoration: none;
    border-radius: 8px;
    font-size: 16px;
    padding: 5px 20px;
    transition: all 0.8s ease-in-out;

    &:hover {
      background: #7673ff;
    }
  }
`;

export const Classification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .rate {
    font-size: 20px;
  }
  .rate_star {
    color: yellow;
    margin: 22px 0 0 0;
    padding: 0 8.8px 0 0;
  }
  
  .add_favorite {
    border: none;
    background: transparent;
    cursor: pointer;
    color: green;
  }

`;

export const Title = styled.div`
  text-align: center;
  height: 52px;
  padding: 0 0 10px 0;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
