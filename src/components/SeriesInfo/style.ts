import styled from "styled-components";

interface WrapperProps {
    url: string
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background: url(${(props) => props.url}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height:99vh;

`;

export const Bg = styled.div`
   position:absolute;
   z-index:1;
   top:0;
   bottom: 0;
   right: 0;
   left: 0;
   background:rgba(14, 14, 14, 0.85);
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  .info-close{
    display: flex;
    justify-content:flex-end;
    margin-top: 50px;
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height:70vh;
  margin: 80px auto;
`;

export const BackDrop = styled.div`
   display: none;
`;

export const Path = styled.div`
  position: relative;
  flex:1.5;
  height:70vh;
  transition: all 0.5s ease-in-out;

  img{
     height:100%;
     width:100%;
  }

  &:hover ${BackDrop} {
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

   .favorite-icon{
     position: relative;
     top:-280px;
     left:-160px;
     border: none;
     background: transparent;
   }

   .play-icon{
    border: none;
     background: transparent;
     color:#7673ff;
     transition: all 0.5s ease-in-out;

     &:hover{
       color:red;
     }
   }
  }
`;



export const InfoContent = styled.div`
  flex: 3;
  height: 100%;
`;

export const Info = styled.div`

  height:50%;
  width: 95%;
  padding:20px;
  color: white;
  font-size: 20px;

  .title{
    font-size: 25px;
    color:#7673ff;
  }
  
  .genres{
    display: flex;
    align-items: center;
    color: white;
  }

  .span{
    margin-left:15px;
  }

  .info{
    display: flex;
    align-items: center;
  }

  .icons{
    margin-right:15px;
    color:#7673ff;
  }
`;

export const Overviews = styled.div`
  height: 38%;
  padding:20px;
  font-size:20px;
  line-height:40px;

  .overviews{
    color: white;
  }
`;