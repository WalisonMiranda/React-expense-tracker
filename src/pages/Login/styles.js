import styled from 'styled-components';

const Container = styled.main`
position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(223.81deg, rgba(219, 118, 255, 0.67) 7.53%, #B261CF 82.32%);
  
  @media(max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
  }
  
  .line {
    content: '';
    position: absolute;
    top: 15%;
    left: 0;
    height: 824px;
    width: 50%;
    border-top: 4px solid #fff;
    border-right: 4px solid #fff;
    z-index: 0;
  }

  .title {
    margin-right: 160px;
    z-index: 99;
    font-size: 32px;

    h1:last-child {
      margin-left: 140px;
    }

    @media(max-width: 1120px) {
      font-size: 20px;
      margin: 0 auto;

      h1:last-child {
        margin-left: 24px;
      }
    }

    @media(max-width: 440px) {
      font-size: 14px;
    }
  }

  main {
    height: 400px;
    min-width: 240px;
    width: 400px;
    max-width: 500px;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background-color: #fff;
    z-index: 99;
    
    @media(max-width: 440px) {
      width: 280px;
      margin: 10px;
    }

    p {
      font-size: 1.4rem;
      color: #3E3E3E;
      font-weight: 500;
    }

    button {
      height: 40px;
      width: 220px;
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

