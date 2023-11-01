import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useCats } from "../../hooks/use-cats";
import { CastCard } from "./CastCard";

export const ImageGrid = () => {
  const { filterCats, breeds, handleSelectBreed, breedSelected } = useCats();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectBreed(event.target.value);
  };

  return (
    <div>
      <div className="d-flex justify-content-start align-items-center pb-2">
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
      </div>
      <Row className="mt-3 flex-wrap">
        {filterCats.map((cat) => (
          <Col sm={6} md={4} lg={3} key={cat.id} className="d-flex">
            <CastCard {...cat} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
