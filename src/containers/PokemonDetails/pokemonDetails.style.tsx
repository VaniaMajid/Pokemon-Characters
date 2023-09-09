import styled from "styled-components"

export const NameHeader = styled.header`
  color: rgb(185, 147, 23);
  font-size: 45px;
  font-weight: bolder;
  text-align: center;
  background-color: rgba(12, 12, 12, 0.74);
  border: 0.5px solid rgba(255, 255, 255, 0.171);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;

  @media only screen and (max-width: 1000px) {
    
    font-size: 40px;
    
  }
  
  @media only screen and (max-width: 770px) {
    font-size: 35px;
  }
  
  @media only screen and (max-width: 300px) {
    font-size: 30px;
  }
`

export const StyledPokemonDetails = styled.section`
  background-color: rgba(12, 12, 12, 0.74);
  border-radius: 10px;
  display: flex;
  border: 0.5px solid rgba(255, 255, 255, 0.171);

  .imgContainer {
    background-color: rgb(24, 24, 24);
    border: 0.5px solid rgba(255, 255, 255, 0.171);
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px;
  }

  img {
    width: 100%;
    filter: drop-shadow(7px 7px 15px #bfb45679);
  }
  
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;   
    
    .imgContainer {
      width: 96.5%;
      margin-bottom: 0px;
    }

    img {
      width: 60%;
    }
  }
  
  @media only screen and (max-width: 300px) {
    img {
      width: 70%;
    }
  }
`

export const Abilities = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header{
    color: rgb(157, 15, 15);
    font-size:30px;
    font-weight: bolder;
    background-color:rgba(12, 12, 12, 0.623);
    border-radius: 10px;
    text-align: center;
    margin: 10px 10px 0px 0px;
    padding: 10px;
    border: 0.5px solid rgba(255, 255, 255, 0.171);
  }

  div{ 
    background-color:rgba(12, 12, 12, 0.623);
    border: 0.5px solid rgba(255, 255, 255, 0.171);
    border-radius: 10px;
    margin: 10px 10px 10px 0px;
    padding: 10px;
    height: 100%;
  }
  
  h2 {
    color: rgba(255, 255, 255, 0.795);
    font-size:25px;
    font-weight: lighter;
    margin: 10px;
    text-align: justify;
    background-color: rgba(0, 0, 0, 0.399);
    padding: 20px;
    border-radius: 10px;
  
  }
  
  p {
    color: rgba(87, 180, 217, 0.795);
    font-size:20px;
    margin: 20px;
    font-weight: lighter;
  }

  @media only screen and (max-width: 1000px) {
    header {
        font-size:25px;
    }
  }
  
  @media only screen and (max-width: 770px) {
  
    header, div {
        margin-left: 10px;
    }
    h2 {
        font-size:20px;
    
    }
    p {
        font-size:17px;
    }
  }
  
  @media only screen and (max-width: 300px) {
    header {
        font-size:25px;
    }
  }

`