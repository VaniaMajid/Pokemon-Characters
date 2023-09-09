import styled from "styled-components"


export const StyledImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 32%;
    padding: 20px;
    transition: 0.5s ease;

    &:hover {
        filter: drop-shadow(7px 7px 15px #bfb45679);
    }

    @media only screen and (max-width:1400px) {
        width: 35%;
      }
      
    @media only screen and (max-width:1100px) {
        width: 50%;
    }
      
    @media only screen and (max-width:900px) {
        width: 55%;
    }
      
    @media only screen and (max-width:550px) {
        width: 80%;
    }
`;


export const StyledHeader = styled.header`
   
`;