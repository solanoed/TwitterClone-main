import styled  from "styled-components";

export const Container = styled.div`
    background: red;
`;

export const Button = styled.button`
    background: ${props => props.background ? "red" : "blue"};
`;