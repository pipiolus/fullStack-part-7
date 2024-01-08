import styled from "styled-components";

export const Blog = styled.div`
  background-color: #00403f;
  background-image: url(http://www.transparenttextures.com/patterns/textured-paper.png);
  display: flex;
  align-items: center;
  height: 7dvh;
  border: 1px dashed #001d36;
  border-radius: 3px;
  width: 60dvw;

  a {
    color: white;
    font-size: 18px;
    font-weight: 800;
    margin-left: 10px;
  }

  a:hover {
    color: #590049;
    background-color: white;
  }
`;
