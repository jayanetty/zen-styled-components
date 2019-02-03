import styled from "styled-components";
import {Colors} from "../Helper/variables";

export const Button = styled.button`
    padding: 8px 15px;
    background-color: transparent;
    color: ${Colors.white};
    border: 2px solid ${Colors.white};
    text-transform: uppercase;
    font-size: 1.3rem;
    cursor: pointer;
    
    &:hover {
        background-color: ${Colors.white};
        color: ${Colors.gray_dark}; 
    }
`