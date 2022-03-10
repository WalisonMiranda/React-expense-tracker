import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(223.81deg, rgba(219, 118, 255, 0.67) 7.53%, #B261CF 82.32%);

  div:first-child {
    padding: 1rem;
    text-align: center;

    p {
      :first-child {
        font-size: 4rem;
      }

      :last-child {
        font-size: 1.5rem;
      }
    }
      
    hr {
      width: 150px;
      margin: .5rem auto;
      border: 1px solid var(--gray);
    }
  }

  div:last-child {
    margin-top: 1rem;
    padding: 0 2rem 2rem;

    p {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
