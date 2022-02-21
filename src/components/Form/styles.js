import styled from 'styled-components';

const FormStyle = styled.form`
    height: 220px;
    width: 280px;
    margin: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: var(--gray);
    border: 1px solid var(--purple);
    border-radius: 8px;    
`;

const FormField = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    margin-top: 12px;
    
    
    label {
        font-size: 16px;
        flex: 1;
    }
    
    input {
        width: 165px;
        height: 25px;
        text-indent: 8px;
    }
`;

export { FormStyle, FormField }
