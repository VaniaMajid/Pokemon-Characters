import PokemonCard from "Components/PokemonCard";
import {Pokemon} from "../Home"
import { PokemonCards } from "Containers/PokemonCards/cardsContainer.styles";

type PokemonCardsSectionProps = {
    pokemons: Pokemon[];
  };

export default function PokemonCardsSection ({pokemons}: PokemonCardsSectionProps) {

    function getPokemonId(url: string): string {
        const parts: string[] = url.split("/");
        const id: string = parts[parts.length - 2];
        return id;
      }

    return (
        <PokemonCards className="pokemonCards" >
                {pokemons.map((pokemon: Pokemon) => (
                  <PokemonCard
                  key={getPokemonId(pokemon.url)}
                  name={pokemon.name} 
                  url={pokemon.url}
                  />
                ))}
        </PokemonCards>
    )
}





