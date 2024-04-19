import { FunctionComponent } from "preact";
import ImputComp from "../components/InputComp.tsx";
import Viewer from "../components/Viewer.tsx";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Character } from "../types.ts";

const InputForm: FunctionComponent<{ name: string }> = ({ name }) => {
  const [id, setId] = useState<string>("1");
  const [CharacterData, setCharacterData] = useState<Character | null>(null);
  const nameSignal = useSignal<string>(name);
  useEffect(() => {
    fetchCharacter(id);
  }, [id]);
  const fetchCharacter = async (id: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const data = await response.json();
    setCharacterData(data);
  };
  return (
    <div>
      <input
        type="text"
        value={id}
        onInput={(e) => setId(e.currentTarget.value)}
      />
      {CharacterData && (
        <div>
          <h2>{CharacterData.name}</h2>
          <img src={CharacterData.image} alt={CharacterData.name} />
        </div>
      )}
    </div>
  );
};
export default InputForm;
