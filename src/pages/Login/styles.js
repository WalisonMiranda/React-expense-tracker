import styled from 'styled-components';

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(223.81deg, rgba(219, 118, 255, 0.67) 7.53%, #B261CF 82.32%);

  div {
    height: 400px;
    min-width: 280px;
    width: 400px;
    max-width: 500px;
    margin: auto 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background-color: #fff;
    
    @media(max-width: 420px) {
      margin: auto 20px;
    }

    p {
      font-size: 1.4rem;
      color: #3E3E3E;
      font-weight: 500;
    }

    button {
      height: 40px;
      width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      background: #E8E8E8;
      outline: none;
      border: none;
      border-radius: 40px;
      font-size: 1rem;

      :hover {
        background: linear-gradient(223.81deg, rgba(219, 118, 255, 0.9) 7.53%, #B261CF 82.32%);
      }

      img {
        height: 26px;
      }
    }
  }
`;

export { Container }

