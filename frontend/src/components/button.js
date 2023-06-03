import styled from 'styled-components';

const ButtonBg = styled.div`
    width: 500px;
    height: 60px;
    margin: 10px;
`;

const ButtonShadow = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: -7px -7px 12px rgba(255, 255, 255);
`;

const ButtonCont = styled.button`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid black;

    box-shadow: 8px 8px 12px rgba(80, 29, 0, 0.16);
    background-color: ${(props) => (props.primary ? '#f50057' : 'white')};
    font-size: 20px;
    background-color: ${(props) => {
        switch (props.backgroundColor) {
            case 'small':
                return '4px 8px';
            case 'medium':
                return '8px 16px';
            case 'large':
                return '12px 24px';
            default:
                return '8px 16px';
        }
    }};
    border-radius: 24px;
`;

export const Button = ({ children, ...rest }) => {
    return (
        <ButtonBg>
            <ButtonShadow>
                <ButtonCont {...rest}>{children}</ButtonCont>
            </ButtonShadow>
        </ButtonBg>
    );
};
