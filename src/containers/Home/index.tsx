import { useState, useEffect } from 'react';
import pokemonImage from 'Assets/pokemon.png';
import PokemonCardsSection from 'Containers/PokemonCards';
import Header from 'Components/Header';
import { fetchCharacterData } from 'Containers/Home/api';

// Pokemon type
export type Pokemon = {
    name: string;
    url: string;
  };
  
  // type to store list of pokemons
  export type PokemonListResponse = {
    results: Pokemon[];
  };

export default function Home () {

    //set all the fetched pokemons
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);


  useEffect(() => {
    async function fetchData() {
     try{
      const response : PokemonListResponse = await fetchCharacterData()
      setPokemonList(response?.results)
     }catch(e){

     }
    }

    fetchData();
  }, []);

    return(
        <>
           <Header imgSrc={pokemonImage}></Header>
           <PokemonCardsSection pokemons={pokemonList}></PokemonCardsSection>
        </>
       
    )
}