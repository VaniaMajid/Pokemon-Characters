export async function fetchCharacterData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
      const response = await fetch(url);
     return await response.json(); 
    
  }