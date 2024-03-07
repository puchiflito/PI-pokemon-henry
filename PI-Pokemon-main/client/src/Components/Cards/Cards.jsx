import Card from "./Card";
import style from "./cards.module.css";
const Cards = ({ nPokemons }) => {
  return (
    <div className={style.pokemons}>
      {nPokemons.map((pokemon, index) => (
        <Card
          key={index}
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
          hp={pokemon.health}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
          type={pokemon.type}
          source={pokemon.source}
          types={pokemon.type}
        />
      ))}
    </div>
  );
};

export default Cards;
