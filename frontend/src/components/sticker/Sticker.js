import styled from 'styled-components';

const StickerAlign = styled.div`
    margin: 10px;
    color: #460f0f;
    width: ${(props) => (props.small ? '100px' : '140px')};
    height: ${(props) => (props.small ? '35px' : '50px')};
    background-color: ${(props) =>
        props.dfb1a3 ? '#dfb1a3' : props.A5A2AA ? '#A5A2AA' : props.F3AC7F ? '#F3AC7F' : 'none'};
`;
export const Sticker = ({ ...rest }) => {
    return <StickerAlign {...rest}></StickerAlign>;
};
