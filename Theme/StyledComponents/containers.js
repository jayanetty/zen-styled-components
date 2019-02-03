import styled from 'styled-components';
import { Device } from "../Helper/mixins";
import { Theme } from "./theme";

export const FullwidthWrapper = styled.section`
  width: 100%;
`;

export const InnerWrapper = styled.section`
  margin: 0 auto;
  max-width: ${Theme.inner_wrapper__width_s};
  
  @media ${ Device.tablet } {
    max-width: ${ Theme.inner_wrapper__width_m };
  }
  
  @media ${ Device.desktop } {
    max-width: ${ Theme.inner_wrapper__width_l };
  }
`;