import styled from "styled-components";

export const Header = styled.header`
  .navbar {
    width: 100%;
    z-index: 100;
    top: 0;
    margin-bottom: 50px;
    position: fixed;
    background: transparent;
    transition: all 0.5s ease-in-out;
    padding:20px 0;
  }

  .navbar.active {
    background:rgb(10, 16, 45,1);
    box-shadow: 0px 8px 15px -5px rgba(0,0,0,0.91);
    -webkit-box-shadow: 0px 8px 15px -5px rgba(0,0,0,0.91);
    -moz-box-shadow: 0px 8px 15px -5px rgba(0,0,0,0.91);
    border-bottom:2px solid white;

  }

  .navbar_content {
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo {
    color: #fff;
    font-size: 30px;
    padding:0;
    margin: 0;
  }
  .link_home {
    flex: 1;
    text-decoration: none;
  }

  .nav-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .link{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-right:40px;
    font-size: 18px;
    font-weight:600;
    transition: all .5s ease-in-out;
    
    .icons{
      margin-right:5px;
    }
    
    &:hover{
       color: #7673ff;
    }
  }
`;
