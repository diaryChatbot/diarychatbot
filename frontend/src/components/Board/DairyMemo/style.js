import styled from 'styled-components';

export const Date = styled.div`
    padding: 1rem 3rem;
    border-bottom: 1px solid #b0b0b0;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #460f0f;
`;

export const TitleBg = styled.div`
    border-bottom: 1px solid #b0b0b0;
    align-items: center;
    vertical-align: middle;

    display: flex;
`;
export const Tilte = styled.label`
    padding: 1rem 3rem;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #460f0f;
    width: 30%;
`;
export const TitleCont = styled.textarea`
    border-left: 1px solid #b0b0b0;
    font-size: 1.5rem;
    box-sizing: border-box;
    padding: 2rem 0 0 1rem;
    width: 70%;
    background-color: #faf7f4;
    resize: none;
    font-family: var(--font-notoSerifKR);
    &:focus {
        border: 1px solid black;
    }
`;

export const Cont = styled.textarea`
    overflow: auto;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    width: 100%;
    height: 35rem;
    background-color: #faf7f4;
    resize: none;
    box-sizing: border-box;
    border-bottom: 1px solid #b0b0b0;
    font-family: var(--font-notoSerifKR);
    &:focus {
        border: 1px solid black;
    }
`;
export const Palette = styled.div`
    // padding: 1rem 3rem;
    // border-bottom: 1px solid #b0b0b0;
    justify-content: space-around;
    display: flex;
    list-style: none;
`;
