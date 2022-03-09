import styled from 'styled-components';

const Nav = styled.nav`
    height: 80px;
    max-width: 920px;
    margin: 8px auto;
    display: flex;
    background: var(--purple);
    border-radius: 8px;
    
    ul {
        height: 40px;
        width: min-content;
        margin: auto 40px;
        display: flex;
        align-items: center;
        justify-self: flex-start;
        flex: 1;
        
        li {
            list-style: none;
            padding: 0 24px;
            color: var(--text);
        }
    }

    .Active {
        border-bottom: 2px solid #fff;
        color: #fff;
    }
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 0 16px;

    p {
        font-size: 16px;
        text-align: center;
        padding: 8px;
        color: #1f1f1f;
        cursor: pointer;
        transition: all ease .2s;

        :hover {
            color: #fff;
        }
    }

`;

Profile.User = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
    }

    span {
        font-size: 16px;
        line-height: 1.5;
        margin-left: 8px;
        color: #1f1f1f;
    }
`;

export { Nav, Profile }
