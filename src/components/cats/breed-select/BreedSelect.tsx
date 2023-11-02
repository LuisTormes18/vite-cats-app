import { Form } from "react-bootstrap";
import { useGetBreeds } from "../../../hooks";
import { useCatsStore } from "../../../store";

export const BreedSelect = () => {
  const { breeds } = useGetBreeds();
  const breedSelected = useCatsStore((state) => state.breedSelected);
  const changeSelectedBreed = useCatsStore((state) => state.changeSelectedBreed);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeSelectedBreed(event.target.value);
  };

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        style={{ maxWidth: "300px" }}
        value={breedSelected}
        onChange={handleSelect}
      >
        <option value="">Todos</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};
