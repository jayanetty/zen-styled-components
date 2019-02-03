import styled, { css, createGlobalStyle } from "styled-components";
import {Colors} from '../Helper/variables'
import {Device, Animations} from '../Helper/mixins'

/* ======================== Theme Variables ================================= */

// Theme common variables
export let Theme = {
    primary_font: 'Lato, sans-serif',
    secondary_font: 'Montserrat, sans-serif',
    font_size: '1.4rem',
    line_height: '1.4',

    grid__gap: '8px',

    input__padding: '6px 10px',
    input__border_width: '2px',
    input__border_color: '#fff',
    input__border_style: 'solid',

    inner_wrapper__width_s: '90%',
    inner_wrapper__width_m: '730px',
    inner_wrapper__width_l: '1270px',
};

export const ListWrapperStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListWrapper = styled.ul`
    ${ListWrapperStyle};
`;

/* ======================== Global Styling ================================= */
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-size-adjust: 100%;
        
        body {
            margin: 0;
            padding: 0;
            font-family: ${Theme.primary_font}; 
            font-size: 1.4rem;
            line-height: 1.4;  
            color: ${Theme.primary_color};

            @media ${Device.tablet} {
              background-color: ${Theme.secondary_color};
            }
            
            @media ${Device.desktop} {
              background-color: ${Colors.white};
            }
            
            a {
              transition: ${Animations.transition__default};
              color: ${Colors.link_color};
              
              &:hover {
                color: ${Colors.link_color__hover};
              }
            }
             
             button {
                background: transparent;
                border: 0;
                box-shadow: none;
                width: auto;
             }
        } 
    }
`;
