 //Creating A Mobile Responsivess Function To avoid Repetition
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width:450px) {
      ${props}
    }
  `;
};
  export const tablet = (props) => {
   return css`
   @media only screen and (max-width:955px ){
     ${props}
   }
   `
  }
  export const desktop = (props) => {
    return css`
    @media only screen and (min-width:955px){
      ${props}
    }
    `
   }
