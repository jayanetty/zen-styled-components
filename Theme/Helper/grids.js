import styled, {css} from 'styled-components';
import {Device} from './mixins';

function getWidthString(colWidth) {
    if (!colWidth) return;

    let width = colWidth / 12 * 100;
    return `width: ${width}%`;
}

export const Flex = css`
  display: flex;
`;

export const Row = styled.div`
    ${props => props.grid && css`
      display: grid
    `};
    
    ${props => props.flex && css`
      display: flex
    `};
    
    grid-template-columns: ${ ({columns}) => columns ? columns : '' }; 
    grid-template-rows: ${ ({rows}) => rows ? rows : '' };
    height: ${ ({height}) => height ? height : '' }; 
    
    @media ${Device.mobile} {
        grid-template-columns: ${ ({col_s}) => col_s ? col_s : '' }; 
        grid-template-rows: ${ ({row_s}) => row_s ? row_s : '' };
    }
    
    @media ${Device.tablet} {
        grid-template-columns: ${ ({col_m}) => col_m ? col_m : '' }; 
        grid-template-rows: ${ ({row_m}) => row_m ? row_m : '' };
    }
    
    @media ${Device.desktop} {
        grid-template-columns: ${ ({col_l}) => col_l ? col_l : '' }; 
        grid-template-rows: ${ ({row_l}) => row_l ? row_l : '' }; 
    }
`

export const Column = styled.div`
    ${({ sm }) => (sm ? getWidthString(sm) : 'width:100%')}; 
    ${props => props.grid && css`
      display: grid
    `};
    ${props => props.flex && css`
      display: flex
    `};
    
    align-items: ${ ({align}) => align ? align: '' };
    justify-content: ${ ({justify}) => justify ? justify: '' };
    
    @media ${Device.tablet} {
        ${({ md }) => md && getWidthString(md)};
    }
    
    @media ${Device.desktop} {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`
