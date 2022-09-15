import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div>
      { !pets.length? (
        <h1>No pets found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            name={pet.name}
            key={pet.id}
            id={pet.id}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;