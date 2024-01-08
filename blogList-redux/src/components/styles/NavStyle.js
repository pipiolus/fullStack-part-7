import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d1d5db;
  padding-right: 10%;
  padding-left: 5%;

  div > a {
    font-size: 20px;
    margin: 20px;
    color: white;
    background-color: #0891b2;
    border-radius: 50%;
  }

  div > a:hover {
    color: #0891b2;
    background-color: white;
  }

  div > p {
    font-size: 18px;
  }

  div > button {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    font-size: 16px;
  }
`;
