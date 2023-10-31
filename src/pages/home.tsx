import { Button, Form } from "react-bootstrap";
import { useForm } from "../hooks";

export const HomePage = () => {
  const { formData, handleInputChange } = useForm({ user: "", password: "" });

  // handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    window.location.href = "/profile";
    return;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Form style={{ width: "100%", maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="usuario"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="contraseña"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Iniciar sesión
        </Button>
        <Button variant="outline-light" type="submit" className="w-100">
          Registrase
        </Button>
      </Form>
    </div>
  );
};
