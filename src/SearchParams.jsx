import { React, useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="locations">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breed
          <select
            id="breeds"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          animal={pet.animal}
          breed={pet.breed}
          name={pet.name}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
