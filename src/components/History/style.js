import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 8px 0;
  margin-top: 42px;

  border: 1px solid var(--purple);
  border-radius: 8px;

  p {
    font-size: 24px;
    padding: 8px 4px;
  }

  table {
    width: 100%;
    font-size: 16px;
    text-align: left;
    border-spacing: 2px 8px;
    
    tr {
      height: 40px;
      
      :nth-child(2n + 1) {
          background: var(--gray);
      }
    }
    
    th, td {
      padding: 8px;
    }
    
    td:last-child {
      width: 20px;
    }

    td img {
      height: 22px;
      width: auto;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export { Container }
