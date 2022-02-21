import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid var(--purple);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

Container.Balance = styled.div`
    height: fit-content;
    min-width: fit-content;
    padding: 8px;
    text-align: center;
    flex: 1;
    
    p {
        font-size: 24px;
        padding: 8px 0;
        
        :first-child {
            color: var(--purple);
        }
    }
`;

Container.FormsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 3;
`;

export { Container }
