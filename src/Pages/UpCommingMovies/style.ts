import styled from "styled-components";

export const Card = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(236px,1fr));
    gap:30px;
    margin-bottom: 60px;

`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding:0 60px;

    .title{
        color: white;
        margin: 40px 0;
    }

    .noPost{
        height:41vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-size:20px;
        text-align: center;

        .icon{
            margin-left:10px;
        }
    }

`;
export const Between = styled.div`
    width: 100%;
    height:100px;
`;
