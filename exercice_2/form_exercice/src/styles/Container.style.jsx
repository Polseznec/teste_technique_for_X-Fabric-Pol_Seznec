import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;

  background: rgb(168, 5, 14);
  background: linear-gradient(
    135deg,
    rgba(168, 5, 14, 1) -50%,
    rgba(255, 255, 255, 1) 50%
  );
`;

export const View = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 450px;
  max-width: 500px;
  min-width: 350px;
  justify-content: center;
  width: 50%;
  height: 70%;
  background-color: rgb(255 255 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.div`
  border-radius: 2px;
  background-color: #eee8e8;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
