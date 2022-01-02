import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 100;
  background: rgb(10, 16, 45, 0.4);
  color: white;
  padding: 30px 0;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;

  .footer-subtitle {
    font-size: 25px;
  }

  .links {
    font-size: 18px;
    text-decoration: none;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }
`;
export const Logo = styled.div`
  .logo_name {
    position: relative;
    bottom: -40px;
    font-size: 50px;
  }
`;
export const BasicInfo = styled.div``;
export const Footer_Links = styled.div``;
export const Social_Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 35px;

  .icon_footer {
    margin: 0 20px;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      color: blue;
      transform: translateY(-10px);
    }
  }
  .icon_hover {
    transition: all 0.5s ease-in-out;
    &:hover {
      color: blue;
      transform: translateY(-5px);
    }
  }
`;
export const Legal = styled.div``;

export const CopyRigth = styled.div`
  text-align: center;
  padding-top: 7px;
  .copy_rigth {
    font-size: 19px;
    color: white;
  }
`;
