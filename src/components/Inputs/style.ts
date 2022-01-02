import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 3px;
  font-weight: 600;
  outline: none;
  background: white;
  border-radius: 8px;
  border: 1px solid gray;

  .input {
    border: none;
    height: 20px;
    width: 100%;
    padding: 5px 5px;
    outline: none;
    font-size: 17px;
  }

  .input::placeholder {
    color: gray;
    font-weight: 600;
  }
`;
