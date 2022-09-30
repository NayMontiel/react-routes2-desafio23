import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Pokemones = () => {
  
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState('');
  const navigate = useNavigate();
 
  // consumir api 
  const endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
  const getImg = async () => {
    
    const res = await fetch(endpoint);
    let data = await res.json();
     let dataFilt = data.results.map((item) => ({
       name: item.name,
       src: item.url,
      
      }));
      setPokemones(dataFilt);
      console.log(dataFilt);
  };

  useEffect(() => {
    getImg();
  }, []);
 

  const irAPost = async () => {
    if(pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
    else alert('Por favor seleccione un pokemon')
  };

  return (
    <div className="selector animate__animated animate__bounce">
      <h2> Seleccione un pokemón</h2>
      <select
        name="pokemones"
        className="option"
        value={pokemonSelected}
        onChange={({ target }) => setPokemonSelected(target.value)}
      >
        <option value="" disabled>Pokemones</option>
        {pokemones.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
        ;
      </select>
      <button className="btnVer" onClick={irAPost}>
        Ver Detalle
      </button>
    </div>
  );
};

export default Pokemones;
