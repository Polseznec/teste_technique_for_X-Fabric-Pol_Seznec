import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  
  background: rgb(168, 5, 14);
  font-size: 18px;
  background: linear-gradient(
    70deg,
    rgb(237, 11, 25) 40%,
    rgba(168, 5, 14, 1) 100%
  );
  border: none;
  border-radius: 5px;
  margin: 15px 5px;
  
  cursor: pointer;
  color: rgb(255 255 255);
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 200ms ;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.80) 0px 1px 3px;
    text-decoration: underline;
    
  }
  &:active {
    color: rgb(168 5 14);
  }
`;
