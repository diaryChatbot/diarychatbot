import styled from 'styled-components';

export const Date = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid #b0b0b0;
    font-size: 25px;
    font-weight: bolder;
    color: #460f0f;
`;

export const TitleBg = styled.div`
    border-bottom: 1px solid #b0b0b0;
    display: flex;
`;
export const Tilte = styled.label`
    padding: 10px 30px;
    font-size: 25px;
    font-weight: bolder;
    color: #460f0f;
    width: 25%;
`;
export const TitleCont = styled.textarea`
    border-left: 1px solid #b0b0b0;
    font-size: 15px;
    box-sizing: border-box;
    padding: 15px;
    width: 75%;
    background-color: #faf7f4;
    resize: none;

    &:focus {
        border: 1px solid black;
    }
`;

export const Cont = styled.textarea`
    overflow: auto;
    padding: 10px 30px;
    width: 100%;
    height: 250px;
    resize: none;
    background-color: #faf7f4;
    box-sizing: border-box;
    border-bottom: 1px solid #b0b0b0;
    &:focus {
        border: 1px solid black;
    }
`;
export const Palette = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid #b0b0b0;
    justify-content: space-around;
    display: flex;
    list-style: none;
`;
