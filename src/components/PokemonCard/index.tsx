
import { Link } from 'react-router-dom';
import { ImageContainer, StyledPokemonCard } from 'Components/PokemonCard/pokemonCard.style';

type PokemonCardProps = {
  name: string;
  url: string;
};

function getPokemonId(url: string): string {
  const parts: string[] = url.split("/");
  const id: string = parts[parts.length - 2];
  return id;
}



function PokemonCard({name, url}: PokemonCardProps) {
  const pokemonId = getPokemonId(url);

  return (
    <StyledPokemonCard className="pokemonCard">
    <Link to={`/pokemon/${name}?url=${encodeURIComponent(url)}&id=${pokemonId}&name=${name}`} style={{textDecoration:'none'}}>
        <ImageContainer className="imgContainer">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt=""
          />
        </ImageContainer>
        <h3>{name}</h3>
    </Link>
    </StyledPokemonCard>
  );
}

export default PokemonCard;

