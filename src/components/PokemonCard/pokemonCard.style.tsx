import styled from "styled-components"

export const StyledPokemonCard = styled.div`
  background-color: rgb(12, 12, 12);
  width: 200px;
  border: 0.5px solid rgba(255, 255, 255, 0.171);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 2px 2px 20px rgba(44, 146, 255, 0.611);
  }

  h3 {
    text-align: center;
    color: #ffffff;
    margin-top: -15px;
    margin-bottom: 15px;
    font-weight: bolder;
    font-family: 'Share Tech Mono';
  }

  @media only screen and (max-width:1400px) {
    width: 20%;
  }
  
  @media only screen and (max-width:1100px) {
    width: 25%;
  }
  
  @media only screen and (max-width:900px) {
    width: 36%;
  }
  
  @media only screen and (max-width:550px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    filter: drop-shadow(7px 7px 15px #bfb45679);
    width: 100%;
    height: 90%;
    margin-top: -20px;
  }
`