import styled from 'styled-components';

export const Cont = styled.div`
    padding: 3rem;
    min-height: 25rem;
    min-width: 40rem;
`;

export const ScoreBg = styled.div`
    text-align: center;
    @media (min-width: 65rem) {
        justify-content: space-around;
        display: flex;
        align-items: center;
    }
`;
export const Score = styled.div`
    font-size: 7rem;
    font-weight: bolder;
    color: #ff6a49;
    @media (min-width: 65rem) {
        min-width: 15rem;
    }
`;
export const Icon = styled.img`
    // width: 20rem;
    height: 18rem;
`;
