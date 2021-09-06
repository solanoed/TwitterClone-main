import styled, {css} from "styled-components";

export const Container = styled.section`
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-content:space-evenly;
    grid-template-columns: 100px 100px;
    
`;

export const ContainerLeft = styled.div`
    // Jaime´s Version
    
    // display: grid;
    // place-items: center;
    // background: #1DA1F2;
    // width: 100%;
    // height: 100vh;

    // David Version

    display: grid;
    place-items: center;
    background: #1DA1F2;
    width: 100%;
    height: 100vh;

`;

export const ContainerRight = styled.div`
    display: grid;
    place-items: center;
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
`;

export const ContainerElements = styled.div`
    display: grid;
    place-items: center;
    width: 100%;

`;

export const Button = styled.button`
    background: #FFFFFF;
    border: 1px solid #1DA1F2;
    box-sizing: border-box;
    border-radius: 999px;
    padding: 10px;
    color: #1DA1F2;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    width: 35%;
    margin: 10px 10px 10px 10px;
    
`;

export const LoginButton = styled(Button)`

    color: #FFFFFF;
    background: #1DA1F2;
`;

export const SignButton = styled(Button)`

    background: #FFFFFF;
    color: #1DA1F2;
`;


export const Image = styled.img`
    ${({big}) => big && css`
        width: 70%;
        height: 70%;
    `}

    ${({small}) => small && css`
        width: 30%;
        height: 30%;
    `}
`;