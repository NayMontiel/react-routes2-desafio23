import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export default function Post () {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  
  // consumiendo api
  const endpoint = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    
    const res = await fetch(`${endpoint}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }));

    const types = data.types.map((item) => item.type.name).join(" ");
    //console.log({name, src, types, stats});
    setPokemon({ name, stats , src, types});
  };
  console.log(pokemon);

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  );
};


