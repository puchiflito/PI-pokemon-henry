import Card from "./Card";
const Cards = ({ nPokemons }) => {
  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default Cards;
