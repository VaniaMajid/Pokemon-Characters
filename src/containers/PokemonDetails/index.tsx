import { useEffect, useState } from 'react';
import { Abilities, NameHeader, StyledPokemonDetails } from 'Containers/PokemonDetails/pokemonDetails.style';
import { fetchEffect, fetchPokemonDetails } from 'Containers/PokemonDetails/api';

type Abilities = {
  ability: {
    name: string;
    url: string;
  };
};

type Effects = {
  effect: string;
  language: {
    name: string;
    url: string;
  };
};

type PokemonDataResults = {
  abilities: Abilities[];
};

type EffectDataResults = {
  effect_entries: Effects[];
};


function PokemonDetails() {
  const [pokemonName, setPokemonName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [abilitiesData, setAbilitiesData] = useState<Abilities[]>([]);
  const [abilityEffects, setAbilityEffects] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDetails() {
      const pokemonURL: string | null = getQueryParam('url')!;
      const pokemonName: string | null = getQueryParam('name')!;
      const pokemonId: string | null = getQueryParam('id');
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  
      try {
        const pokemonData: PokemonDataResults = await fetchPokemonDetails(pokemonURL);
        setPokemonName(pokemonName);
        setImageUrl(imageUrl);
        setAbilitiesData(pokemonData.abilities);
        fetchAbilityEffects(pokemonData.abilities);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDetails();
  }, []);

  function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }


  async function getEffect(url: string): Promise<string> {
    try {
      const abilityData: EffectDataResults = await fetchEffect(url);
      const effectEntries: Effects[] = abilityData.effect_entries;
      let effectText: string = '';

      effectEntries.forEach((effectEntry: Effects) => {
        if (effectEntry.language.name === 'en') {
          effectText = effectEntry.effect;
        }
      });
      return effectText;
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  async function fetchAbilityEffects(abilities: Abilities[]) {
    const effects: string[] = await Promise.all(
      abilities.map((ability) => getEffect(ability.ability.url))
    );
    setAbilityEffects(effects);
  }

  return (
    <div>
      <NameHeader className="name">{pokemonName}</NameHeader>
      <StyledPokemonDetails id="pokemonDetails">
        <div className="imgContainer">
          <img src={imageUrl} alt="" />
        </div>
        <Abilities className="abilities">
          <header>Abilities</header>
          {abilitiesData.map((ability: Abilities, index: number) => (
            <div key={ability.ability.name}>
              <h2>{ability.ability.name}</h2>
              <p>{abilityEffects[index]}</p>
            </div>
          ))}
        </Abilities>
      </StyledPokemonDetails>
    </div>
  );
};

export default PokemonDetails;
