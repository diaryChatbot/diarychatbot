import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BoardBodyBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 120rem;
    margin: 5rem auto 0;
    font-family: var(--font-notoSerifKR);
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
        transition: all 1s;
    }
`;
