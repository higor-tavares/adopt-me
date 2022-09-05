import { useState, useEffect } from "react";
const localCache = {};
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("UNLOADED");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  async function requestBreedList() {
    setBreedList([]);
    setStatus("LOADNING");
    const res = await fetch(`
    http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    const json = await res.json();
    localCache[animal] = json.breeds || [];
    setBreedList(localCache[animal]);
    setStatus("LOADED");
  }
  return [breedList, status];
}
