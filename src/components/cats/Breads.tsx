import { Form } from "react-bootstrap";

export const Breads = () => {
  //   https://api.thecatapi.com/v1/breeds

  return (
    <div>
      <Form className="w-200">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};
