import styled from "styled-components";
import {Colors} from "./variables";
import {Theme} from "../StyledComponents/theme";

export const H1 = styled.h1`
    font: 4rem ${Theme.secondary_font};
`

export const H2 = styled(H1)`
    font-size: 2.5rem;
    text-align: center;
`

export const H3 = styled(H1)`
    font-size: 2.4rem;
`

export const H4 = styled(H3)`
    color: ${Colors.red};
`

export const P = styled.p`
    line-height: 1.6rem;
`

export const Ps = styled(P)`
    color: ${Colors.dark_gray};
    font-size: 1.4rem;
`;