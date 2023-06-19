import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BoardBodyBg = styled.div`
    margin-top: 10rem;
    margin-bottom: 11rem;
    // width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 44rem;
    @media (min-width: 65rem) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    // margin: 5rem auto 0;
    font-family: var(--font-notoSerifKR);
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
        transition: all 1s;
    }
`;
